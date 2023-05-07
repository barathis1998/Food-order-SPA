import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";
import {useRef,useState} from 'react';

const MealItemForm = (props)=>{
    const [isValid,setIsValid]= useState(true);
    const amountInputRef=useRef();
    const submitHandler = event =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount >5){
            setIsValid(false);
        }
        props.onAddToCart(enteredAmountNumber);
    };

    return(
        <form className = {classes.form} onSubmit={submitHandler}>
            <Input 
            ref={amountInputRef} label="Amount" input={{
                id:"amount_"+props.id,
                type:"number",
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'

            }}></Input>
            <button>+ Add</button>
            {!isValid && <p>Enter a Valid Amount</p> }
        </form>
    )
}

export default MealItemForm;