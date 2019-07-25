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

  submitFormData = () => {
    var formData = new FormData();
    var p = this.state;
    for (var key in p) {
      if (p.hasOwnProperty(key)) {
        formData.append([key], p[key]);
        console.log(key + " -> " + p[key]);
      }
    }
    formData.append("file", this.state.files[0]);
    axios.post("http://localhost:3002/employees/file", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log(res)
        alert("success");
        this.resetForm();
      })
      .catch(err => {
        console.error(err);
        alert("error occured: " + err);
      })
  }

  submitJSONForm = () => {
    axios.post("http://localhost:3002/employees/save", this.state)
      .then(res => {
        console.log(res)
        alert("success");
        this.resetForm();
      })
      .catch(err => {
        console.error(err);
        alert("error occured: " + err);
      })
  }

  submitForm = (formType) => {
    if (formType === "formData") {
      alert("formData");
      this.submitFormData();
    } else if (formType === "json") {
      alert("json");
      this.submitJSONForm();
    }
  }

  handleData = (name, value) => {


    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });




  }
  resetForm = () => {
    document.getElementById("form").reset();
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
      formType: 'formData',
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
        },
        {
          type: 'input',
          name: 'files',
          inputType: "file",
          inputLabel: "last name",
          handleData: this.handleData,
        }
        ]
      },
      {
        type: 'input',
        name: 'idNumber',
        inputLabel: 'ID number: ',
        handleData: this.handleData
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
        radiosLabel: 'Graduate? : ',
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
        type: "group",
        fields: [
          {
            type: 'button',
            buttonType: 'submit',
            formType: 'formData',
            nameLabel: 'Submit Form Data',
            onClickFunction: this.submitForm,
          },
          {
            type: 'button',
            buttonType: 'submit',
            formType: 'json',
            nameLabel: 'Submit Json',
            onClickFunction: this.submitForm,
          },
        ],
      }
      ]
    }
    return (
      <div>
        <h1 className="text-center text-uppercase my-4">Employee Registration</h1>
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
