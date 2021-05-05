import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  function addMeetupHandler(data) {
    console.log(`data`, data);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
