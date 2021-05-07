import { useState } from "react";

function Counter(props) {
	const [counter, setCounter] = useState(props.initalCount);

	return (
		<div>
			<div>Counter:{counter}</div>

			<div>
        {/* Use of the prev function within setCounter */}
				<button onClick={() => setCounter(props.initalCount)}>Reset</button>
				<button onClick={() => setCounter((prev) => prev + 1)}>+</button>
				<button onClick={() => setCounter((prev) => prev - 1)}>+</button>
			</div>
		</div>
	);
}

export default Counter;
