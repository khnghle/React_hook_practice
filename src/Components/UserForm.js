import { useState } from "react";

function User(props) {
	const [newName, setNewName] = useState("");
	const [newJob, setJob] = useState("");

	return (
		<div>
			<form
				onSubmit={(evt) => {
					evt.preventDefault();
					const newObj = {};
					if(newName) newObj.name = newName
					if(newJob) newObj.profession = newJob
					props.setUser(prev => {return {...prev, ...newObj}})
				}}
			>
				<label>
					Name
					<input
						type="text"
						name="name"
						onChange={(evt) => {
							evt.preventDefault();
							setNewName(evt.target.value);
						}}
					/>
				</label>

				<label>
					Profession
					<input
						type="text"
						name="job"
						onChange={(evt) => {
							evt.preventDefault();
							setJob(evt.target.value);
						}}
					/>
				</label>

				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default User;
