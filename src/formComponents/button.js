import React from 'react';

class Button  extends React.Component{

    submit = (e)=>{
        e.preventDefault();
        this.props.data.onClickFunction(this.props.data.formType);
    }

    render(){
        return <button className="btn btn-block btn-primary" type={this.props.data.buttonType} onClick={this.submit}>{this.props.data.nameLabel}</button>
    }
}

export default Button;