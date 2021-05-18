import React from "react";

const Task = (props) => {

    const dateConversor = (d) => {
        let auxVar = '';
        let timestampDate = new Date(d);
        auxVar += timestampDate.getDay() + "/";
        auxVar += (timestampDate.getMonth()+1) + "/";
        auxVar += timestampDate.getFullYear();
        return auxVar
    }

    const deleteTask = () => {
        props.deleteTask(props.task.id);
    }

    return (
        <div className="task-container animate__animated animate__backInUp">
                <h3 className="task-title">{props.task.title}</h3>
                <p className="task-description">{props.task.description}</p>
                <span className="task-date">
                    <b>Created:</b>
                    {" " + dateConversor(props.task.date)}
                </span>
                <div onClick={deleteTask} className="close-task-container">
                    <i className='bx bx-plus bx-sm close-task-icon'></i>
                </div>
            </div>
    );
}

export default Task;