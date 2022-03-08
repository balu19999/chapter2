import React,{Component} from "react";


class AddForm extends Component{
    state={
        content:''
    }
    handleOnchange=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    handleOnsubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleOnsubmit}>
                    <label>add new todo</label>
                    <input type="text" onChange={this.handleOnchange}/>
                </form>
            </div>
        )
    }
}
export default AddForm