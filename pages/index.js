import MeetupList from "../components/meetups/MeetupList";

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

export default function Home() {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}
