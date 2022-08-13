import * as React from 'react';
import { Stickyfooter } from '../../components/footer';
import { Grid } from '@mui/material';
import { LinkCard } from '../../components/basiccard';
import MainAppBar from '../../components/MainAppBar';

export default function Mainpage() {
	return (
		<>
			<MainAppBar />
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<h1>Mathe</h1>
				</Grid>
				<Grid item xs={2}></Grid>
				<Grid item xs={2}>
					<LinkCard
						componentMedia="img"
						componentMediaHeight="150"
						componentMediaImage="/icons/aa_1x1.png"
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
						componentMediaImage="/icons/ab_add_easy.png"
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
						componentMediaImage="/icons/ac_add_mid.png"
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
						componentMediaImage="/icons/ad_sub_easy.png"
						componentMediaAlt="Subtraction Easy"
						contentTitle="Subtraktion ohne Übertrag"
						contentText="Wir üben das schriftliche Subtrahieren ohne Übertrag"
						componentLink="apps/ad-subtraction_easy"
					/>
				</Grid>
				<Grid item xs={2}></Grid>
				<Grid item xs={2}></Grid>
				<Grid item xs={2}>
					<LinkCard
						componentMedia="img"
						componentMediaHeight="150"
						componentMediaImage="/icons/ae_sub_mid.png"
						componentMediaAlt="Subtraction Mid"
						contentTitle="Subtraktion mit Übertrag"
						contentText="Wir üben das schriftliche Subtrahieren mit Übertrag"
						componentLink="apps/ae-subtraction_mid"
					/>
				</Grid>
				<Grid item xs={2}>
					<LinkCard
						componentMedia="img"
						componentMediaHeight="150"
						componentMediaImage="/icons/af_1.1.png"
						componentMediaAlt="Division easy"
						contentTitle="Division üben"
						contentText="Wir üben das Dividieren des kleinen 1x1"
						componentLink="apps/af_1.1"
					/>
				</Grid>
				<Grid item xs={12} />
			</Grid>
			<Stickyfooter />
		</>
	);
}
