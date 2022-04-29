import React from 'react'
import DetailMeetup from '../components/detail-meetup/DetailMeetup'
import { getMeetup } from '../utils/mongo'

const MeetupDetails = (props) => {
    return <DetailMeetup
        title={props.title}
        description={props.description}
        image={props.image}
        address={props.address} />
}

export const getStaticPaths = () => {
    return {
        fallback: true,
        paths: []
    }
}

export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId
    const meetup = await getMeetup(meetupId)
    return {
        props: {
            title: meetup.title,
            description: meetup.description,
            image: meetup.image,
            address: meetup.address
        },
        revalidate: 1
    }
}

export default MeetupDetails;