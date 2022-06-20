import * as React from 'react';
import axios from 'axios';

export default function Tasks(props) {
	const body = {
		numberOfTasks: String(props.count),
		itemsToScrumble: props.summands,
	};
	const output = getTasks(body);

	return <p>{JSON.stringify(output)}</p>;
}

function getTasks(body) {
	const options = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const url = 'http://localhost:3000/api/aa-1x1';

	axios
		.post(url, body, options)
		.then((res) => console.log(`success`))
		.catch((e) => console.log(`error: ${e}`));

	return '';
}
