import * as React from 'react';
import Typography from '@mui/material/Typography';
import { permutations, scrumbleTuples } from '../../common/scrumbler';
import exportToPdf from './exportToPdf';
import { Button } from '@mui/material';

export default function Tasks(props) {
	const tuples = permutations(props.summands);
	const tasks = scrumbleTuples(tuples, props.count);

	if (tasks.length > 0) {
		return (
			<div style={{ textAlign: 'center' }}>
				<Button
					variant="contained"
					onClick={() => exportToPdf(tasks)}
					style={{ marginBlock: '2em' }}
				>
					als pdf exportieren
				</Button>
				{tasks.map((task) => {
					const returnString = `${task.item1 + 1} * ${task.item2 + 1} = `;
					return (
						<Typography variant="body1" key={`${task.item1}_${task.item2}`}>
							{returnString}
						</Typography>
					);
				})}
			</div>
		);
	}
}
