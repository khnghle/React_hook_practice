import "./App.css";
import { useState } from "react";
import {Counter, Timer, UserForm} from "./Components"

function App() {
	const initalCount = 0;
	const initalUser = {
		name: "Khuong",
		profession: "Software Dev",
	};
	
	const [user, setUser] = useState(initalUser)

	return (
		<div className="App">
			<Timer />
			<div>Name:{user.name}</div>
			<div>Profession:{user.profession}</div>
			
			<Counter initalCount={initalCount} />
			<UserForm setUser={setUser}/>
		</div>
	);
}

export default App;
