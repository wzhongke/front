import React from 'react'

class NameForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {value : ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        this.setState({value: event.target.value})
    }

    handleSubmit (event) {
        alert ('a name was submitted: ' + this.state.value)
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>name: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default NameForm;