import * as React from 'react';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { UserContext } from './context/UserContext';

export default function MainAppBar() {
	return (
		<UserContext.Consumer>
			{(currentUser) => (
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
								{currentUser.name} {currentUser.surname}
							</Button>
						</Toolbar>
					</AppBar>
				</Box>
			)}
		</UserContext.Consumer>
	);
}