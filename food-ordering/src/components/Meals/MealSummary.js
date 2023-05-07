import classes from "./MealSummary.module.css"
const MealSummary = ()=>{
    return(
        <section className={classes.summary}>
            <h2>Delicious food delivered to You</h2>
            <p>
                Choose your favourite brand
            </p>
            <p>
                All our meals are cooked high quality
            </p>
        </section>
    );
}

export default MealSummary;