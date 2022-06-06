import * as React from 'react';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';

export function LinkCard(props) {
	return (
		<Card sx={{ maxWidth: 300 }}>
			<CardActionArea>
				<CardMedia
					component={props.componentMedia}
					height={props.componentMediaHeight}
					image={props.componentMediaImage}
					alt={props.componentMediaAlt}
				/>
				<CardContent>
					<Typography gutterBottom variant="h3" component="div">
						{props.contentTitle}
					</Typography>
					<Typography
						variant="body2"
						component="div"
						color="text.secondary"
					>
						{props.contentText}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
