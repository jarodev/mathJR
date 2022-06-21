import * as React from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';

export default function Tasks(props) {
	const body = {
		numberOfTasks: String(props.count),
		itemsToScrumble: props.summands,
	};
	let output;
	output = getTasks(body);
	console.log(output);

	output.map((task) => {
		const returnString = `${task.item1} * ${task.item2} = `;
		console.log(returnString);
		return (
			<Typography variant="body1" key={`${task.item1}_${task.item2}`}>
				{returnString}
			</Typography>
		);
	});
}

function getTasks(body) {
	const options = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const url = 'http://localhost:3000/api/aa-1x1';

	const tasksToReturn = [];

	axios
		.post(url, body, options)
		.then((res) => {
			//return JSON.stringify(res.data);
			res.data.tasks.map((task) => tasksToReturn.push(task));
		})
		.catch((e) => console.log(`error: ${e}`));

	return tasksToReturn;
}
