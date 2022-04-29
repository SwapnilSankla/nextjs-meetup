import React from 'react'
import styles from './AddMeetup.module.css'

const AddMeetup = (props) => {
    const newMeetupCreated = (event) => {
        event.preventDefault()
        props.newMeetupHandler({
            'title': event.target[0].value,
            'address': event.target[1].value,
            'description': event.target[2].value,
            'image': event.target[3].value,
        })
    }

    return (
        <div>
            <form className={styles.container} onSubmit={newMeetupCreated}>
                <p><label>Meetup title:</label></p>
                <input className={styles.text}></input>
                <p><label>Meetup address:</label></p>
                <input className={styles.text}></input>
                <p><label>Meetup description:</label></p>
                <input className={styles.text}></input>
                <p><label>Meetup image url:</label></p>
                <input className={styles.text}></input>
                <p><button className={styles.button}>Create</button></p>
            </form>
        </div>
    )
}

export default AddMeetup