import React from "react"

const ToDoItems = (props) => {
    // console.log("props" , props);

const styles = {
    fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
}

    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.value.completed} 
            onChange={() =>props.handleChange(props.value.id)}/>
            <p style = {props.value.completed ? styles : null}>{props.value.text}</p>
        </div>
    )
}


export default ToDoItems;