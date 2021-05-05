import MeetupDetail from '../components/meetups/MeetupDetail';
import {MongoClient, ObjectId} from 'mongodb';

export default function MeetupDetailsPage (props) {
    return (
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    );
}

export async function getStaticPaths () {
    const client = await MongoClient.connect(process.env.MONGODB_HOST);

    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    client.close();
    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    };
}

export async function getStaticProps (context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(process.env.MONGODB_HOST);

    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetupData = await meetupsCollection.findOne({
        _id: ObjectId(meetupId)
    });

    client.close();
    return {
        props: {
            meetupData: {
                id: meetupData._id.toString(),
                title: meetupData.title,
                address: meetupData.address,
                image: meetupData.image
            }
        }
    }
}
