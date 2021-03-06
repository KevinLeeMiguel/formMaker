import React from 'react';

class Radio extends React.Component {


    GetValue = (e) => {
        var data = [];
        var li = document.getElementsByName(this.props.data.name);
        li.forEach(element => {
            if (element.checked) {
                data.push(element.value);
            }
        });
        this.props.handleData(this.props.data.name, data);
    }

    render() {

        return (
            <div>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">{this.props.data.checkboxesLabel}</legend>
                        <div className="col-sm-10">
                            {
                                this.props.data.checkboxes.map(checkbox =>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" onBlur={this.GetValue} name={this.props.data.name} value={checkbox.value} checked={checkbox.checked} />
                                        <label className="form-check-label">{checkbox.inputLabel}</label>
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