import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const friend = {
		name: 'shoyaib',
		profession: 'student',
	}
	const style = {
		color: 'red',
		backgroundColor: 'yellow'
	}
	return (
		<div className="App">
			<Counter></Counter>
			<h1 style={style}>Best friend name: {friend.name}</h1>
			<h1>Best friend profession: {friend.profession}</h1>
			<Rounder></Rounder>
			<Rounder></Rounder>
			<Rounder></Rounder>
			<Singer name='Habib' job='singer'></Singer>
			<Singer name='Imran' job='singer'></Singer>
			<Singer name='Tahsan' job='singer and actor'></Singer>
			<div style={{display:'flex', justifyContent: 'center'}}>
				<Product name={products[0].name} price={products[0].price}></Product>
				<Product name={products[1].name} price={products[1].price}></Product>
				<Product name={products[2].name} price={products[2].price}></Product>
			</div>
			<UserEffect></UserEffect>
		</div>
	);
}
// use state hook
function  Counter() {
	const [count, setCount] = useState(0);
	const increaseCount = () => {
		setCount(count + 1);
	}
	const decreaseCount = () => {
		setCount(count-1)
	}
	return (
		<div>
			<h1>Movies:{count}</h1>
			<button onClick={increaseCount}>Increase</button>
			<button onClick={decreaseCount}>Decrease</button>
		</div>
	)
}
function Rounder() {
	return (
		<div style={{ border: '1px solid gold', margin: '20px', backgroundColor: 'lightGray' }}>
			<h1>Name: Shakib Al Hasan</h1>
			<h2>Cricketer</h2>
		</div>
	)
}
function Singer(props) {
	return (
		<div style={{ border: '1px solid gold', margin: '20px', backgroundColor: 'salmon' }}>
			<h1>Name: {props.name}</h1>
			<h2>profession: {props.job}</h2>
		</div>
	)
}
// use component for make some cards
const products = [
	{
		name: 'Photoshop',
		price: '$199',
	},
	{
		name: 'After Effect',
		price: '$169',
	},
	{
		name: 'Adobe Reader',
		price: '$169',
	}
]
function Product(props) {
	return (
		<div style={{
			border: '1px solid gray',
			backgroundColor: 'lightGray',
			width: '30%',
			height: '300px'
		}}>
			<h1>{props.name}</h1>
			<h2>{props.price}</h2>
			<button>Buy now</button>
		</div>
	)
}
// use effect
function UserEffect() {
	const [users, setUsers] = useState([]);
	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => setUsers(data))
	},[])
	return(
		<div>
			<h1>User: {users.length}</h1>
			<ul>
				{
					users.map(user=>  <p key={user.id}>{user.name}</p>)
				}
			</ul>
		</div>
	)
}

export default App;
