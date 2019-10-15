import React from 'react';
import  './navigation.css';
import ProductList from './product';
import ToDoList from './todolist';
import FetchData from './fetchapi';

function raderNaviagtion(){
	return(
		<div>
			<ProductList />
			<ToDoList />}
			<FetchData />
			</div>
		)
	}

export default raderNaviagtion;





