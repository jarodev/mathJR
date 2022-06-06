import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright @'}
			<Link color="inherit" href="https://github.com/jarodev/mathJR">
				MathJR
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export function Stickyfooter() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexdirection: 'column',
				minheight: '100vh',
				backgroundcolor: '#000000',
			}}
		>
			<CssBaseline />
			<Container maxWidth="sm">
				<Copyright />
			</Container>
		</Box>
	);
}
