import { Button, useAuthenticator } from '@aws-amplify/ui-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const { user, signOut } = useAuthenticator()
  return (
    <div className='bg-[#1a1a1a] w-full flex items-center justify-between p-8 rounded-2xl'>
        <Link style={{color: "white"}} to={"/"} className={"text-white"}>Home</Link>
        <div className='flex flex-row items-center justify-center gap-2'>
            <p>{user.signInDetails?.loginId}</p>
            <button onClick={signOut} style={{color: "white", borderWidth: 2}}>Log out</button>
        </div>
    </div>
  )
}

export default Header