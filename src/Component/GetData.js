import React from "react"
import toDosData from "./toDosData";
import ToDoItems from "./ToDoItems";



class GetData extends React.Component{
   constructor(){
      super()
      this.state = {
         todos : toDosData
      }
      this.handleChange = this.handleChange.bind(this)
   }

   handleChange(id){
      this.setState( (prev) => {
         console.log(prev);
        const updatedtodos =  prev.todos.map( (item) => {
           if(item.id === id){
              return {
                 ...item,
                 completed : !item.completed  
           }
         }
           return item
      })
      console.log("Updatedtodos" ,updatedtodos);
      return {
         todos : updatedtodos
      }
      
   }
   
   )
   
}

   render(){
      const extractData = this.state.todos.map( (item) => {
           return <ToDoItems key={item.id} value = {item}  handleChange={this.handleChange}/>
      })
      
      return(
         <div className = "todo-list">
            {extractData}
         </div>
      )
   }
}

export default GetData;