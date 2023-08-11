// import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'

function UserDetails() {
  return (
    <>
    <div className="content">
        <div className="admin-portal">
            <div className="admin-subtitle">
                List of User Details
            </div>
            <button>Add New User</button>
        </div>
        <ul>
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
