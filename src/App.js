import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignInPage from './pages/sign-in/sign-in-page.component';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SignInPage}/>
      </Switch>
    </div>
   
  );
}

export default App;
