import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Register from "./view/Register"
import Home from "./view/home";
import "./App.css";
import "./assets/index.css";
import UserProfile from "./components/UserProfile";
import Login from "./view/login";

function App() {
return(
    <div className="w-full ">
        <Router>
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/users" element={ <Home /> } />
                <Route path="/users/:userID" element={ <UserProfile /> }  />
            </Routes>
        </Router>

    </div>
)

}

export default App;

