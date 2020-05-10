import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import './App.css';

// Pages
import Header from './components/Header/Header';
import School from './components/Page/School/School';
import University from './components/Page/University/University';
import IT from './components/Page/IT/IT';

// Variables
import { onTextAreaChangeActionCreator } from './redux/state';

const App = (props) => {
  let textArea = React.createRef();

  let showMsg = () => {
    alert(`${props.state.textForAlert}`);
  };

  let onTextAreaChange = () => {
    props.dispatch(onTextAreaChangeActionCreator(textArea.current.value));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header title="Study-Now" />
        <div className='App-content'>
          <Route path='/School' component={School} />
          <Route path='/University' component={University} />
          <Route path='/IT' component={IT} />
          <textarea ref={textArea} onChange={onTextAreaChange} value={props.state.textForAlert}/>
          <button onClick={showMsg}>Click Me</button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
