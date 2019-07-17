import React from 'react';

class TextArea  extends React.Component{
    render(){
        return <textarea type="text" name={this.props.name} placeholder={this.props.placeholder}></textarea>
    }
}

export default TextArea;