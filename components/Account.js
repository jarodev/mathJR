import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { userIsAdmin } from '../utils/users';

export default function Account({ session }) {
	const [loading, setLoading] = useState(true);
	const [roles, setRoles] = useState([]);
	const [userdata, setUserdata] = useState([]);

	useEffect(() => {
		getProfile();
	}, [session]);

	async function getProfile() {
		try {
			setLoading(true);
			const user = supabase.auth.user();

			console.log(`User: ${user.id}`);

			let { data, error, status } = await supabase
				.from('Users')
				.select('id, roles, comment, name, surname, username');

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				await setUserdata(data);
				// setRoles(data.roles);
				console.log(userdata);
			}
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}

	async function updateProfile({ roles }) {
		try {
			setLoading(true);
			const user = supabase.auth.user();

			const updates = {
				id: user.id,
				roles,
			};

			let { error } = await supabase.from('Users').upsert(updates, {
				returning: 'minimal', // Don't return the value after inserting
			});

			if (error) {
				throw error;
			}
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}

	/*
   return (
	   <div className="form-widget">
		   <div>
			   <label htmlFor="email">Email</label>
			   <input id="email" type="text" value={session.user.email} disabled />
		   </div>
		   <div>
			   <label htmlFor="roles">Roles</label>
			   <input
				   id="roles"
				   type="text"
				   value={roles || ''}
				   onChange={(e) => setRoles(e.target.value)}
			   />
		   </div>

		   <div>
			   <button
				   className="button block primary"
				   onClick={() => updateProfile({ roles })}
				   disabled={loading}
			   >
				   {loading ? 'Loading ...' : 'Update'}
			   </button>
		   </div>

		   <div>
			   <button
				   className="button block"
				   onClick={() => supabase.auth.signOut()}
			   >
				   Sign Out
			   </button>
		   </div>
	   </div>
   );

	 */

	const columns = [
		{ field: 'id', headerName: 'id' },
		{ field: 'comment', headerName: 'Kommentare' },
		{ field: 'name', headerName: 'Name' },
		{ field: 'surname', headerName: 'Nachname' },
		{ field: 'username', headerName: 'Username' },
	];
	console.log(session);
	let current = new Date();
	return (
		<>
			<Box sx={{ width: '90%', height: '400px' }}>
				<Typography variant="inherit">
					Session expires in:{' '}
					{session.expires_at - Math.round(Date.now() / 1000)} sec
				</Typography>
				<Typography variant="h2" component="div">
					Adminbereich
				</Typography>
				{userdata && userIsAdmin ? (
					<DataGrid rows={userdata} columns={columns} />
				) : (
					<Typography>no data</Typography>
				)}
				<div>
					<Button variant="contained" onClick={() => supabase.auth.signOut()}>
						Sign Out
					</Button>
				</div>
			</Box>
		</>
	);
}
