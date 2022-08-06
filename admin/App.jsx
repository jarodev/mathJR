import * as React from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';
import postgrestRestProvider from '@promitheus/ra-data-postgrest';

const dataProvider = postgrestRestProvider('/api/admin');

const AppAdmin = () => (
	<Admin dataProvider={dataProvider}>
		<Resource name="users" list={ListGuesser} />
		{/*<Resource name="comments" list={ListGuesser} /> */}
	</Admin>
);

export default AppAdmin;
