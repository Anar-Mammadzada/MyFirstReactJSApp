import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/Arunas.jpg';
import profile2 from './image/ayaz.jpg';
import profile3 from './image/Manis.jpg'

const App = () => {
    return (
        <div className="ui comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={profile1} alt=''/>
                </a>
                <div className="content">
                <a href="/" className="author">Anar</a>
                <div className="metadata">
                    <span className="date">
                        Today at 5:00 PM
                    </span>
                </div>
                <div className="text">
                    it's amazing
                </div>
                </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img src={profile2} alt=''/>
                </a>
                <div className="content">
                <a href="/" className="author">Ayaz</a>
                <div className="metadata">
                    <span className="date">
                        Today at 5:00 PM
                    </span>
                </div>
                <div className="text">
                    it's amazing
                </div>
                </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img src={profile3} alt=''/>
                </a>
                <div className="content">
                <a href="/" className="author">Manis</a>
                <div className="metadata">
                    <span className="date">
                        Today at 5:00 PM
                    </span>
                </div>
                <div className="text">
                    it's amazing
                </div>
                </div>
            </div>

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)