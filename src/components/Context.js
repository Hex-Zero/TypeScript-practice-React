import React, { useContext, useState, Fragment } from 'react'

const Store = React.createContext()

export const Parent = (props) => {
	const [ text, setText ] = useState('random text')
	return <Store.Provider value={[ text, setText ]}>{props.children}</Store.Provider>
}
const Child = () => {
	const [ text, setText ] = useContext(Store)
	const changeText = () => {
		setText('other text')
	}
	return (
		<Fragment>
			{text}
			<button type='button' onClick={() => changeText()}>
				Change
			</button>
		</Fragment>
	)
}

const Context = () => {
	return <Child />
}

export default Context
