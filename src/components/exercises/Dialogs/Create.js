import React, { Component } from 'react'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { 
	Button, 
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Fab,
	Icon,
	TextField,
	Select,
	InputLabel,
	FormControl,
	MenuItem,
	withStyles
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
	FormControl: {
		width: 500
	}
})

export default withStyles(styles) (class extends Component {

	state = {
		open: false,
		exercise: {
			title: '',
			description: '',
			muscles: '',
		},
	}

	handleToggle = () => {
		this.setState({
			open: !this.state.open
		})
	}

	 handleChange = name => ({target: { value }}) => {
	    this.setState({ 
	    	
	    	exercise: {
	    		...this.state.exercise,
	    		[name]: value 
	    	}
	    });
	  };

	handleSubmit = () => {
		//todo: validate
		const { exercise } = this.state
		this.props.onCreate({
			...exercise,
			id: exercise.title.toLowerCase().replace(/ /g, '-')
		})
		this.setState({
			open: false,
			exercise: {
				title: '',
				description: '',
				muscles: '',
			}
		})
	}

	render() {

		const { open, exercise: { title, description, muscles } } = this.state;
		const { classes, muscles: categories } = this.props;

		return(
			<React.Fragment>
				<Button 
					variant="fab" 
					onClick={this.handleToggle}
					mini
				>
					<AddIcon />
		        </Button>

		        <Dialog
		          open={open}
		          onClose={this.handleToggle}
		        >
		          <DialogTitle id="form-dialog-title">
		          	Create a new Exercise
		          </DialogTitle>
		          <DialogContent>
		            <DialogContentText>
		              Please fill out the form below.
		            </DialogContentText>
		            <ValidatorForm
		                ref="form"
		                onSubmit={this.handleSubmit}
		                onError={errors => console.log(errors)}
		            >
		                    <TextField
					          label="Title"
					          value={title}
					          onChange={this.handleChange('title')}
					          margin="normal"
					          className = {classes.FormControl}
					        />
					        <br />
					         <FormControl className = {classes.FormControl}>
					          <InputLabel htmlFor="muscles">
					          	Muscles
					          </InputLabel>
					          <Select
					            value={muscles}
					            onChange={this.handleChange('muscles')}
					          >
					          	{categories.map(category => 
					          		<MenuItem 
					          			key={category}
					          			value={category}
					          		>
					          			{category}
					          		</MenuItem>
					          	)}
					          </Select>
					        </FormControl>
					        <br />
					        <TextField
						        multiline
						        rows="4"
					          label="description"
					          value={description}
					          onChange={this.handleChange('description')}
					          margin="normal"
					          className = {classes.FormControl}
					        />
		            </ValidatorForm>
		          </DialogContent>
		          <DialogActions>
		            <Button 
		            	color="primary"
		            	variant="raised"
		            	onClick={this.handleSubmit}
		            >
		              Create Exercise
		            </Button>
		          </DialogActions>
		        </Dialog>
			</React.Fragment>
		)
	}
})
	