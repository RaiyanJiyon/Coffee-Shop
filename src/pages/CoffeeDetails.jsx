import { useLoaderData, useParams } from "react-router-dom";
import nutritionImg from "../assets/nutrition.png"
import { useEffect } from "react";
import { addToCart, addToWishList } from "../utilities/addToDb";


const CoffeeDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams();
    const coffeeId = parseInt(id);

    console.log(coffeeId);
    const allCoffee = useLoaderData();
    console.log(allCoffee);

    const filteredCoffee = allCoffee.find(coffee => coffee.id === coffeeId);

    console.log(filteredCoffee)

    const handleAddToCart = (coffeeID) => {
        addToCart(coffeeID);
    };

    const handleAddToWishlist = (coffeeID) => {
        addToWishList(coffeeID);
    };

    const { id: coffeeID, description, image, ingredients, nutrition_info, making_process, rating, popularity } = filteredCoffee;

    return (
        <div className="w-11/12 mx-auto mt-4">
            <h1 className="text-3xl font-medium pb-6">{description}</h1>
            <img className="rounded-lg w-full md:h-[400px]" src={image} alt="" />

            <div className="space-y-2 mt-10">
                <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-center">
                    <h2 className="text-2xl">Mocha</h2>
                    <div className="flex justify-between w-full sm:w-auto space-x-4 py-4 sm:py-0">
                        <button onClick={() => handleAddToCart(coffeeID)} className="btn bg-red-500 text-white border-none font-bold">Add To Cart</button>
                        <button onClick={() => handleAddToWishlist(coffeeID)} className="btn bg-red-500 text-white border-none font-bold">Add To Wishlist</button>
                    </div>
                </div>
                <p>Popularity: {popularity}</p>
                <p>Rating: {rating}</p>
            </div>

            <div className="space-y-4 mt-4">
                <h2 className="text-2xl">Making Process</h2>
                <p>Popularity: {making_process}</p>
            </div>

            <div className="flex justify-between gap-6 mt-10">
                <div className="space-y-4 w-1/2">
                    <div>
                        <h2 className="text-2xl">Ingredients</h2>
                        <ul className="pl-4 mt-3">
                            {
                                ingredients.map((ingredients, index) => (
                                    <li key={index} className="list-disc">{ingredients}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl">Nutrition</h2>
                        <ul className="pl-4 mt-3">
                            {

                                Object.entries(nutrition_info).map((nutrition, index) => (
                                    <li key={index} className="list-disc">{nutrition}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="space-y-4 w-1/2">
                    <img className="md:h-11/12" src={nutritionImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;