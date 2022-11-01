import { useState } from "react";

export default function TodoForm({ todos, setTodos }) {

    const [placeholder, SetPlaceHolder] = useState("Type Item");
    const [inputText, setInputText] = useState("");
    const [priority, setPriority] = useState("None");


    const inputTextHandler = e => setInputText(e.target.value);


    const handleSubmit = e => {

        e.preventDefault();

        if (inputText === "") SetPlaceHolder("Please add something!")

        else {
            setTodos([
                { name: inputText, priority: priority, completed: false, id: Math.random() * 1000 }, ...todos
            ]);
            SetPlaceHolder("What do you need to do?");
            setInputText("");
        }
    }


    const inputTypeHandler = e => setPriority(e.target.value);


    return (
        <div className="form-wrapper">
            <form className="todo-form">
                <input type="text"
                    value={inputText}
                    onChange={inputTextHandler}
                    className="todo-input"
                    maxLength="50"
                    required
                    placeholder={placeholder} />

                <button className="add-button" onClick={handleSubmit}>Add Task</button>
            </form>

            <h3>Priority</h3>
            <form className="checkbox-form">
                <input type="radio" className="checkbox" name="option" value="High" onChange={inputTypeHandler} />
                <label htmlFor="option1">High</label>
                <input type="radio" className="checkbox" name="option" value="Medium" onChange={inputTypeHandler} />
                <label htmlFor="option2">Medium</label>
                <input type="radio" className="checkbox" name="option" value="Low" onChange={inputTypeHandler} />
                <label htmlFor="option3">Low</label>
                <input type="radio" className="checkbox" name="option" value="None" onChange={inputTypeHandler} />
                <label htmlFor="option4">None</label>
            </form>
        </div>
    )
}
