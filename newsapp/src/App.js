import React,{Component} from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  apikey = process.env.REACT_APP_API_KEY
  state = {
    progress:10
  }

  setProgress(progress){
    this.setState({progress:progress})
  }
  render() {
    return (
    
    <div>
     <Router>
     <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
      <Navbar />
      <Routes>
      <Route index element={< News setProgress={this.setProgress} apikey = {this.apikey}
 key="general" pagesize={5} category="general"/>} /> 
      <Route exact path="/entertainment" element={< News setProgress={this.setProgress} apikey = {this.apikey}
 key="entertainment" pagesize={5} category="entertainment"/>} />
      <Route exact path="/business" element={< News setProgress={this.setProgress} apikey = {this.apikey}
 key="business" pagesize={5} category="business"/>} />
      <Route exact path="/sports" element={< News setProgress={this.setProgress} apikey = {this.apikey}
 key="sports" pagesize={5} category="sports"/>} />
      </Routes>
      </Router> 
    </div>
    
  );
}
}

export default App;
