import React from "react";

class Form extends React.Component {
    
    state = {
        // show: this.props.showForm
        // show: true,
        title: "",
        description: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("Seding");
        console.log( this.state.title );
        console.log( this.state.description );
        this.props.addTask(this.state.title, this.state.description);
        // TODO: al enviar los datos limpiar imputs
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    hideForm() {
        this.props.hideForm();
    }

    render() {

        // if (this.state.show) {
        if (this.props.showFormVar) {
            return (
                <div
                className="task-form animate__animated animate__bounceInUp">
                    <div className="close-container">
                        <i className='bx bx-plus bx-sm close-form-icon' onClick={this.props.hideForm}></i>
                    </div>
                    {/* AA */}
                    <div className="l-form">
                        <form onSubmit={this.onSubmit} className="form">
                            {/* <h1 class="form__title">Sign In</h1> */}

                            <div className="form__div">
                                <input 
                                    name="title"
                                    defaultValue={this.state.title}
                                    onChange={this.onChange}
                                    type="text" 
                                    className="form__input" 
                                    placeholder=" " 
                                />
                                <label htmlFor="" className="form__label">Title</label>
                            </div>

                            <div className="form__div">
                                <input 
                                    name="description"
                                    defaultValue={this.state.description} 
                                    onChange={this.onChange}
                                    type="text" 
                                    className="form__input" 
                                    placeholder=" "
                                />
                                <label htmlFor="" className="form__label">Description</label>
                            </div>

                            {/* TODO: Meterle un preventDefault */}
                            <input type="submit" className="form__button" value="Add Task"/>
                        </form>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div style={{display: "none"}}></div> // TODO: Ver la manera de hacer esto + limpio
            );
        }
    };
    
};

export default Form;