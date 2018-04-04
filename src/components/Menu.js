import React,  { Component } from 'react'

class Menu extends Component { //компонент вывода меню фильтрации
    
    render() { 
        return (
            <div className="menu-container">
                { this.menuOutput() }
            </div>
        );
    }

    menuOutput =()=> {
        return (
            <div>
                <span className="menu-title"> Показать: </span>
                <div className={ this.menuStyleToggle("all") } id="all" onClick = { this.props.menuStateToggle } >
                    все
                </div>
                <div className="menu-gap">
                    <span className="or"> или </span>
                </div>
                <div className={ this.menuStyleToggle("active") } id="active" onClick = { this.props.menuStateToggle } >
                    активные
                </div>
                <div className="menu-gap">
                    <span className="or"> или </span>
                </div>
                <div className={ this.menuStyleToggle("complited") } id="complited" onClick = { this.props.menuStateToggle }>
                    выполненные
                </div>
            </div>
        )
    }

    menuStyleToggle =(id)=> {
        return (this.props.menuState === id) ? "menu active" : "menu passive"
    }
}

export default Menu;