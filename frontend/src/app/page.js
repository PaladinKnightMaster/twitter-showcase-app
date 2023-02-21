'use client'
import Link from 'next/link';
import { Search, Shuffle } from 'react-bootstrap-icons';
export default function Home() {

    return (
        <>
        <div className="mx-auto flex max-w-3xl flex-col m-9">
            <h1 className="font-inter font-black mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-center text-4xl uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl">Tweet Showcase</h1> 
            <h2 className="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center bg-clip-text font-medium tracking-wide text-transparent">Search for recent tweets of an user or by keyword</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-20 mt-16 ">
            <Link href={'/search'}>
            <div className="card">
                <div className="card__content flex flex-col items-center p-5">
                        <div><Search className="text-[#db5c7c] h-12 w-12 mt-5"/></div>
                        <div className='font-light mt-4' >Search for the most recent tweets by user name or keyword</div>                      
                </div>
            </div>
            </Link>
            <Link href={'/random'}>
            <div className="card">
                <div className="card__content flex flex-col items-center p-5">
                        <div><Shuffle className="text-[#db5c7c] h-12 w-12 mt-5"/></div>
                        <div className='font-light mt-4' >Get one random tweet from five different twitter celebrities</div>              
                </div>
            </div>
            </Link>      
        </div>      
       </> 
    )
}