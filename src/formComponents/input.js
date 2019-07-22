import React from 'react';

class Input extends React.Component {

    GetValue = (e)=>{
        // console.log(e.target.value);
        this.props.handleData(this.props.name,e.target.value);
    }

    render() {
        return (
            <div className="form-group">
                <label>{this.props.inputLabel}</label>
                <input type={this.props.inputType} className="form-control" onKeyUp={this.GetValue} name={this.props.name} placeholder={this.props.placeholder} />
                <br />
            </div>
        )
    }
}
export default Input;