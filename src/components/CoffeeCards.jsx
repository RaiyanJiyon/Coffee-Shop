const CoffeeCards = () => {
    return (
        <div>

            <div className="hero-content text-center">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">Browse Coffees By Category</h1>
                    <p className="mb-5">
                        Choose your desired coffee category to browse through specific coffees that fit in your taste.
                    </p>
                </div>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <a role="tab" className="tab">Brewed Coffee</a>
                <a role="tab" className="tab tab-active">Iced Coffee</a>
                <a role="tab" className="tab">Dessert Coffee</a>
            </div>
        </div>

    );
};

export default CoffeeCards;