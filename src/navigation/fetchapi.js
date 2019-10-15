// https://api.github.com/users/
//induratized
import React from 'react';

class FetchData extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            error: {}
        };
      }
    getUserId = () => {
        const userId = this._name.value;
        const url = 'https://api.github.com/users/'+userId
        fetch(url)
        .then(res => {
            if(res.ok)
                return res.json()
            else 
            throw Error('user not found');
        })
        .then(
            (result) => {
            let fetchList = this.state.item.slice();
                fetchList.push(result);
            this.setState({
                item:fetchList,
                error: {}
            })
        })
        .catch(e => {
            this.setState({
                error: e
            })
        
        })
    }
   
    render(){
        // let errorMessage = ''; 
        // if(this.state.error.message){
        //     errorMessage =<h1>{this.state.error.message}</h1>
        // }
        
            
        const userList = this.state.item.map((listName,index) =>
            <div key={index}>
                <h1><img src={listName.avatar_url}></img></h1>
                <h1>{listName.login}</h1>
                <h2>{listName.id}</h2>
            </div>
        ); 
        
        return(
            <div className="userData">
                <div className="detaisInput">
                    <input type="text" ref={input => this._name = input} placeholder="Enter User Name"></input>
                    <button onClick={this.getUserId}>Submit</button>
                </div>
                <div className="flex">
                    {userList}
                </div>
                <h1>{this.state.error.message}</h1>
            </div>
        )
    }
    
}

export default FetchData;