import React, { Component } from 'react';
import { NavBar, Footer } from './layouts';
// import NavBar from './layouts/NavBar';
// import Footer from './layouts/Footer';
import Exercises from './exercises'
import { muscles, exercises } from '../store.js'

class App extends Component {

	state = {
		exercises,
		category: '',
		exercise: {}
	}

	getExercisesByMuscles() {
		return Object.entries(
			this.state.exercises.reduce((exercises, exercise) => {
			
			const { muscles } = exercise;

			exercises[muscles] = exercises[muscles]
			? [...exercises[muscles], exercise]
			: [exercise]

			return exercises
		}, {})
		)
	}

	handleCategorySelect = category => {
		this.setState({
			category: category
		})
	}

	handleExerciseSelect = id => {
		this.setState((prevState) => ({
			exercise: prevState.exercises.find( ex => ex.id === id)
		}))
	}

	handleExerciseCreate = exercise => {
		this.setState(({ 
			exercises:[
				...exercises,
				exercise
			]
				
		}))
	}

  render() {
  	const exercises = this.getExercisesByMuscles() 
  	const { category, exercise } = this.state;
    return (
      <React.Fragment>
        <NavBar 
        	muscles = {muscles}
        	onExerciseCreate = {this.handleExerciseCreate}
        />

        <Exercises 
        	exercise = {exercise}
       		category = {category}
        	exercises={exercises}
        	onSelect = {this.handleExerciseSelect}
        />

        <Footer 
        	category = {category}
        	muscles = {muscles}
        	onSelect={this.handleCategorySelect}
        />
      </React.Fragment>
    );
  }
}

export default App;
