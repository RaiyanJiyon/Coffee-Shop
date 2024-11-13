import { useLoaderData } from "react-router-dom";


const Coffee = () => {
    const allCoffee = useLoaderData();
    // console.log(allCoffee)
    return (
        <div className="w-11/12 mx-auto">
            <div className="flex justify-between mt-6">
                <h1 className="mb-5 text-3xl font-bold">Sort Coffee&apos;s by Popularity & Rating -{">"}</h1>
                <div className="space-x-6">
                <button className="btn btn-primary bg-red-500 border-none font-bold">Sort By Popularity</button>
                <button className="btn btn-primary bg-red-500 border-none font-bold">Sort By Rating</button>
                </div>
            </div>
        </div>
    );
};

export default Coffee;