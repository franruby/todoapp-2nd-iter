import React from "react";


const Button = (props) => {
    return (
        <div className="button-container animate__animated animate__backInUp">
            <button className="main-button" onClick={props.showForm}>
                <div className="icon-container">
                    <i className='bx bx-plus'></i>
                </div>
            </button>
        </div>
    );
}

export default Button;