import { supabase } from './supabaseClient';

export function userLoginValid({ session }) {
	let currentTime = new Date();
	if (session.expires_at > currentTime) return true;
	return false;
}

export async function userIsAdmin() {
	try {
		const user = supabase.auth.user();

		console.log(`User: ${user.id}`);

		let { data, error, status } = await supabase
			.from('Users')
			.select('id, isAdmin')
			.eq('refUser', user.id)
			.single();

		if (error || status !== 406) {
			throw error;
		}

		if (data) {
			return data.isAdmin;
		}
		return false;
	} catch (e) {
		alert(e);
		return false;
	}
}

export async function getCurrentUser() {
	try {
		const user = supabase.auth.user();

		let { data, error, status } = await supabase
			.from('Users')
			.select('id, refUser, roles, comment, name, surname, username, isAdmin')
			.eq('refUser', user.id)
			.single();

		if (error && status !== 406) {
			throw error;
		}

		if (data) {
			return data;
		}
	} catch (error) {
		alert(error.message);
	}
	return null;
}
