import React from "react";

class Button extends React.Component {
    
    render() {
        return (
            <div className="button-container animate__animated animate__backInUp">
                <button className="main-button" onClick={this.props.showForm}>
                    <div className="icon-container">
                        <i className='bx bx-plus'></i>
                    </div>
                </button>
            </div>
        );
    };

};

export default Button;