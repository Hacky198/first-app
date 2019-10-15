import React from 'react';
import  './navigation.css';

// const showList = []
class ToDoList extends React.Component{
    state={
        list:[]
    }

    add = ()=>{
        const name = this._name.value;
        let updatedList = this.state.list.slice();
        updatedList.push(name);

        this.setState({
            list:updatedList
        })
    }

    remove = index =>{
        let removeList = this.state.list.slice()
        removeList.splice(index,1);
        this.setState({
            list: removeList
        })
        
    }
    render(){
            const getTodoList = this.state.list.map((listName,index) =>
            <li key ={index}>
                <span>{listName}</span>
                <button onClick={() => this.remove(index)} >remove</button>
            </li>
            );
        return(
            <div>
                <h1>To do List</h1>
                <input className="input" ref={input => this._name = input}></input>
                <button onClick={this.add}>add</button>
                <ul className="inventery">
                {getTodoList}
                </ul>
            </div>
        )
    }

}


export default ToDoList