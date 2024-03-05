import React, { useContext } from 'react'
import myContext from '../store/storeContext'

export default function Home() {
    const data=useContext(myContext)
  return (
    <div>
      {data.title}
    </div>
  )
}
