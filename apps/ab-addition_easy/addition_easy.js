import * as React from 'react';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Slider,
} from '@mui/material';
import AdditionTasks from './tasks';

export default function AdditionEasy() {
	const [numberOfTasks, setNumberOfTasks] = React.useState(0);
	const [maxNumber, setMaxNumber] = React.useState(1000);

	return (
		<div>
			<Head>
				<title>MathJR - Multiplikation ohne Übertrag</title>
			</Head>
			<Container maxWidth="md">
				<Typography
					variant="h3"
					component="div"
					gutterBottom
					style={{ textAlign: 'center' }}
				>
					Multiplikation ohne Übertrag
				</Typography>
			</Container>

			<Container maxWidth="md">
				<Typography variant="h6" gutterBottom component="div">
					Aus welchem Zahlenraum sollen die Aufgaben erstellt werden?
				</Typography>
				<div style={{ margin: '1em' }}>
					<FormControl component="maxNumber">
						<InputLabel id="maxNumberLabel">Zahlenraum</InputLabel>
						<Select
							labelId="maxNumberLabel"
							id="maxNumber"
							label="Zahlenraum"
							onChange={(e) => setMaxNumber(parseInt(e.target.value))}
							value={maxNumber}
						>
							<MenuItem value={1000}>bis 1.000</MenuItem>
							<MenuItem value={10000}>bis 10.000</MenuItem>
							<MenuItem value={100000}>bis 100.000</MenuItem>
							<MenuItem value={1000000}>bis 1.000.000</MenuItem>
						</Select>
					</FormControl>
				</div>
			</Container>

			<Container maxWidth="md">
				<Typography variant="h6" gutterBottom component="div">
					Wie viele Aufgaben sollen erstellt werden?
				</Typography>
				<div style={{ marginTop: '2em' }}>
					<Slider
						aria-label="Anzahl Aufgabe"
						value={numberOfTasks}
						onChange={(_, value) => setNumberOfTasks(value)}
						min={0}
						max={50}
						valueLabelDisplay="on"
						marks={[
							{ value: 0, label: '0' },
							{ value: 10, label: '10' },
							{ value: 20, label: '20' },
							{ value: 30, label: '30' },
							{ value: 40, label: '40' },
							{ value: 50, label: '50' },
						]}
					/>
				</div>
			</Container>

			<Container maxWidth="md">
				<AdditionTasks maxNumber={maxNumber} numberOfTasks={numberOfTasks} />
			</Container>
		</div>
	);
}
