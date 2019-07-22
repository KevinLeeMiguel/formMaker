import React from 'react';
import Input from './formComponents/input';
import Select from './formComponents/select';
import CheckBox from './formComponents/checkbox';
import Radio from './formComponents/radio';
import Button from './formComponents/button';

class Group extends React.Component {

    makeForm() {
        var list = [];
        this.props.data.fields.forEach(field => {
            list.push();
            switch (field.type) {
                case 'input': list.push(<div className="col"><Input name={field.name} handleData={field.handleData} inputType={field.inputType} inputLabel={field.inputLabel} /></div>)

                    break;
                case 'select': list.push(<div className="col"><Select name={field.name} handleData={field.handleData} inputLabel={field.inputLabel} options={field.extras.options} /></div>)
                    break;
                case 'checkboxes': list.push(<div className="col"><CheckBox data={field} handleData={field.handleData}/></div>);
                    break;
                case 'radios': list.push(<div className="col"><Radio data={field} handleData={field.handleData} /></div>)
                    break;
                case 'button': list.push(<div className="col"> <Button data={field} /></div>)
                    break;
                default:
                    break;
            }
        });
        return list;
    }


    render() {
        return (
            <div className="row">
                    {this.makeForm()}
            </div >
        )
    }

}

export default Group;