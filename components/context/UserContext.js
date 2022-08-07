import * as React from 'react';
import { getCurrentUser } from '../../utils/users';

const userStatic = {
	user1: {
		userName: 'Testuser1',
		isTeacher: false,
	},
	user2: {
		userName: 'Testuser2',
		isTeacher: true,
	},
};

export const UserContext = React.createContext({
	user: getCurrentUser(),
	setUser: () => {},
});
