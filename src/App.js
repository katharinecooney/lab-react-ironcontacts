import React from 'react';
import './App.css';
import contacts from './data/contacts.json';
import Contacts from './components/Contacts';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
       {/* concats is the prop name that contains all the contacts from contacts.json -- we will pass these contacts to the Contacts component constructor? */}
        <Contacts contacts={contacts}/>
      </div>
    );
  }
}

export default App;
