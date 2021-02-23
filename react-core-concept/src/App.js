import logo from './logo.svg';
import './App.css';

function App() {
	const friend = {
		name: 'shoyaib',
		profession: 'student',
	}
	return (
		<div className="App">
			<header className="App-header">
				<h1>Best friend name: {friend.name}</h1>
				<h1>Best friend profession: {friend.profession}</h1>
			</header>
		</div>
	);
}

export default App;
