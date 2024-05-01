import React, {useEffect} from "react";
import './App.scss';
import Home from "../components/Pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "../components/Pages/Login";
import {ThemeContext, themes} from "../api/Theme";
import musicDB from "../db/music";
import {useDispatch, useSelector} from "react-redux";
import {setPlaylist} from "../actions/actions";
import Signin from '../components/Pages/Signin';
import Signup from '../components/Pages/Signup';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const App = () => {

    const handle = useFullScreenHandle();

    const {language} = useSelector(state => state.musicReducer);

    const dispatch = useDispatch();
    useEffect(()=>{
        if (language === null || language.includes("any")){
            dispatch(setPlaylist(musicDB))
        }
        else if (language.includes('hindi')){
            alert("No hindi tracks available")
        } else {
            let x = musicDB.filter((item)=>(
                item.lang && language.includes(item.lang.toLowerCase())
            ))
            dispatch(setPlaylist(x))
        }
    },[dispatch, language]);

    return (
        <ThemeContext.Provider value={themes.dark}>
            <>
            <FullScreen handle={handle}>
            <button onClick={handle.enter}>Go full screen</button>
            <button onClick={handle.exit}>Exit full screen</button>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/home" component={Home}/>
                        <Route path='/Signin'component={Signin}/> 
                        <Route path="/Signup" component={Signup}/>
                    </Switch>
                </Router>
                </FullScreen>
            </>
        </ThemeContext.Provider>
    );
}

export default App;