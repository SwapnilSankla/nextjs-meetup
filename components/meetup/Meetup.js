import { useRouter } from 'next/router'
import React from 'react'

const Meetup = (props) => {
  const router = useRouter()
  const showDetailsHandler = () => {
    router.push(`/${props.id}`)
  }  

  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.address}</p>
        <p><img height="40%" width="50%" alt="" src={props.image} /></p>
        <button onClick={showDetailsHandler}>Show details</button>
    </div>
  )
}

export default Meetup