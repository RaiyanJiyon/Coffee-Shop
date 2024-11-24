import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const CoffeeCards = () => {
    const [activeTab, setActiveTab] = useState("Brewed Coffee");

    const allCoffee = useLoaderData();

    // console.log(allCoffee);
    
    const filteredCoffee = allCoffee.filter(coffee => coffee.category === activeTab);
    // console.log(filteredCard);
    
    const handleTabClick = (category) => {
        setActiveTab(category)
    }


    return (
        <div className="w-11/12 mx-auto mt-10">
            <div className="hero-content text-center">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">Browse Coffees By Category</h1>
                    <p className="mb-5">
                        Choose your desired coffee category to browse through specific coffees that fit in your taste.
                    </p>
                </div>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <a role="tab" className={`tab ${activeTab === "Brewed Coffee" ? "tab-active text-red-500 font-bold" : ""} `} onClick={() => handleTabClick("Brewed Coffee")}>Brewed Coffee</a>
                <a role="tab" className={`tab ${activeTab === "Iced Coffee" ? "tab-active text-red-500 font-bold" : ""}`} onClick={() => handleTabClick("Iced Coffee")}>Iced Coffee</a>
                <a role="tab" className={`tab ${activeTab === "Dessert Coffee" ? "tab-active text-red-500 font-bold" : ""}`} onClick={() => handleTabClick("Dessert Coffee")}>Dessert Coffee</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
                {
                    filteredCoffee.map(coffee => (
                        <CoffeeCard key={coffee.id} coffee={coffee} />
                    ))
                }
            </div>
        </div>

    );
};

export default CoffeeCards;