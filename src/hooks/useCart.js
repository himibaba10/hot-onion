import { useContext } from "react";
import { ContextCart } from "../Context/CartContext";


const useCart = () => {
    return useContext(ContextCart);
}

export default useCart;