import React from 'react';
import Input from './formComponents/input';
import Select from './formComponents/select';

class FormMaker extends React.Component {

    makeForm() {
        var list = [];
        this.props.fields.fields.forEach(field => {
            switch (field.type) {
                case 'input': list.push(<Input name={field.name} />)

                    break;
                case 'select': list.push(<Select name={field.name} options={field.extras.options}/>)
                    break;
                default:
                    break;
            }
        });
        return list;
    }


    render(){
        return (
            <div>
                <form>
                   { this.makeForm()}
                </form>
            </div >
        )
    }

    }

export default FormMaker;