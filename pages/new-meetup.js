import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useRouter} from 'next/router';



export default function NewMeetupPage () {
  const router = useRouter()
  async function addMeetupHandler(data) {
    console.log(`data`, data);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const resp = await response.json();

    console.log(`resp`, resp);

    router.push('/')
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};
