import React from "react";
import { useFormik } from 'formik';

const Form = (props) => {
    
    const formik = useFormik({
        initialValues: {
            title: '',
            description: ''
        },
        onSubmit: values => {
            props.addTask(values);
            formik.resetForm();
          },
    });

    if (props.visibleForm) {
        return (
            <div
            className="task-form animate__animated animate__bounceInUp">
                <div className="close-container">
                    <i className='bx bx-plus bx-sm close-form-icon' onClick={props.hideForm}></i>
                </div>
                {/* AA */}
                <div className="l-form">
                    <form onSubmit={formik.handleSubmit} className="form">
    
                        <div className="form__div">
                            <input 
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                type="text" 
                                className="form__input" 
                                placeholder=" " 
                            />
                            <label htmlFor="" className="form__label">Title</label>
                        </div>
    
                        <div className="form__div">
                            <input 
                                name="description"
                                value={formik.values.description} 
                                onChange={formik.handleChange}
                                type="text" 
                                className="form__input" 
                                placeholder=" "
                            />
                            <label htmlFor="" className="form__label">Description</label>
                        </div>

                        <input type="submit" className="form__button" value="Add Task"/>
                    </form>
                </div>
            </div>
        );
    }
    else{
        return (
            // TODO: Ver la manera de hacer esto + limpio
            <div style={{display: "none"}}></div> 
        );
    }
}

export default Form;