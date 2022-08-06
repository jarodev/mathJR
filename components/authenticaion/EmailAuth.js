import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import * as React from 'react';
import { supabase } from '../../utils/supabaseClient';

export default function EmailAuth(props) {
	const [email, setEmail] = React.useState('');
	const [loading, setLoading] = React.useState(false);

	const sendButton = async () => {
		setLoading(true);
		try {
			const { error } = await supabase.auth.signIn({
				email: email,
			});
			if (error) throw error;
			alert('Der Magic Link wurde verschickt!');
		} catch (e) {
			alert(e);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box sx={{ maxWidth: '60%' }}>
			<Typography variant="h2">Einloggen mit Magic Link</Typography>
			<Typography variant="body1">
				Zum Einloggen bitte Email eintragen. Es wird dann eine Email mit dem
				Magic Link verschickt.
			</Typography>
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<div>
					<TextField
						required
						id="email"
						label="Email-Adresse"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Button variant="contained" onClick={sendButton}>
						Einloggen
					</Button>
				</div>
			</Box>
		</Box>
	);
}
