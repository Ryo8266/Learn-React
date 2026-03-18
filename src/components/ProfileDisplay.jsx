import React, { useContext } from 'react'
import { UserContext } from '../contexts/userInfor'

export default function ProfileDisplay() {
  const { user } = useContext(UserContext)

  return (
    <div>
      <h4>Profile:</h4>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  )
}
