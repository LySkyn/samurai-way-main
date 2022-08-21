import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://seeklogo.com/images/C/company-name-logo-09881CAD1A-seeklogo.com.png'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src='https://cdn.thecrazytourist.com/wp-content/uploads/2019/02/ccimage-shutterstock_519559345.jpg'/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;