import { useState, useEffect } from "react";

function Timer() {
	const date = new Date();
	const [hours, setHours] = useState(() => {
		let hour = date.getHours();
		if (hour > 12) hour = hour - 12;
		return updateTime(hour);
	});
	const [minutes, setMinutes] = useState(() => {
		return updateTime(date.getMinutes());
	});

	const [seconds, setSeconds] = useState(() => {
		return updateTime(date.getSeconds());
	});

	const [midday, setMidday] = useState(() => {
		return date.getHours() > 12 ? "PM" : "AM";
	});

	const [showTime, setShowTime] = useState(false);

	function updateTime(k) {
		if (k < 10) return "0" + k;
		return k;
	}

	function getNewTime() {
		const newDate = new Date();
		const newHour = newDate.getHours();
		const adjustedHour = updateTime(newHour > 12 ? newHour - 12 : newHour);
		const newMinute = updateTime(newDate.getMinutes());
		const newSecond = updateTime(newDate.getSeconds());
		const newMidday = newHour > 12 ? "PM" : "AM";

		setHours(adjustedHour);
		setMinutes(newMinute);
		setSeconds(newSecond);
		setMidday(newMidday);
	}

	useEffect(() => {
		if (showTime) {
			let intervalId = setInterval(() => {
				getNewTime();
			}, 1000);

			return () => clearInterval(intervalId);
		}
	}, [showTime]);

	return (
		<div>
			{showTime ? (
				<div>{`${hours} : ${minutes} : ${seconds} ${midday}`}</div>
			) : (
				""
			)}
			<button
				onClick={() => {
					getNewTime();
					setShowTime((prev) => !prev);
				}}
			>
				Show Time
			</button>
		</div>
	);
}

export default Timer;
