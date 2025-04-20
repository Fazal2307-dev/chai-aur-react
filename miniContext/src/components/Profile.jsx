import React from "React"
import UserContext from "../Context/UserContext"
import { useContext } from "React"

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return <div>Please Login</div>
  return (
    <div>
      welcome{user.username}
    </div>
  )
}

export default Profile
