import React,  { Component } from 'react'

class TasksList extends Component { //компонент вывода списка заданий
    
    render() { 
        return (
            <div>
                <div className="tasks-container">
                    { this.tasksOutput() }
                </div>
            </div>
        );
    }

    tasksOutput =()=> {
        let condition = ( this.props.menuState === "all") ? 'all' :
            ( this.props.menuState === "active") ? false : true 
        return (
            this.props.tasksArray.map((item, index) => {
                if (index > (this.props.tasksArray.length - 11)) {
                    let taskState = ( item.complite ) ? 'complite' : 'uncomplite'
                    return (
                        <div key = { index }>
                        { ( condition === 'all' || item.complite === condition ) ?
                            <div>
                            <div className='task' >
                                <input type='checkbox' onChange = { this.props.compliteTask.bind(this, index) } checked = {(item.complite) ? true : false} /> 
                                <span className={ taskState }> { item.task } </span>
                            </div> 
                            <div className='icons'> 
                                <span className="glyphicon glyphicon-edit icons edit" onClick = { this.props.editTask.bind(this, index) } > </span>
                                <span className="glyphicon glyphicon-remove icons remove" onClick = { this.props.removeTask.bind(this, index) } > </span>
                            </div> </div>: ''
                        }
                        </div>
                    )
                }
            })
        )
    }

}

export default TasksList;