import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import Cartitem from "../components/Cartitem";

export default function Cart(){

const{cart} = useSelector((state) => state);
const[totalAmount,setTotalAmount] = useState(0);

useEffect( ()=>{
    setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price,0));

},[cart])

    return(
<div >
          <div >
             

          {
                cart.length >0 ?
                (<div className="flex flex-cols w-11/12">
                    {/* cartItem  */}
                    <div className="ml-5 mr-5">
                        {
                            cart.map( (item,index ) =>{
                                return <Cartitem key={item.id} item={item} itemIndex={index}/>
                            })
                        }

                    </div>

                    {/* payment summary  */}
                
                    <div className="ml-5">
                            <div className="mt-7px">
                                 <div className="text-md uppercase text-green-800 pt-[20px]">Your Cart</div>
                                 <div className="uppercase text-[23px] text-green-800 font-bold">Summary</div>
                                 <p className="text-[12px]  ">
                                    <span>Total Items: {cart.length}</span>
                                 </p>
                            </div>   
                         <div className="mt-[400px]">
                                <p className="text-[12px]">Total Amount:<span className="font-bold"> ${totalAmount}</span> </p>
                                <button className="px-5 py-5 pt-2 pb-2 mt-[15px] bg-green-800 text-white font-bold border rounded-xl">
                                    CheckOut Now
                                </button>
                         </div>    
                      
                    </div>

                </div>):
                    // Empty cart 
                (<div className=" flex flex-col justify-center items-center text-green-800  h-[50vh]">
                <h1> Your Cart is Empty </h1>
                <NavLink to={'/'}>
                <button 
                className="font-bold text-white bg-green-800 pl-5 pr-5 pt-2 pb-2 rounded-lg mt-[10px]"
                >
                Shop Now
                </button>
                </NavLink>
                
                </div>)
            }

          </div>
         
</div>
    )
}