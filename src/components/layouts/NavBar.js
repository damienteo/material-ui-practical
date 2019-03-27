import React from 'react';
import {AppBar, Toolbar, Typography, Button, } from '@material-ui/core/';
import CreateDialogue from '../exercises/Dialogs/Create'

const NavBar = ({ muscles, onExerciseCreate }) => {
	return(
		<div>
			 <AppBar position="static">
		        <Toolbar>
		          <Typography 
		          	variant="headline" 
		          	color="inherit" 
		          	style={{flex: 1}}
		          	>
		            Material UI with React
		          </Typography>
		          <Button color="inherit">Login</Button>
		          <CreateDialogue 
		          	muscles = { muscles }
		          	onCreate = {onExerciseCreate}
		          />
		        </Toolbar>
		      </AppBar>
		</div>
	)
}

export default NavBar;