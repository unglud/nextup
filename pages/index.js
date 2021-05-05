import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image: "https://source.unsplash.com/random",
    address: "some address",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "https://source.unsplash.com/random",
    address: "some address 2",
  },
];

export default function Home(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

export async function getStaticProps () {
  return {
    props: {
      meetups:DUMMY_MEETUPS
    },
    revalidate: 10
  }
}
