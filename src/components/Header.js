import React,  { Component } from 'react'

class Header extends Component { //компонент вывода заголовка и инпута задания
    
    render() { 
        return (
            <div>
                { this.headerOutput() }
            </div>
        );
    }

    headerOutput =()=> {
        return (
            <div>
                <div className='title'>
                    ToDo.List
                </div>
                
                <input id="task-input" type='text' placeholder='задание...' /> 
                <button onClick = { this.props.addTask } > + </button>
            </div>
        )
    }

}

export default Header;