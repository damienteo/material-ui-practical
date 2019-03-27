import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core/';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = {
	Paper: { 
		padding: 20, 
		margin: 10, 
		height: 500,
		overflowY: 'auto'
	}
}

export default ({ 
	exercises, 
	category, 
	onSelect, 
	exercise: {
		id, 
		title = 'Welcome!', 
		description = 'Please select an exercise from the list on the left.'
	} 
}) =>
	<Grid container>
		<Grid item sm> 
			<Paper style = {styles.Paper}>
				{exercises.map(([group, exercises]) =>
					!category || category === group
					? <React.Fragment key = {group}>

						<Typography 
							variant = "headline"
							style={{ textTransform: 'capitalize' }}
						>
							{group}
						</Typography>

							<List component="ul">
								{ exercises.map(({ id, title }) =>
									<ListItem 
									key = {id}
										button
										onClick={ () => onSelect(id)}
									>
										<ListItemText 
											primary={title} 	
										/>
									</ListItem>
								)}
							</List>

					</React.Fragment>
					: null
					
				)}
			</Paper>
		</Grid>
		<Grid item sm = {6}>
			<Paper style = {styles.Paper}>
				<Typography
					variant="display1"
					style= {{ margin: 20 }}
				>
					{title}
				</Typography>
				<Typography
					variant="subheading"
				>
					{description}
				</Typography>
			</Paper>
		</Grid>
	</Grid>