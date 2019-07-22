import React from 'react';

class Radio extends React.Component {

    GetValue = (e)=>{
        console.log(e.target.value);
        this.props.handleData(this.props.data.name,e.target.value);
    }
    render() {

        return (
            <div>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">{this.props.data.radiosLabel}</legend>
                        <div className="col-sm-10">
                            {
                                this.props.data.radios.map(radio =>
                                    <div className="form-check">
                                        <input type="radio" onBlur={this.GetValue} className="form-check-input" value={radio.value} name={this.props.data.name} checked={radio.checked} />
                                        <label className="form-check-label">{radio.inputLabel}</label>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </fieldset>
            </div>

        )
    }
}


export default Radio;