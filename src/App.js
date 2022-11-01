import Category from './components/Category';
import './App.css';
import data from './data.json';
import logo from './images/logo.png';

function App() {
	return (
		<>
			<header>
				<img src={logo} alt="logo neftlix"></img>
			</header>
			{data.map((element, index) => {
				return <Category key={index} data={element}></Category>;
			})}
		</>
	);
}

export default App;
