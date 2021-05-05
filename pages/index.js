import MeetupList from "../components/meetups/MeetupList";
import MongoClient from "mongodb";

export default function Home(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGODB_HOST);

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map(({ _id, title, address, image }) =>({
        title, address, image, id: _id.toString()
      }))
    },
    revalidate: 10,
  };
}
