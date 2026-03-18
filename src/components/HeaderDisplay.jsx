import React, { useContext } from 'react'
import { UserContext } from '../contexts/userInfor'

export default function HeaderDisplay() {
  const { user } = useContext(UserContext)

  return (
    <div>
      <h3>Header: Hello {user.name}</h3>
    </div>
  )
}
