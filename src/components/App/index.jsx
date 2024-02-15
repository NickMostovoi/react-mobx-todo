import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import todoStore from './helper';

const App = observer(() => {
    const [inputText, setInputText] = useState('');

    const addNewToDo = function (event) {
        if (event.key === 'Enter') {
            const id = Math.floor(Math.random() * 1000000);
            const title = event.target.value;
            const completed = false;

            todoStore.createTodo({id, title, completed});
        }
    };

    return (
        <div className={'todo-app'}>
            <h1>TO DO LIST</h1>
            <input
                type="text"
                placeholder="Add to do"
                value={inputText}
                onChange={event => setInputText(event.target.value)}
                onKeyDown={event => addNewToDo(event)}
            />
            <ul>
                {todoStore.todos.map(({ id, title, completed }) => (
                    <li key={id} className={completed ? 'completed' : ''}>
                        <span>{title}</span>
                        <div>
                            <input type="checkbox" checked={completed} onChange={() => todoStore.completeTodo(id)}/>
                            <button onClick={() => todoStore.deleteTodo(id)}>X</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default App;
