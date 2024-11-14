import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";


const Coffee = () => {
    const allCoffee = useLoaderData();
    const [sortedCoffee, setSortedCoffee] = useState(allCoffee);
    

    const handleSortByPopularity = () => {
        const sorted = [...sortedCoffee].sort((a, b) => b.popularity - a.popularity);
        setSortedCoffee(sorted);
    }

    const handleSortByRating = () => {
        const sorted = [...sortedCoffee].sort((a, b) => b.rating - a.rating);
        setSortedCoffee(sorted);
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="flex justify-between mt-6">
                <h1 className="mb-5 text-3xl font-bold">Sort Coffee&apos;s by Popularity & Rating -{">"}</h1>
                <div className="space-x-6">
                <button onClick={handleSortByPopularity} className="btn bg-red-500 text-white border-none font-bold">Sort By Popularity</button>
                <button onClick={handleSortByRating} className="btn bg-red-500 text-white border-none font-bold">Sort By Rating</button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
                {
                    sortedCoffee.map(coffee => (
                        <CoffeeCard key={coffee.id} coffee={coffee} />
                    ))
                }
            </div>
        </div>
    );
};

export default Coffee;