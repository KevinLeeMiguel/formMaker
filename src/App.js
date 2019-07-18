import React from 'react';
import logo from './logo.svg';
import FormMaker from './formMaker';
import './App.css';
import './styles/bootstrap.css';

function App() {
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
      handleData: handleData,
    },
    {
      type: 'select',
      name: 'choice',
      inputLabel: "Gender",
      extras: {
        options: options
      }
    },
    {
      type: 'checkboxes',
      name: 'rm',
      checkboxesLabel: "Languages:",
      checkboxes: [
        {
          inputLabel: "Java",
        },
        {
          inputLabel: "Javascript",
        },
        {
          inputLabel: "Python",
        }
      ]
    },
    {
      type: 'radios',
      name: 'choice',
      radiosLabel: 'Are you good: ',
      radios: [
        {
          inputLabel: "Yes",
        },
        {
          inputLabel: "No",
        }
      ]
    }


    ]
  }
  var datas = [];

  function handleData(name, value){
    var d = {
      name: name,
      value: value
    }
    datas.push(d);
    console.log(datas);
  }
  return (
    <div className="col-md-10 offset-1">
      <FormMaker fields={data} />
    </div>
  );
}

export default App;
