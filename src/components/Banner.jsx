import { Link } from "react-router-dom";
import bannerImg from "../assets/banner.jpg"

const Banner = () => {
    return (
        <div
            className="hero min-h-screen w-11/12 mx-auto rounded-lg"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">Savor Your Moment with Artisan Coffee</h1>
                    <p className="mb-5">
                    Indulge in the captivating aroma and rich flavors of our carefully curated selection of artisanal coffees. Discover the perfect blend to elevate your daily routine and savor the moments of tranquility. Explore our diverse offerings and embark on a journey of coffee connoisseurship.
                    </p>
                    <Link to={"/coffee"} className="btn bg-red-500 text-white border-none font-bold">View More</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;