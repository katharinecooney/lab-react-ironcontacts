import React from 'react';

class Contacts extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contacts: props.contacts.slice(0,5)
    }
  }

  render() {

    return(

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th> 
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
          {
          this.state.contacts.map( (actor) => {
              return (
                <tr>
                  <td><img src={actor.pictureUrl} alt=""/></td>
                  <td>{actor.name}</td>
                  <td>{actor.popularity}</td>
                </tr>
              ); 
            })
          }
          </tbody>
        </table>
    );
  }
}

// we export the Contacts constructor to use in App.js
export default Contacts;

