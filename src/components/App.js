import React, { Component } from 'react'
import Header from './Header'
import TasksList from './TasksList'
import Menu from './Menu'
import tasks from '../json/tasks'
import '../index.css'

class App extends Component { //родитель
	state = {
		tasksArray: tasks.slice(),
		menuState: 'all',
		onChange: null
	}
	
	render() { //вывод детей
		return (
			<div className="container">
				<Header 
					addTask = { this.addTask }
				/>
				<TasksList
					menuState = { this.state.menuState }
					tasksArray = { this.state.tasksArray } 
					compliteTask = { this.compliteTask } 
					removeTask = { this.removeTask }
					editTask = { this.editTask }
				/>
				<Menu
					menuState = { this.state.menuState }
					menuStateToggle = { this.menuStateToggle }
				/>
			</div>			
		);
	}

	compliteTask =(index)=> {
		let tempTaskArray = this.state.tasksArray.slice()
		tempTaskArray[index].complite = !tempTaskArray[index].complite
		this.setState({ tasksArray: tempTaskArray })
	}

	addTask =()=> {
		if (document.querySelector('#task-input').value !== '' && !this.state.onChange) {
			let newTask = { task: document.querySelector('#task-input').value, complite: false }  
			this.setState({ tasksArray: [...this.state.tasksArray, newTask] })
			document.querySelector('#task-input').value = ''
		} else {
			let tempTaskArray = this.state.tasksArray.slice()
			tempTaskArray[this.state.onChange].task = document.querySelector('#task-input').value
			this.setState({ tasksArray: tempTaskArray, onChange: null }) 
			document.querySelector('#task-input').value = ''
		}
	}

	editTask =(index)=> {
		document.querySelector('#task-input').value = this.state.tasksArray[index].task
		this.setState({ onChange: index })
		
	}

	removeTask =(index)=> {
		let tempTaskArray = this.state.tasksArray.slice()
		tempTaskArray.splice(index, 1)
		this.setState({ tasksArray: tempTaskArray })
	}

	menuStateToggle =(event)=> {
		this.setState({ menuState: event.target.id })
	}
	
}
export default App;