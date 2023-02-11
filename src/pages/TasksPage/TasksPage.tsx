import React from 'react';
import { TaskBoard, TaskCreationPanel } from '../../widgets';
import { useLocation } from 'react-router-dom';

export const TasksPage = () => {

    const { state } = useLocation();

    console.log(state)

    return (
        <div>
            <TaskBoard id_object={state.currentObject.id_object} />
            <TaskCreationPanel 
                currentObject={state.currentObject}
            />
        </div>
    )
}
