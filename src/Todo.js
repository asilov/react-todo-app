import React, { useState } from 'react'
import './styles.css'

function Todo() {
	const [todos, setTodos] = useState([])
	const [input, setInput] = useState('')

	const handleSubmit = () => {
		setTodos((todos) => {
			todos.concat({ text: input, id: generateId() })
		})
	}

	return (
		<>
			<div className='container'>
				<input
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder='New Todo'
				/>
				<button onClick={handleSubmit}>Submit</button>
			</div>
		</>
	)
}

export default Todo
