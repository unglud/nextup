import MeetupList from "../components/meetups/MeetupList";
import MongoClient from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGODB_HOST);

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map(({ _id, title, address, image }) => ({
        title,
        address,
        image,
        id: _id.toString(),
      })),
    },
    revalidate: 10,
  };
}
