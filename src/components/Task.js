import React from "react";



class Task extends React.Component {

    // constructor (props){
    //     super(props);
    //     this.state = {
    //         task: this.props
    //     };
    // }

    dateConversor(d) {
        let auxVar = '';
        let timestampDate = new Date(d);
        auxVar += timestampDate.getDay() + "/";
        auxVar += (timestampDate.getMonth()+1) + "/";
        auxVar += timestampDate.getFullYear();
        return auxVar
        
    }
    
    render(){

        const { task } = this.props;

        const deleteTask = () => {
            this.props.deleteTask(task.id);
            // console.log(task.id);
        }

        return (
            <div className="task-container animate__animated animate__backInUp">
                {/* <p>{this.props.task.id}</p> */}
                <h3 className="task-title">{task.title}</h3>
                <p className="task-description">{task.description}</p>
                <span className="task-date">
                    <b>Created:</b>
                    {" " + this.dateConversor(task.date)}
                </span>
                <div onClick={deleteTask} className="close-task-container">
                    <i className='bx bx-plus bx-sm close-task-icon'></i>
                </div>
            </div>
        );
    }
};

export default Task;