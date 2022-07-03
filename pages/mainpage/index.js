import * as React from 'react';
import { Stickyfooter } from '../../components/footer';
import { Grid } from '@mui/material';
import { LinkCard } from '../../components/basiccard';

export default function Mainpage() {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<h1>Mathe</h1>
				</Grid>
				<Grid item xs={2}></Grid>
				<Grid item xs={2}>
					<LinkCard
						componentMedia="img"
						componentMediaHeight="150"
						componentMediaImage="/icons/1x1.png"
						componentMediaAlt="1x1"
						contentTitle="1x1 üben"
						contentText="Wir üben das 1x1"
						componentLink="apps/aa-1x1"
					/>
				</Grid>
				<Grid item xs={2}>
					<LinkCard
						componentMedia="img"
						componentMediaHeight="150"
						componentMediaImage="/icons/1x1.png"
						componentMediaAlt="Addition Easy"
						contentTitle="Addition ohne Übertrag"
						contentText="Wir üben das schriftliche Addieren ohne Übertrag"
						componentLink="apps/ab-addition_easy"
					/>
				</Grid>
				<Grid item xs={2}>
					<LinkCard
						componentMedia="img"
						componentMediaHeight="150"
						componentMediaImage="/icons/1x1.png"
						componentMediaAlt="Addition Mid"
						contentTitle="Addition mit Übertrag"
						contentText="Wir üben das schriftliche Addieren mit Übertrag"
						componentLink="apps/ac-addition_mid"
					/>
				</Grid>
				<Grid item xs={2}>
					<LinkCard
						componentMedia="img"
						componentMediaHeight="150"
						componentMediaImage="/icons/1x1.png"
						componentMediaAlt="Subtraction Easy"
						contentTitle="Subtraktion ohne Übertrag"
						contentText="Wir üben das schriftliche Subtrahieren ohne Übertrag"
						componentLink="apps/ad-subtraction_easy"
					/>
				</Grid>
				<Grid item xs={12} />
			</Grid>
			<Stickyfooter />
		</>
	);
}
