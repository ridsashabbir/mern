// import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'

function UserDetails() {
    const myStyle = {
        marginLeft: '20%',
        fontSize: '2.0rem',
        fontWeight: 'bold'
    }
    const myStyleB = {
        marginLeft: '40%',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        padding: '10px 10px',
        borderRadius: '15px',
        backgroundColor: '#241468',
        color: 'white',
        // marginTop: '10px'
    }
  return (
    <>
    <div className="content">
        <div className="admin-portal">
            <div className="admin-subtitle" style={myStyle}>
                List of User Details
            
            <button className='btn add-btn' style={myStyleB}>Add New User</button>
            </div>
        </div>
        <ul >
            <li>Hi</li>
            <li>Hii</li>
        </ul>
        <hr />
        <DeleteAllUsers/>
    </div>
    </>
  )
}

export default UserDetails
