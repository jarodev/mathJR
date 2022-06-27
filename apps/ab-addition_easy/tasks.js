import { getRandomInt } from '../../common/random';
import Typography from '@mui/material/Typography';

export default function AdditionTasks(props) {
	const tasks = [];
	for (let i = 0; i < props.numberOfTasks; i++) {
		const summand1 = getRandomInt(props.maxNumber).toString();
		let summand2 = [];
		for (let char in summand1) {
			summand2.push(getRandomInt(10 - parseInt(summand1[char])).toString());
		}
		const summand = {
			summand1: parseInt(summand1),
			summand2: parseInt(summand2.join('')),
		};
		tasks.push(summand);
	}

	return (
		<div>
			{tasks.map((t) => {
				return (
					<Typography key={`${t.summand1}+${t.summand2}`}>
						{t.summand1} + {t.summand2} =
					</Typography>
				);
			})}
		</div>
	);
}
