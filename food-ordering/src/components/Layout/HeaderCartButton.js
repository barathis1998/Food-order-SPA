import CartIcon from "../Cart/CartIcon";
import classes from "./CartHeaderButton.module.css"
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props)=>{
    const [isHighlighted, setIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);
   // console.log(cartCtx);
   const {items} = cartCtx;
    const totalItem = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount
    },0);

    useEffect(()=>{
        if (items.length === 0){
            return;
        }
        setIsHighlighted(true);

        const timer = setTimeout(()=>{
            setIsHighlighted(false);
        },300)

        return ()=>{clearTimeout(timer);};
    },[items]);
    const headerButton = `${classes.button} ${isHighlighted ? classes.bump:''}`
    return(
        <button className={headerButton} onClick={props.onClick}>
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