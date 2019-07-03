import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value : 'Read-only'
      }

      this.inputHandler = this.inputHandler.bind(this)
      this.changeReadOnly = this.changeReadOnly.bind(this)
    }

    changeReadOnly = (e) =>{
        this.setState({
            value : null
        })
    }
    inputHandler =(e) =>{
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }
    
  render() {
    return (
        <form>
            <div className="form-group">
                <label forName="text">Text:</label>
                <input type="text" name="text" className="form-control"
                    value={this.state.value} onClick={this.changeReadOnly}
                    onChange={ this.inputHandler } placeholder="text entry" />
            </div>
            <div className="form-group">
                <label forName="text">Textarea:</label>
                <textarea className="form-control" name="textarea"
                    value={ this.state.name } onChange={ this.inputHandler }></textarea>
            </div>
            <div className="form-group">
                <label forName="text">languages:</label>
                <select name="select" className="form-control"
                    value={ this.state.name } onChange={ this.inputHandler }>
                    <option>--</option>
                    <option>ReactJs</option>
                    <option>Angular</option>
                    <option>vanilla js</option>
                </select>
            </div>
        </form>
    )
  }
}

export default Forms
