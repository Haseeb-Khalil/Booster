import { React } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
	let minutes = Math.floor(remainingTime / 60);
	let minute1 = Math.floor(minutes / 10);
	let minute2 = minutes % 10;
	let seconds = remainingTime % 60;
	let second1 = Math.floor(seconds / 10);
	let second2 = seconds % 10;
	return (
		<div className="timer">
			<div className="text">Remaining</div>
			<div className="value">
				{minute1}
				{minute2}:{second1}
				{second2}
			</div>
		</div>
	);
};

export default function Timer({ duration, remaining }) {
	return (
		<div className="App">
			<div className="timer-wrapper">
				<CountdownCircleTimer
					isPlaying={true}
					duration={duration}
					initialRemainingTime={remaining}
					rotation={"counterclockwise"}
					colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
					colorsTime={[700, 500, 200, 0]}
				>
					{renderTime}
				</CountdownCircleTimer>
			</div>
		</div>
	);
}