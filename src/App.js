import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SigninPage from './pages/SigninPage';
import HomePage from './pages/HomePage';
import PrivateRoute from './utils/PrivateRouter';
import SignupPage from './pages/SignupPage';
import UserProfilePage from './pages/UserProfilePage';
import AddUserPage from './pages/AddUserPage'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' exact element={<PrivateRoute/>}></Route>
        <Route exact path='/' element={<HomePage />}>  </Route>
        <Route Component={SigninPage} path='/login'/>
        <Route Component={SignupPage} path='/signup'/>
        <Route Component={UserProfilePage} path='/user-profile'/>
        <Route Component={AddUserPage} path='/add-user'/>
        


        </Routes>
      </Router>

    </div>
  );
}

export default App;
