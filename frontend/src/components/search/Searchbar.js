import { Search } from "react-bootstrap-icons"

export default function Searchbar({onSearch}) {

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(e.target.search.value);
        e.target.reset();
    }

    return (
        <form onSubmit={onSubmit} className="w-screen max-w-sm flex flex-row">                     
            <div className="relative"> 
                <div className="absolute top-3 left-3">
                    <Search className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />   
                </div>
                    <input type="text" id="search" className="h-10 w-84 pl-10 pr-20 rounded-lg z-0 text-gray-700 focus:shadow focus:outline-none" placeholder="ie. @nasa or nasa" onChange={(e) => e.target.value}/>
                    <div className="absolute top-0 right-0">
                        <button type="submit" className="order-first h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button>
                    </div>
            </div>
         </form>
    )
}