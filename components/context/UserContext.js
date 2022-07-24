import * as React from 'react';

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
	user: userStatic.user1,
	setUser: () => {},
});
