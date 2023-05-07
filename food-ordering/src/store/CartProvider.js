import CartContext from "./cart-context";
import { useState,useReducer } from "react";


const defaultCartState= {
    items:[],
    totalAmount:0
}
const cartReducer =(state,action)=>{
    //console.log("inside cartReducer"+ JSON.stringify(action));
    if (action.type === "ADD"){
        //console.log("inside add");
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    else if (action === "REMOVE"){
        
    }
}

const CartProvider = (props)=>{
    const [cartState,dispatchCartAction] =useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:"ADD",item:item})
    }

    const deleteItemFromCartHandler = (id)=>{
        dispatchCartAction({type:"REMOVE",id:id})
    }

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        deleteItem:deleteItemFromCartHandler
    }

    return (<CartContext.Provider value={cartContext}>
        {props.children}
        </CartContext.Provider>);
}

export default CartProvider;