import React, { Component} from 'react';

class AddTodo extends Component{

    state = {
        title : ''
    }
    getValue = (e) => this.setState({ [e.target.name]: e.target.value});

    submit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title : ''});

    }
    render (){
        return(
            <form className="row" onSubmit={this.submit}>
                <div className = "form-group col-lg-6" >
                    <input type="text" placeholder="add todo ..."
                        className="form-control"
                        name = 'title'
                        value = {this.state.title}
                        onChange = { this.getValue}
                    />
                </div>
                <button type="submit" className = "btn btn-success btn-sm col-lg-2">
                    <i className = "fa fa-plus"></i>
                    <strong> Add</strong>
                </button>
            </form>
        )
    }
}

export default AddTodo;