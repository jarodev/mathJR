import * as React from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { UserContext } from './context/UserContext';
import { AccountCircle } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { supabase } from '../utils/supabaseClient';

export default function MainAppBar() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = async () => {
		try {
			let { error } = await supabase.auth.signOut();

			if (error) {
				throw error;
			}
		} catch (e) {
			alert(e.message);
		}
		setAnchorEl(null);
	};

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
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								MathJR
							</Typography>

							<IconButton
								size="large"
								area-label="account of the current user"
								area-controls="menu-appbar"
								area-haspopup="true"
								onClick={handleMenu}
								color="inherit"
								edge="end"
							>
								<AccountCircle />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepmounted="true"
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profil</MenuItem>
								<MenuItem onClick={handleLogout}>Log-out</MenuItem>
							</Menu>
						</Toolbar>
					</AppBar>
				</Box>
			)}
		</UserContext.Consumer>
	);
}

/*
	<Button color="inherit" style={{ float: 'right' }}>
								{currentUser.name} {currentUser.surname}
							</Button>
 */
