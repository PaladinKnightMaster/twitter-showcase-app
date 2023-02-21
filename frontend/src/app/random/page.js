'use client'
import { useState } from "react";
import Tweet from "../Tweet";
import { Button } from "./Button";
import Image from "next/image";

export default function Random() {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true)  
    await fetch('/api/random')
          .then(res => res.json())
          .then(data => {
            setData(data)
          })
    setLoading(false)        
  }

    return (
      <>
        <div className="flex flex-col py-8 gap-8 items-center"> 
            <h2 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center bg-clip-text font-medium text-transparent">Search for a random tweet from these Twitter Celebrities</h2>    
            <div className="grid grid-cols-2 md:flex md:flex-row gap-3">
                <Image className="w-24 h-24 rounded-full" src={'/elonmusk.png'} alt="elon" width={100} height={100} />
                <Image className="w-24 h-24 rounded-full" src={'/saylor.png'} alt="saylor" width={100} height={100} />
                <Image className="w-28 h-24 rounded-full" src={'/nasa.png'} alt="nasa" width={100} height={100} />
                <Image className="w-24 h-24 rounded-full" src={'/mohamed.jpg'} alt="elerian" width={100} height={100} />
                <Image className="w-24 h-24 rounded-full" src={'/RyanHoliday.jpeg'} alt="ryanholiday" width={100} height={100} />
            </div>  
            <Button className="" onRandom={handleSearch}/>
        </div>
        
        <div className="grid grid-flow-row gap-y-px justify-center mb-20">  
         {(typeof data.results == 'undefined') ? (
            <div className="font-light mt-9">
                Please press the button
            </div>
         ) : ((loading == true) ? (
            <div className="mt-9 loader">
                <span className="loader-text">loading</span>
                <span className="load"></span>
            </div>
         ) : (
            data.results.map((tweet,i) => (
            <Tweet  key={i} tweet={tweet} />
         ))))}
        </div>
      </>
    )
  }
  