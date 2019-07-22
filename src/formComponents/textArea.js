import React from 'react';

class TextArea  extends React.Component{

    GetValue = (e)=>{
        // console.log(e.target.value);
        this.props.handleData(this.props.name,e.target.value, this.props.inputType);
    }
    render(){
        return <textarea type="text" onChange={this.GetValue} name={this.props.name} placeholder={this.props.placeholder}></textarea>
    }
}

export default TextArea;