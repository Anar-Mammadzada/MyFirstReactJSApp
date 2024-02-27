import React from 'react';

const UserCard = (props) =>{
    return(
        <div className='ui Card'>
            <div className='content'>
                <div className='header'>
                    Anar Mammadzada
                </div>
                <div className='description'>
                    {props.children}
                </div>
            </div>
            <div className='ui bottom button'>
                    <i className='add icon'></i>
                    Add Friend
                    
            </div>
        </div>
    )
}


export default UserCard;