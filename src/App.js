import React from 'react';
import logo from './logo.svg';
import FormMaker from './formMaker';
import './App.css';
import './styles/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      names: '',
      rm: '',
      choice: '',
      choices: ''

    }
  }


  handleData = (name, value) => {
    switch (name) {
      case "names":
        this.setState({
          names: value
        });

        break;

      case "choice":
        this.setState({
          choice: value
        });

        break;

      case "choices":
        this.setState({
          choices: value
        });

        break;
      case "rm":
        this.setState({
          rm: value
        });

        break;

      default:
        break;
    }

    // console.log(this.state.names);
    // console.log(this.state.choices);
    // console.log(this.state.choice);
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
    return (
      <div className="col-md-10 offset-1">
        <FormMaker fields={data} />
      </div>
    );
  }
}

export default App;
