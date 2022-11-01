import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function Todo({ setTodos, todos, getPriority }) {

    const handleClick = todo => setTodos(todos.filter((el) => el.id !== todo.id));


    const handleComplete = todo => {
        setTodos(
            todos.map(e => {
                if (e.id === todo.id) {
                    return {
                        ...todo,
                        completed: !e.completed,
                    };
                }
                return e;
            })
        );
    };

    return (
        <div className="wrapper">
            {todos.map(todo => (
                <div className={`list ${todo.completed ? "completed" : ""} ${getPriority(todo)}`} key={todo.id}>
                    <h2 className="todo-title">{todo.name}</h2>
                    <div className="button-wrapper">
                        <FontAwesomeIcon icon={faCircleCheck} onClick={() => handleComplete(todo)} />

                        <FontAwesomeIcon icon={faTrash} onClick={() => handleClick(todo)} />
                    </div>
                </div>
            ))}
        </div>
    );
}
