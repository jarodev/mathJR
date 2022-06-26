import * as React from 'react';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Slider,
} from '@mui/material';
import Tasks from './tasks';

export default function Aa1x1() {
	function isTrue(item) {
		return item.checked;
	}

	const summand1 = [];
	const summand2 = [];

	for (let i = 0; i < 10; i++) {
		const item = {
			number: i,
			checked: true,
		};
		summand1.push(item);
		summand2.push(item);
	}

	const [numberTasks, setNumberTasks] = React.useState(0);

	const [checkState, setCheckState] = React.useState({
		summand1,
		summand2,
	});
	const [changed, setChanged] = React.useState(false);

	const maxValue =
		checkState.summand1.filter(isTrue).length *
		checkState.summand1.filter(isTrue).length;

	return (
		<div>
			<Head>
				<title>MathJR - 1x1 lernen</title>
			</Head>
			<Container maxWidth="md">
				<Typography
					variant="h3"
					component="div"
					gutterBottom
					style={{ textAlign: 'center' }}
				>
					1x1 lernen
				</Typography>
			</Container>

			<Container maxWidth="md">
				<FormControl component="summand1">
					<Typography variant="h6" gutterBottom component="div">
						Aus welchen Summanden sollen die Aufgaben erstellt werden?
					</Typography>
					<FormGroup aria-label="summand1" row>
						{checkState.summand1.map((item) => {
							return (
								<FormControlLabel
									value={item.number}
									control={
										<Checkbox
											checked={checkState.summand1[item.number].checked}
											onChange={(e) => {
												let temp = checkState;
												// console.log(e.target.checked)
												temp.summand1[item.number].checked = e.target.checked;
												// console.log(`temp: ${temp.summand1[item.number].checked}`)
												setCheckState(temp);
												setChanged(!changed);
											}}
										/>
									}
									label={item.number + 1}
									labelPlacement="top"
									key={`summand1_${item.number}`}
								/>
							);
						})}
					</FormGroup>
				</FormControl>
			</Container>

			<Container maxWidth="md">
				<Typography variant="h6" gutterBottom component="div">
					Wie viele Aufgaben sollen erstellt werden?
				</Typography>
				<div style={{ marginTop: '2em' }}>
					<Slider
						aria-label="Anzahl Aufgabe"
						value={numberTasks}
						onChange={(_, value) => setNumberTasks(value)}
						min={0}
						max={maxValue}
						valueLabelDisplay="on"
						marks={[
							{ value: 0, label: '0' },
							{ value: maxValue, label: maxValue },
						]}
					/>
				</div>
			</Container>

			<Container maxWidth="xs">
				<div style={{ textAlign: 'center', marginTop: '2em' }}>
					<Button variant="contained" onClick={() => setChanged(!changed)}>
						Neue Aufgaben
					</Button>
				</div>
			</Container>

			<Container maxWidth="md">
				<Typography
					variant="h4"
					component="div"
					style={{ textAlign: 'center', marginTop: '1em' }}
				>
					1x1 Übung
				</Typography>
				<Tasks
					summands={getOnlyValue(checkState.summand1.filter(isTrue))}
					count={numberTasks}
				/>
			</Container>
		</div>
	);
}

function getOnlyValue(array) {
	const returnValue = [];
	array.map((e) => returnValue.push(parseInt(e.number)));
	return returnValue;
}
