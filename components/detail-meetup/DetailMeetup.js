import { useRouter } from 'next/router'
import React from 'react'
import styles from './DetailMeetup.module.css'

const DetailMeetup = (props) => {
  const router = useRouter()

  const closeDetailedMeetup = () => {
    router.push('/')
  }

  return (
    <div className={styles.detailMeetup}>
      <h2>{props.title}</h2>
      <p>{props.address}</p>
      <p>{props.description}</p>
      <p><img height="50%" width="65%" alt="" src={props.image} /></p>
      <button onClick={closeDetailedMeetup}>back</button>
    </div>
  )
}

export default DetailMeetup