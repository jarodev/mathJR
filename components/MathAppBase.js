import * as React from 'react';
import MainAppBar from './MainAppBar';

export function MathAppBase(props) {
	return (
		<>
			<MainAppBar />
			<div style={{ paddingTop: '20px' }}>{props.app}</div>
		</>
	);
}
