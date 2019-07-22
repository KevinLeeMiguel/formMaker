import React from 'react';

class Input extends React.Component {

    GetValue = (e)=>{
        // console.log(e.target.value);
        this.props.handleData(this.props.name,e.target.value, this.props.inputType);
    }

    render() {
        return (
            <div className="form-group">
                <label>{this.props.inputLabel}</label>
                <input type={this.props.inputType} className="form-control" onChange={this.GetValue} name={this.props.name} placeholder={this.props.placeholder} />
                <br />
            </div>
        )
    }
}
export default Input;