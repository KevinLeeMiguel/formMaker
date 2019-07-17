import React from 'react';

class Select extends React.Component {
    render() {
        return (<select name={this.props.name} >
            {this.props.options.map(option => <option value={option.value}>{option.text}</option>)}
        </select>
        )
    }
}

export default Select;