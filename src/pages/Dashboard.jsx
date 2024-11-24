import { useLoaderData } from "react-router-dom";
import { getCart, getWishList } from "../utilities/addToDb";

const Dashboard = () => {
    const allCart = getCart();
    const allWishlist = getWishList();

    console.log(allCart);
    console.log(allWishlist);

    const allCoffeeData = useLoaderData();
    console.log(allCoffeeData);

    // Filter the coffee data based on the IDs in the cart
    const cartItems = allCoffeeData.filter(coffeeData => allCart.includes(coffeeData.id));

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-3xl font-bold text-center">Your Cart Items</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {cartItems.map((item) => (
                    <div key={item.id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                className="w-full h-56"
                                src={item.image}
                                alt={item.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Name: {item.name}</h2>
                            <p>Category: {item.category}</p>
                            <p>Origin: {item.origin}</p>
                            <p>Type: {item.type}</p>
                            <p>Rating: {item.rating}</p>
                            <p>Popularity: {item.popularity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
