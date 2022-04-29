import { useRouter } from 'next/router'
import React from 'react'
import AddMeetup from '../components/AddMeetup/AddMeetup'

const AddNewMeetup = () => {
    const router = useRouter()
    const newMeetupHandler = async (newMeetup) => {
        const response = await fetch('/api/add-new-meetup', {
            method: 'POST',
            body: JSON.stringify(newMeetup),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        router.push('/')
    }

    return (
        <AddMeetup newMeetupHandler={newMeetupHandler} />
    )
}

export default AddNewMeetup