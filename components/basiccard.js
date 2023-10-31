import * as React from 'react';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import Link from 'next/link';

export function LinkCard(props) {
	return (
        <Card sx={{ maxWidth: 300 }}>
			<Link href={props.componentLink} legacyBehavior>
				<CardActionArea>
					<CardMedia
						component={props.componentMedia}
						height={props.componentMediaHeight}
						image={props.componentMediaImage}
						alt={props.componentMediaAlt}
					/>
					<CardContent>
						<Typography gutterBottom variant="h4" component="div">
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
			</Link>
		</Card>
    );
}
