import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: "Hi, How are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 10},
]

let dialogsData = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"},
]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "I'm fine"},
    {id: 4, message: "Thanks"},
    {id: 5, message: "Not at all"},
    {id: 6, message: "Very well"},
]

ReactDOM.render(<App dialogsData={dialogsData} messages={messages} posts={posts}/>, document.getElementById('root'));