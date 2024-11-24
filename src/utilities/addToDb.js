import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Constants for local storage keys
const CART_LIST_KEY = "cart-list";
const WISH_LIST_KEY = "wish-list";

// Get cart items from local storage
const getCart = () => {
    const listedCart = localStorage.getItem(CART_LIST_KEY);
    return listedCart ? JSON.parse(listedCart) : [];
};

// Add item to cart
const addToCart = (id) => {
    const cartItems = getCart();

    if (!cartItems.includes(id)) {
        cartItems.push(id);
        localStorage.setItem(CART_LIST_KEY, JSON.stringify(cartItems));
        toast.success(`Item with ID ${id} added to cart.`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } else {
        toast.error(`Item with ID ${id} is already in the cart.`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
};

// Get wish list items from local storage
const getWishList = () => {
    const listedWishList = localStorage.getItem(WISH_LIST_KEY);
    return listedWishList ? JSON.parse(listedWishList) : [];
};

// Add item to wish list
const addToWishList = (id) => {
    const wishListItems = getWishList();

    if (!wishListItems.includes(id)) {
        wishListItems.push(id);
        localStorage.setItem(WISH_LIST_KEY, JSON.stringify(wishListItems));
        toast.success(`Item with ID ${id} added to wish list.`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } else {
        toast.error(`Item with ID ${id} is already in the wish list.`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
};

export { getCart, addToCart, getWishList, addToWishList };
