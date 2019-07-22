import React from 'react';
import logo from './logo.svg';
import FormMaker from './formMaker';
import './App.css';
import './styles/bootstrap.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  submitForm = () => {
    axios.post("http://localhost:3002/emps/save", this.state)
      .then(res => {
        console.log(res)
        alert("success");
      })
      .catch(err => {
        console.error(err);
        alert("error occured: " + err);
      })
  }

  handleData = (name, value) => {


    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });




  }
  render() {

    var options = [{
      value: "default",
      text: "Choose Gender"
    },
    {
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
        type: 'group',
        fields: [{
          type: 'input',
          name: 'firstName',
          inputLabel: "first name",
          handleData: this.handleData,
        },
        {
          type: 'input',
          name: 'lastName',
          inputLabel: "last name",
          handleData: this.handleData,
        }
        ]
      },
      {
        type: 'input',
        name: 'Age',
        inputType: 'number',
        inputLabel: "Age",
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
            value: "Java"
          },
          {
            inputLabel: "Javascript",
            value: "Javascript"
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
            value: true
          },
          {
            inputLabel: "No",
            value: false
          }
        ]
      },
      {
        type: 'button',
        buttonType: 'submit',
        nameLabel: 'Submit',
        onClickFunction: this.submitForm,
      }
      ]
    }
    return (
      <div>
        <h1 className="text-center my-4">Employee Registration</h1>
        <div className="col-md-10 offset-1 jumbotron">
          <div className="col-md-10 offset-1">
            <FormMaker fields={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
