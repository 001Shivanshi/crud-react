import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// C - Create
// R - Read
// U - Update
// D - Delete

function App() {
    const [userInput, setUserInput] = useState('');
    const [editTodo, setEditTodo] = useState(null);
    const [todos, setTodos] = useState([
        "Task One",
        "Task Two"
    ])

    const handleInputChange = (event) => {
        setUserInput(event.target.value)
    }

    const handleAdd = () => {
        setTodos((prevState) => {
            const temp = [...prevState];
            temp.push(userInput);
            return temp;
        })
        setUserInput('');
    }

    const handleDelete = (value) => {
        if (confirm('Are you want to delete ?')) {
            setTodos((prevState) => {
                const temp = [...prevState];
                return temp.filter((data) => data !== value)
            })
        }
    }

    const handleEdit = (value) => {
        setEditTodo(value);
        setUserInput(value);
    }

    const handleUpdateValue = () => {
        setTodos((prevState) => {
            const temp = [...prevState];
            const index = temp.findIndex((todo) => todo === editTodo);
            temp[index] = userInput;
            return temp;
        })
        setEditTodo(null);
        setUserInput('');
    }

    const handleSubmit = () => {
        if (editTodo) {
            handleUpdateValue()
        } else {
            handleAdd()
        }
    }

  return (
    <>
        <div className="d-flex gap-5 p-2">
            <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                className="form-control"
            />
            <button
                className="btn btn-primary"
                onClick={handleSubmit}
            >{editTodo ? 'Update' : 'Add'}</button>
        </div>
        {todos.map((todo) => (
            <div key={todo} className="d-flex gap-2 my-2 bg-info p-2 m-2">
                <h1>{todo}</h1>
                <div className="d-flex gap-2">
                    <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(todo)}
                    >Delete</button>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(todo)}
                    >Edit</button>
                </div>
            </div>

        ))}
    </>
  )
}

export default App
