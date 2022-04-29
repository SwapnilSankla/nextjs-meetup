import {saveMeetup} from "../../utils/mongo";

async function handler(req, res) {
    if (req.method === 'POST') {
        await saveMeetup(req.body)
        res.status(201).end()
    }
}

export default handler;