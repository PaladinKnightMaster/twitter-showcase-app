'use client'
import Searchbar from "./Searchbar";
import Tweet from "../Tweet";
import { useState } from "react";

export default function Search() {
    const [data, setData] = useState([{}]);
    const [loading, setLoading] = useState(false)

    const handleSearch = async (name) => {
        setLoading(true)
        await fetch(`/api/search/${name}`)
            .then(res => res.json())
            .then(data => {
                setData(data)     
            })
        setLoading(false)      
    }

    return (
        <>
        <div className="flex flex-col py-8">
            <h2 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center bg-clip-text font-medium text-transparent">Search for recent tweets of an user or by keyword</h2>
        </div>
        
        <div className="flex justify-center pl-14 py-4">
           <Searchbar onSearch={handleSearch}/>
        </div>


        <div className="grid grid-flow-row gap-y-px justify-center mb-20">  
         {(typeof data.results == 'undefined' || data.results.length == 0) ? (
            <div className="font-light mt-9 max-w-sm">
                Please select a name, handle or keyword and press search
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