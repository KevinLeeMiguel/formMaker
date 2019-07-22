import React from 'react';
import logo from './logo.svg';
import FormMaker from './formMaker';
import './App.css';
import './styles/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // names: '',
      // rm: '',
      // choice: '',
      // choices: ''

    }
  }


  handleData = (name, value) => {


    this.setState({[name]: value}, ()=>{
      console.log(this.state);
    });
    

 

  }
  render() {

    var options = [{
      value: "M",
      text: "Male"
    },
    {
      value: "F",
      text: "Female"
    }
    ]


    var data = {
      fields: [{
        type: 'input',
        name: 'names',
        inputLabel: "Names",
        handleData: this.handleData,
      },
      {
        type: 'select',
        name: 'choices',
        inputLabel: "Gender",
        handleData: this.handleData,
        extras: {
          options: options
        }
      },
      {
        type: 'checkboxes',
        name: 'rm',
        checkboxesLabel: "Languages:",
        handleData: this.handleData,
        checkboxes: [
          {
            inputLabel: "Java",
            value:"Java"
          },
          {
            inputLabel: "Javascript",
            value:"Javascript"
          },
          {
            inputLabel: "Python",
            value: "Python"
          }
        ]
      },
      {
        type: 'radios',
        name: 'choice',
        radiosLabel: 'Are you good: ',
        handleData: this.handleData,
        radios: [
          {
            inputLabel: "Yes",
            value:'yes'
          },
          {
            inputLabel: "No",
            value:'no'
          }
        ]
      }


      ]
    }
    return (
      <div className="col-md-10 offset-1">
        <FormMaker fields={data} />
      </div>
    );
  }
}

export default App;
