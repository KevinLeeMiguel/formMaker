import React from 'react';

class Button  extends React.Component{
    render(){
        return <button type={this.props.buttonType} onClick={this.props.onClickFunction}>{this.props.nameLabel}</button>
    }
}

export default Button;