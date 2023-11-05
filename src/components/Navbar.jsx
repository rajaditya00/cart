import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Navbar(){

    const {cart} = useSelector( (state) => state);

    return(
<div>
  <nav className="flex flex-row justify-between items-center h-20 max-w-6xl   ">
   
   <div className='ml-5'>
   <NavLink to="/">
            <div className=' flex flex-row ml-5 justify-between items-center' >
            <img src="../martlogo.png" alt="img" className='h-14'/>
            </div>
         </NavLink>
                      
   </div>
        
             <div className=' flex flex-row mr-5 justify-between items-center'>

         <div className='mr-[30px]'>
            <NavLink to="/">
            <p>Home</p>
            </NavLink>
         </div>
            
        <div className='mr-[30px]'>
 
        <NavLink to="/cart">
                <div className='relative'>
                <FaShoppingCart className="text-2xl"/>
                {
                    cart.length > 0 &&
                    <span
                    className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'
                    >{cart.length}</span>
                }
                 
                </div>
            </NavLink>

        </div>
         
            <div className='mr-[30px]'>
            <NavLink to="/about">
          <div className='flex items-center font-medium text-slate-100 mr-1 space-x-6'>
                        <div className='flex items-center font-medium    space-x-3 w-[45px] h-[45px] bg-blue-900 rounded-full overflow-hidden cursor-pointer'>
                        <img 
                        src="../0-1.png" alt="img.."/>
                        </div>
           </div>

          </NavLink>
          

            </div>

       

         

             </div>
            
   
  </nav>

</div>

    );
}