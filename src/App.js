import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import logo from './logo.svg';
import { voteAngular, voteReact, voteVueJs } from './actions'
import './App.css';
import 'tachyons';


class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVueJs = () => {
    this.store.dispatch(voteVueJs());
  }

  render() {
    return(
    <div>
      <div className= 'jumbotron pointer' style={{'textAlign': 'center'}}>
        <img src= 'http://newsexpressngr.com/images/news/PVCs_photo.jpg' height='96' alt='PErmanent voters Card'></img>
        <h2>Nigeria Parties Poll 2019?</h2>
        <h4>Click on the Parties below to vote!</h4><br/>
          <div className='row' tc ma6>
          <div className="col-xs-offset-3 col-xs-2">
            <img className= 'grow' src= 'https://pbs.twimg.com/media/D2F_OgxXQAYjZC8.jpg' height= '96' alt= 'Angular' onClick={this.handleVoteAngular}/>
            </div>
            <div className="col-xs-2">
              <img className= 'grow' src='https://www.von.gov.ng/wp-content/uploads/2018/05/apc-vb-1.png' height="96" alt="React" onClick={this.handleVoteReact}/>
            </div>
            <div className="col-xs-2">
              <img className= 'grow' src="https://hdtv5zdsx37feh5z-zippykid.netdna-ssl.com/wp-content/uploads/2017/08/Accord-Party-logo.jpg" height="96" alt="Vue.js" onClick={this.handleVoteVueJs}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default App;
