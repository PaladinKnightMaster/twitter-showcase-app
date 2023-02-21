'use client'

import Image from "next/image"
import { Twitter, Heart, Repeat } from "react-bootstrap-icons"

export default function Tweet({tweet}) {

    return (
        <main>
 
            <div id="card" className="max-w-sm overflow-hidden">

                <div className="flex flex-row flex-nowrap justify-between">
                <div>
                    <Image className="h-12 w-12 rounded-full translate-y-10" src={tweet.profile_image_url_https} alt={tweet.id} width={1000} height={1000} />       
                    <div className="translate-x-14 translate-y-1">{tweet.name}</div>
                </div>
                <Twitter className="translate-y-12 text-gray-700"/>
                </div>

            <div className="bg-gray-700 rounded-md">
                <div >
                    <div className="pt-1 text-gray-400 text-xs translate-x-14">@{tweet.screen_name}</div>  
                    <p className="font-extralight leading-tight text-left text-white p-2">
                        {tweet.text}
                    </p>
                  
                    <img className="p-2" src={tweet.image} alt={tweet.image} />
                    
                    <div className="flex flex-row gap-x-12 justify-right p-3">

                  
                        <ul className="flex" >
                            <li className="flex">
                               <Heart className="text-sm text-pink-600 translate-y-0.90 -translate-x-1"/> 
                               <span className="font-light text-xs">{tweet.favorite_count}</span>
                            </li>   
                        </ul>
                        <ul className="flex" >
                            <li className="flex">
                               <Repeat className="text-sm text-pink-600 translate-y-0.95 -translate-x-1"/> 
                               <span className="font-light text-xs">{tweet.retweet_count}</span>
                            </li>   
                        </ul>
                        <ul className="flex" >
                            <li className="flex"> 
                               <span className="font-light text-xs">{tweet.created_at}</span>
                            </li>   
                        </ul>
                    </div>

                </div>
            </div>
            </div>





        </main>
    )
}


