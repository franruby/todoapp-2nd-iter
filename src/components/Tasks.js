import React, { useState } from "react";

import Task from "./Task.js";
import Button from "./Button.js";
import Form from "./Form.js";

import tasksData from "../tasks/tasks.json";

const Tasks = () => {
    
    let [tasksList, setTasksList] = useState(tasksData);
    const [visibleForm, setVisibleForm] = useState(false);

    const addTask = (values) => {
        const newTask = {
            id: tasksList.length+1,
            title: values.title,
            description: values.description,
            date: Date.now()
        };
        setTasksList([...tasksList,newTask]);
    }

    const deleteTask = (id) => {
        const filtredData = tasksList.filter(item => item.id !== id);
        setTasksList(filtredData);

    }

    const showForm = () => {
        setVisibleForm(true);
    }
    const hideForm = () => {
        setVisibleForm(false);
    }

    return(
        <div>
              
            { tasksList.map(task => 
                <Task task={task} key={task.id} deleteTask={deleteTask} />
            )}

            <Form 
                addTask={addTask} 
                visibleForm={visibleForm}
                hideForm={hideForm}
            />

            <Button 
                showForm={showForm}
            />

        </div>
    );
}

export default Tasks;