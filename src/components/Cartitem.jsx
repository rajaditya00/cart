import React from "react";
import {MdDelete} from "react-icons/md"
import {useDispatch} from 'react-redux';
import {remove} from '../redux/Slices/CartSlice';
import {toast} from 'react-hot-toast';



export default function Cartitem({item, itemIndex}){

    const dispatch =useDispatch();

const removeFromCart = () =>{
    dispatch( remove(item.id));
    toast.error("Item Removed");

}

    return(
<div className="flex">

    {/* product on cart  */}
     <div className="flex flex-row items-center justify-between  mt-10 ml-[300px] border-b-2 border-green-800  w-[450px] ">
        
        <div className=" flex flex-row ">
               {/* product Image  */}
               <div className="h-[180px] mr-5" >
                   <img src={item.image} alt="img" className="h-full w-full"/> 
               </div>

                {/* product details  */}
  <div className="flex flex-col">
            
                     <h1 className="text-gray-700 font-semibold text-lg text-left  w-80  mt-1">{item.title}</h1>
            
            {/* description  */}
            <div className="w-80 text-gray-400 font-normal text-[10px] text-left">
            <h1 >{item.description.split(" ").slice(0,20).join(" ") + "..." }</h1>
            </div>


               {/* price tag */}
            <div className="flex flex-row justify-between items-center  mt-[50px] ">
 
               <p className="text-green-600 font-semibold items-center  w-full justify-center items-center">${item.price}</p>
               
                {/* remove button  */}
                      <div>
                <button
                className="w-5 h-5 flex justify-center items-center rounded-full bg-red-300   relative" 
                 onClick={removeFromCart}
                  
                >
                     <MdDelete className="absolute text-red-700"/>

                </button>
                
                      </div>
                
                
            </div>
   </div>
             
        </div>
     </div>

</div>

    );
}