import { useState } from 'react';

import { IUpdateUser, User } from "../../../../models"

interface IInfoProps {
  user: User
  logOut: () => void
  updateProfile: (newFields: IUpdateUser) => void
}

export const Info = ({
  user,
  logOut,
  updateProfile
}: IInfoProps) => {

  const [email, setEmail] = useState(user.email)
  const [name, setName] = useState(user.name)

  function handleSubmit() {
    const newFields: IUpdateUser = {
      id: user.id,
      email: email,
      fullName: name,
    }
    updateProfile(newFields)
  }

  return (
    <>
      <div className="profile-section">
        <h3>My Profile</h3>
        <div>
          <img src={user.avatar} />
        </div>
      </div>
      <form>
        <div>
          <h5>Email Address *</h5>
          <input value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <h5>Full Name *</h5>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <h5>Role *</h5>
          <input disabled={true} value={user.role}/>
        </div>
        <div>
          <h5>Created at*</h5>
          <input disabled={true} value={user.creationAt}/>
        </div>
      </form>
      <div>
        <button className="main-button"  onClick={() => handleSubmit()}>Update Profile</button>
        <button className="logout-button" onClick={() => logOut()}>Log Out</button>
      </div>
    </>
  )
}