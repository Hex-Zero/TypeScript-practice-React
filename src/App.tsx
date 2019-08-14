import React, { Fragment, useContext } from 'react'
import { Link } from '@reach/router'
import './App.css'
import { Store } from './Store'
import { IEpisode, IAction, IEpisodeProps } from './interfaces'

// import Reducer from './components/Reducer'
// import TodoList from './components/TodoList'
// import Context, { Parent } from './components/Context'

export default function App(props: any): JSX.Element {
	const { state, dispatch } = useContext(Store)

	console.log(state)
	return (
		<Fragment>
			<header className='header'>
				<h1> Rick and Morty</h1>
				<p>Pick your favourite episode!!!</p>
				<Link to='/'>Home</Link>
				<Link to='/faves'>Favourites(s): {state.favourites.length}</Link>
			</header>
			{props.children}
			{/* <Parent>
				<Context />
			</Parent>
      <TodoList /> 
       <Reducer /> */}
		</Fragment>
	)
}
