import React from "react";
import { useFormik } from 'formik';

const Form = (props) => {
    
    // TODO: Meter Formik en el form
    const formik = useFormik({
        initialValues: {
            title: '',
            description: ''
        },
        // onSubmit: props.addTask
        onSubmit: values => {
            // props.addTask(JSON.stringify(values, null, 2));
            props.addTask(values);
            formik.resetForm();
            // alert(JSON.stringify(values, null, 2));

          },
    });

    // return (
    //     <div>
    //         {
    //             console.log(formik.initialValues.title)
    //         }
    //     </div>
    // );

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
            <div style={{display: "none"}}></div> // TODO: Ver la manera de hacer esto + limpio
        );
    }
}

export default Form;