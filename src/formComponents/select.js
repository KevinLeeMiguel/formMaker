import React from 'react';

class Select extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label>{this.props.inputLabel}</label>
                <select name={this.props.name} className="form-control">
                    {this.props.options.map(option => <option value={option.value}>{option.text}</option>)}
                </select>
            </div>
        )
    }
}

export default Select;