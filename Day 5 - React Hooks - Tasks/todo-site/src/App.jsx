import  { useState } from 'react';
import './App.css';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState({ name: '', description: '', status: 'not completed' });
    const [editId, setEditId] = useState(null);
    const [editedTodo, setEditedTodo] = useState({ name: '', description: '' });
    const [filter, setFilter] = useState('All');

    function nameChange(e) {
        setTodo({ ...todo, name: e.target.value });
    }

    function descriptionChange(e) {
        setTodo({ ...todo, description: e.target.value });
    }

    function addTodo() {
        if (!todo.name || !todo.description) return;
        const newTodo = {
            id: Date.now(),
            name: todo.name,
            description: todo.description,
            status: "not completed",
        };

        setTodoList([...todoList, newTodo]);
        setTodo({ name: '', description: '' });
    }

    function deleteTodo(id) {
        const updatedTodoList = todoList.filter(todo => todo.id !== id)
        setTodoList(updatedTodoList);
    }

    function editTodo(id) {
        setEditId(id);
        const todoToEdit = todoList.find(todo => todo.id === id);
        setEditedTodo({
            name: todoToEdit.name,
            description: todoToEdit.description
        });
    }

    function saveEdit() {
        const updatedTodoList = todoList.map(todo => {
            if (todo.id === editId) {
                return {
                    ...todo,
                    name: editedTodo.name,
                    description: editedTodo.description
                };
            }
            return todo;
        });
        setTodoList(updatedTodoList);
        setEditId(null);
    }

    function cancelEdit() {
        setEditId(null);
    }

    function handleFilterChange(e) {
        setFilter(e.target.value);
    }

    function handleStatusChange(id, newStatus) {
        const updatedTodoList = todoList.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    status: newStatus
                };
            }
            return todo;
        });
        setTodoList(updatedTodoList);
    }

    const filteredTodoList = todoList.filter(todo => {
        if (filter === 'All') return true;
        if (filter === 'Not Completed') return todo.status === 'not completed';
        if (filter === 'Completed') return todo.status === 'completed';
    });

    return (
        <>
            <div className="column">
                <h2>TODO Task</h2>
                <div className="row1">
                    <input type="text" className='todo' placeholder='TODO Name' onChange={nameChange} value={todo.name} />
                    <input type="text" className='todo' placeholder='TODO description' onChange={descriptionChange} value={todo.description} />
                    <button className='addTodo' onClick={addTodo} >Add todo</button>
                </div>

                <div className="filter">
                    <p>My todo</p>
                    <div className="statusFilter">
                        <div>
                            <label htmlFor="status-select">Status Filter: </label>
                            <select name="status" id="status-select" value={filter} onChange={handleFilterChange}>
                                <option value='All'>All</option>
                                <option value='Not Completed'>Not Completed</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="card-grid">
                    <div className="container">
                        <div className="row row-cos-1 row-cols-md-3 g-4">
                            {filteredTodoList.map(todo => (
                                <div className="col" key={todo.id}>
                                    <div className="card">
                                        {editId === todo.id ? (
                                            <>
                                                <input type="text" value={editedTodo.name} onChange={(e) => setEditedTodo({ ...editedTodo, name: e.target.value })} />
                                                <input type="text" value={editedTodo.description} onChange={(e) => setEditedTodo({ ...editedTodo, description: e.target.value })} />
                                                <button onClick={saveEdit}>Save</button>
                                                <button onClick={cancelEdit}>Cancel</button>
                                            </>
                                        ) : (
                                            <>
                                                <div className='cardList'>
                                                    <p>Name: {todo.name}</p>
                                                    <p>Description: {todo.description}</p>
                                                    <div className="statusFilter">
                                                        <div>
                                                            <label htmlFor={`status-select-${todo.id}`}>Status:</label>
                                                            <select
                                                                name="status"
                                                                id={`status-select-${todo.id}`}
                                                                value={todo.status}
                                                                onChange={(e) => handleStatusChange(todo.id, e.target.value)}
                                                            >
                                                                <option value='not completed'>Not Completed</option>
                                                                <option value="completed">Completed</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-button">
                                                    <button type="button" className="btn btn-success" onClick={() => editTodo(todo.id)}>Edit</button>
                                                    <button type="button" className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
