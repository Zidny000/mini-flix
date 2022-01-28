import "./app.scss";
import Home from "./user/pages/home/Home";
import Register from "./user/pages/register/Register";
import Watch from "./user/pages/watch/Watch";
import Login from "./user/pages/login/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./user/authContext/AuthContext";

//Admin

import Sidebar from "./admin/components/sidebar/Sidebar";
import Topbar from "./admin/components/topbar/Topbar";
import AdminHome from "./admin/pages/home/Home";
import AdminNewUser from "./admin/pages/newUser/NewUser";
import AdminListList from "./admin/pages/listList/ListList";
import AdminList from "./admin/pages/list/List";
import AdminNewList from "./admin/pages/newList/NewList";
import AdminMovieList from "./admin/pages/movieList/MovieList";
import { Movie } from "@material-ui/icons";
import AdminNewMovie from "./admin/pages/newMovie/NewMovie";

const App = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        {
           user ? user.isAdmin ?<Redirect to="/admin" /> : <Home /> : <Redirect to="/register" />       
        }
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
           
            {user.isAdmin && (
              <>
            
              <Route exact path="/admin">
                <AdminHome />
              </Route>
              {/* <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route> */}
              <Route path="/newUser">
                <AdminNewUser />
              </Route>
              <Route path="/adminmovies">
                <AdminMovieList />
                
              </Route>
              {/* <Route path="/movie/:movieId">
                <AdminMovie />
              </Route> */}
              <Route path="/newMovie">
                <AdminNewMovie />
              </Route>
              <Route path="/lists">
                <AdminListList />
              </Route>
              <Route path="/list/:listId">
                <AdminList />
              </Route>
              <Route path="/newlist">
                <AdminNewList />
              </Route>
              
              </>
            )}
          </>
        )}

        
        <Route path="*">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
