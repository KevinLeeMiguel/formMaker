import React from 'react';
import Input from './formComponents/input';
import Select from './formComponents/select';
import CheckBox from './formComponents/checkbox';
import Radio from './formComponents/radio';
import Button from './formComponents/button';
import GroupMaker from './groupMaker';

class FormMaker extends React.Component {

    makeForm() {
        var list = [];
        this.props.fields.fields.forEach(field => {
            switch (field.type) {
                case 'input': list.push(<Input name={field.name} handleData={field.handleData} inputType={field.inputType} inputLabel={field.inputLabel} />)

                    break;
                case 'select': list.push(<Select name={field.name} handleData={field.handleData} inputLabel={field.inputLabel} options={field.extras.options} />)
                    break;
                case 'checkboxes': list.push(<CheckBox data={field} handleData={field.handleData} />)
                    break;
                case 'radios': list.push(<Radio data={field} handleData={field.handleData} />)
                    break;
                case 'button': list.push(<Button data={field} />)
                    break;
                case 'group': list.push(<GroupMaker data={field} />)
                    break;
                default:
                    break;
            }
        });
        return list;
    }


    render() {
        return (
            <div>
                <form>
                    {this.makeForm()}
                </form>
            </div >
        )
    }

}

export default FormMaker;