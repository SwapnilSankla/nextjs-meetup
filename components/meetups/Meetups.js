import Meetup from '../meetup/Meetup'
import styles from './Meetups.module.css'

const Meetups = (props) => {
    return (
        <div className={styles.meetups}>
            <ul>
                {
                    props.meetups.map(meetup => {
                        return <Meetup
                            key={meetup.id}
                            id={meetup.id}
                            title={meetup.title}
                            address={meetup.address}
                            description={meetup.description}
                            image={meetup.image}
                        />
                    })
                }
            </ul>
        </div>
    )
}

export default Meetups