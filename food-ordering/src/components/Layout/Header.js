import meals from '../../Assets/meals.jpg';
import classes from './header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
      <>
        <header className = {classes.header}>
          <h1>React Meals</h1>
          <HeaderCartButton onClick = {props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
          <img src={meals} alt="Delicious Food"></img>
        </div>
      </>
    );
}

export default Header;