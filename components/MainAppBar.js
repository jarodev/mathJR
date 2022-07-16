import * as React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function MainAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="sticky">
				<Toolbar>
					<IconButton size="medium" edge="start" aria-label="Home">
						<Link href="/mainpage">
							<HomeIcon />
						</Link>
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexFlow: 1 }}>
						MathJR
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
