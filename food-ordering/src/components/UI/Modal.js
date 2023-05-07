import classes from "./Modal.module.css"
import ReactDOM from "react-dom";

const BackDrop =(props)=>{
    return(<div className={classes.backdrop} onClick={props.onClick}></div>);
}
const ModalOverlay = (props)=>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal =(props)=>{
    const portalElement = document.getElementById("overlays");
    return(
        <>{ReactDOM.createPortal(<BackDrop onClick={props.onClick}/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}</>
    );
}

export default Modal;