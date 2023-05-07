import CartIcon from "../Cart/CartIcon";
import classes from "./CartHeaderButton.module.css"
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props)=>{

    const cartCtx = useContext(CartContext);
    console.log(cartCtx);
    const totalItem = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount
    },0);

    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.CartIcon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {totalItem}
            </span>
        </button>
    )
}
export default HeaderCartButton;