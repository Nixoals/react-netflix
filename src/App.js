import Category from './components/Category';
import './App.css';
import data from './data.json';
import logo from './images/logo.png';

function App() {
	return (
		<>
			<header>
				<img src={logo}></img>
			</header>
			{data.map((element) => {
				return <Category data={element}></Category>;
			})}
		</>
	);
}

export default App;
