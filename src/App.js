import React from 'react';
import logo from './logo.svg';
import FormMaker from './formMaker';
import './App.css';

function App() {
  var options = [{
    value: "no",
    text: "No"
  },
  {
    value: "yes",
    text: "Yeah"
  }
  ]


  var data = {
    fields: [{
      type: 'input',
      name: 'kene'
    },
    {
      type: 'select',
      name: 'choice',
      extras: {
        options: options
      }
    }
    ]
  }

  return (
    <FormMaker fields={data} />
  );
}

export default App;
