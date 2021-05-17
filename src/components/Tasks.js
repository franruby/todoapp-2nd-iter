import React from "react";

import Task from "./Task.js";
import Button from "./Button.js";
import Form from "./Form.js";

import tasks from "../tasks/tasks.json";

console.log(tasks);

class Tasks extends React.Component {

    state = {
        tasks: tasks,
        showFormVar: false
    }

    addTask = (title, description) => {
        const newTask = {
            id: this.state.tasks.length+1,
            title: title,
            description: description,
            date: Date.now()
        };
        this.setState({
            tasks: [...this.state.tasks, newTask]
        });
    }

    deleteTask = (id) =>{
        const filtredData = this.state.tasks.filter(item => item.id !== id);
        this.setState({ tasks: filtredData  })

    }

    showForm = () => {
        // console.log("Abriendo");
        this.setState({ showFormVar: true })
    }

    hideForm = () => {
        // console.log("Cerrando");
        // console.log(this.state.showFormVar);
        this.setState({ showFormVar: false });
        // console.log(this.state.showFormVar); // TODO: Por lo que sea me cambia el valor,
        // pero no me lo muestra aquí por consola
    }

    render() {
        return (
            <div>
              
                { this.state.tasks.map(task => 
                    
                    <Task task={task} key={task.id} deleteTask={this.deleteTask} />
                    
                )}

                <Form 
                    addTask={this.addTask} 
                    showFormVar={this.state.showFormVar}
                    hideForm={this.hideForm}
                />

                <Button 
                    showForm={this.showForm}
                />

            </div>
        );
    };

}

export default Tasks;