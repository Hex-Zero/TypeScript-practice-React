import React from 'react'

const Reducer = () => {
	const reducer = (state, action) => {
		switch (action.type) {
			case 'ADD':
				return state + 1
			case 'SUB':
				return state - 1
			case 'RES':
				return (state = 0)
			default:
				return state
		}
	}
	const [ count, dispatch ] = React.useReducer(reducer, 0)

	return (
		<React.Fragment>
			<div>{count}</div>
			<button onClick={() => dispatch({ type: 'ADD', payload: 0 })}>+</button>
			<button onClick={() => dispatch({ type: 'SUB', payload: 0 })}>-</button>
			<button onClick={() => dispatch({ type: 'RES', payload: 0 })}>r</button>
		</React.Fragment>
	)
}

export default Reducer
