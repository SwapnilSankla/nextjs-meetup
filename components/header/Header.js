import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'

const Header = (props) => {

  const addMeetupHandler = () => {
    props.addMeetupHandler()
  }

  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>Next Meetups</h1>
      <div className={styles.container}>
        <Link href='/'>Show Meetups</Link>
        <Link href='/add-new-meetup'>Add Meetup</Link>
      </div>
    </div>
  )
}

export default Header