import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <div>
                <input type={this.props.inputType} name={this.props.name} placeholder={this.props.placeholder} />
                <br />
            </div>
        )
    }
}

export default Input;