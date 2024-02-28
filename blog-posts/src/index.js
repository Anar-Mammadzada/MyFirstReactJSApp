import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from '../src/SingleComment';
import profile1 from './image/Arunas.jpg';
import profile2 from './image/ayaz.jpg';
import profile3 from './image/Manis.jpg';
import UserCard from './UserCard';

const App = () => {
    return (
        <div className='ui comments'>
            <UserCard>
                <div>
                    Hello, my name is Anar. I live in Baku.
                </div>
            </UserCard>
            <UserCard>
                <SingleComment name='Anar' date='Today at 5:00 PM' text='its amazing' picture={profile1} />
            </UserCard>
            <UserCard>
                <SingleComment name='Ayaz' date='Today at 6:00 AM' text='I am qalosh' picture={profile2} />
            </UserCard>
            <UserCard>
                <SingleComment name='Manis' date='Yesterday at 11:00 PM' text='I am manis kopoyoglu' picture={profile3} />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)