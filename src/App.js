import "./App.css";
import { useState } from "react";

function App() {
	const initalCount = 0;
	const [counter, setCounter] = useState(initalCount);
	const [year, setYear] = useState(() => {
		const initalYear = new Date().getFullYear();
		return initalYear;
	});

	return (
		<div className="App">
			<div>{counter}</div>
			<div>{year}</div>

			<div>
				<button onClick={() => setCounter(initalCount)}>Reset</button>
				<button onClick={() => setCounter((prev) => prev + 1)}>+</button>
				<button onClick={() => setCounter((prev) => prev - 1)}>+</button>
			</div>
		</div>
	);
}

export default App;
