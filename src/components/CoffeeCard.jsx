import { Link } from "react-router-dom";


const CoffeeCard = ({ coffee }) => {
    const {id, name, image, category, ingredients, nutrition_info, origin, type, description, making_process, rating, popularity} = coffee;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                className="w-full h-56"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Category: {category}</p>
                <p>Type: {type}</p>
                <p>Origin {origin}</p>
                <p>Rating {rating}</p>
                <p>Popularity {popularity}</p>
                <div className="card-actions justify-start mt-4">
                    <Link to={`/coffeeDetails/${id}`} className="btn bg-red-500 border-none text-white font-bold">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;