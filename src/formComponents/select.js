import React from 'react';

class Select extends React.Component {

    GetValue = (e)=>{
        // console.log(e.target.value);
        this.props.handleData(this.props.name,e.target.value);
    }
    render() {


        return (
            <div className="form-group">
                <label>{this.props.inputLabel}</label>
                <select name={this.props.name} onBlur={this.GetValue} className="form-control">
                    {this.props.options.map(option => <option value={option.value}>{option.text}</option>)}
                </select>
            </div>
        )
    }
}

export default Select;