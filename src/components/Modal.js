import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
    
    //now here when we click on the child of the elements on which history object is applied, they call the history object by default.
    //we can stop this by stopping the event using a method called stopPropagation
    return (
        ReactDOM.createPortal(  //createPortal is used when we need to render sonmething not created by our own app's DOM such as a modal.
            <div onClick={() => {history.push("/")}} className="ui dimmer modals visible active">
                <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>  
                    <div className="header">Delete Stream</div>
                    <div className="content">
                        Are you sure you want to delete this stream?
                    </div>
                    <div className="actions">
                        <button className="ui negative button">Delete</button>
                        <button className="ui button">Cancel</button>
                    </div>
                </div>
            </div>,
            document.querySelector(".modal")
        )
    );
};


export default Modal;