import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    
    //now here when we click on the child of the elements on which history object is applied, they call the history object by default.
    //we can stop this by stopping the event using a method called stopPropagation
    return (
        ReactDOM.createPortal(  //createPortal is used when we need to render sonmething not created by our own app's DOM such as a modal.
            <div onClick={props.onDismiss} className="ui dimmer modals visible active">
                <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>  
                    <div className="header">{props.title}</div>
                    <div className="content">
                        {props.content}
                    </div>
                    <div className="actions">
                        {props.actions}
                    </div>
                </div>
            </div>,
            document.querySelector(".modal")
        )
    );
};


export default Modal;