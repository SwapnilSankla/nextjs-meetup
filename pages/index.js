import Meetups from '../components/meetups/Meetups'
import { getAllMeetups } from '../utils/mongo'

export default function Home(props) {
  return (
    <div>
      <Meetups meetups={props.meetups} />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      meetups: await getAllMeetups()
    },
    revalidate: 1
  }
}

