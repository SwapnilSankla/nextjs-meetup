import { MongoClient, ObjectId } from "mongodb"

export const getAllMeetups = async () => {
    const client = await MongoClient.connect('mongodb://mongo:mongo@localhost:27017/meetup?authSource=admin')
    const meetupDb = client.db()
    const meetupCollection = meetupDb.collection('meetup')

    const data = await meetupCollection.find().toArray()
    await client.close()
    return data.map(element => {
        return {
            title: element.title,
            address: element.address,
            image: element.image,
            description: element.description,
            id: element._id.toString()
        }
    })
}

export const getMeetup = async (meetupId) => {
    const client = await MongoClient.connect('mongodb://mongo:mongo@localhost:27017/meetup?authSource=admin')
    const meetupDb = client.db()
    const meetupCollection = meetupDb.collection('meetup')

    const meetup = await meetupCollection.findOne({ '_id': ObjectId(meetupId) })
    await client.close()
    return {
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString()
    }
}

export const saveMeetup = async (meetup) => {
    const data = meetup
    const client = await MongoClient.connect('mongodb://mongo:mongo@localhost:27017/meetup?authSource=admin')
    const meetupDb = client.db()
    const meetupCollection = meetupDb.collection('meetup')
    const result = await meetupCollection.insertOne(data)
}
