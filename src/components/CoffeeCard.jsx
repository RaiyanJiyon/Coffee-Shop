

const CoffeeCard = ({ coffee }) => {
    const {id, name, image, category, ingredients, nutrition_info, origin, type, description, making_process, rating, popularity} = coffee;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
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
                    <button className="btn btn-primary bg-red-500 border-none font-bold">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;