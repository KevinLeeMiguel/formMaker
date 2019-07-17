import React from 'react';

class Radio  extends React.Component{
    render(){
        return <input type="radio" name={this.props.name} checked={this.props.checked} />
    }
}

export default Radio;