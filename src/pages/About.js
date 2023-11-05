import React from "react";

export default function About (){

    const instagramUserName = "raj_aditya.addy";



    function instaId(){
     const instagramURL = `https://www.instagram.com/${instagramUserName}`;
     window.open(instagramURL,"_blank");
    }


    function whatsId(){
        const whatsappURL = `https://whatsapp.com/channel/0029Va4m3az6BIEqwThFuh21`;
        window.open(whatsappURL,"_blank");
       }

       function linkedId(){
        const linkedURL = `https://www.linkedin.com/in/aditya-raj-0062ba1b3`;
        window.open(linkedURL,"_blank");
       }

    return(
        <div >

            <div className=" flex flex-col justify-center items-center mx-auto h-[50vh] uppercase text-green-800 font-bold"> 
                     <div >
                      About us
                     </div>

         <div className="flex flex-row justify-center items-center">
 
                  <div>           
                      <button
                      onClick={instaId}
                      >
                      <img 
                          className="w-[70px] h-[70px]"
                          src="../instas.png"
                          alt="Instagram"
                          /> 
                       </button>  
                   </div>

                   <div>           
                      <button
                      onClick={whatsId}
                      >
                      <img 
                          className="w-[35px] h-[35px]"
                          src="../whats.png"
                          alt="Instagram"
                          /> 
                       </button>  
                   </div>

                   <div>           
                      <button
                      onClick={linkedId}
                      >
                      <img 
                          className="w-[38px] h-[35px] ml-5"
                          src="../linked.png"
                          alt="Instagram"
                          /> 
                       </button>  
                   </div>



         </div>
         <div className="text-xs lowercase text-black-500">
            <p>© 2023 raj_aditya.addy. All Rights Reserved | Terms and Conditions</p>
         </div>

            </div>
            
        </div>
    );


}