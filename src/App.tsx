import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile"
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props: any) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.appState.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile state={props.appState.profilePage} addPost={props.addPost}/>}/>
                    <Route path='/news' render={() => "News"}/>
                    <Route path='/music' render={() => "Music"}/>
                    <Route path='/settings' render={() => "Settings"}/>
                </div>
            </div>
    )
        ;
}


export default App;