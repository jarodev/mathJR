import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import EmailPasswdAuth from './EmailPasswdAuth';
import EmailAuth from './EmailAuth';

export default function Authentication() {
	const [value, setValue] = React.useState('0');

	const tabChanged = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ maxWidth: '80%' }} id="authentication">
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Einloggen mit Magic Link</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<EmailAuth />
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography>Einloggen mit Email und Passwort</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<EmailPasswdAuth />
				</AccordionDetails>
			</Accordion>
		</Box>
	);
}
