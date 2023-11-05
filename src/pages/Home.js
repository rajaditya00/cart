import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


export default function Home(){

    const API_URL = "https://fakestoreapi.com/products";

    const[loading, setLoading] = useState(false);
    const[posts, setPosts] = useState([]);

    async function fetchProductData(){
        setLoading(true);
   
        try{
            const result = await fetch(API_URL);
            const data = await result.json();
            console.log("data printing");
            console.log(data);
            setPosts(data);

        }

        catch(error){
  console.log("error aa gya data me :");
  setPosts([]);

        }
      setLoading(false)
    }


    useEffect( ()=>{
        fetchProductData();
    },[])

  return(
     <div>

        <div>
        {
            loading ? 
            <Spinner/> :
            posts.length > 0 ?
            (<div 
            className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh] "
            >
                {
                posts.map((post) => { 
                   return (
                    <Product key ={post.id} post={post}/>
                 )})
                }
            </div>):
            (<div className="flex justify-center items-center text-green-800 h-[50vh] font-bold">
                <p>No Data Found</p>
            </div>) 

        } 
        </div>
            
    </div>);

}