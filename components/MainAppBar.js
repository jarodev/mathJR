import * as React from 'react';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { UserContext } from './context/UserContext';

export default function MainAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="medium"
						edge="start"
						aria-label="Home"
						sx={{ mr: 2 }}
					>
						<Link href="/mainpage">
							<HomeIcon />
						</Link>
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexFlow: 1 }}>
						MathJR
					</Typography>
					<Button color="inherit" style={{ float: 'right' }}>
						<UserContext.Consumer>
							{(value) => value.user.userName}
						</UserContext.Consumer>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
