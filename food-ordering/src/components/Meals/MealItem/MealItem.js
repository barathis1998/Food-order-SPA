import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context.js";


const MealItem = (props)=>{
    const price = `$${props.price.toFixed(2)}`;
    const crtCtx = useContext(CartContext);
    const addMealHandler = amount=>{
        crtCtx.addItem({
            id:props.id,
            name:props.title,
            amount:amount,
            price:props.price
        })
    }
    return(
        <li className = {classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className ={classes.price}>{price}</div>
                <div></div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addMealHandler}/>
            </div>
        </li>
    )
}

export default MealItem;