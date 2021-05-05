import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage () {
  async function addMeetupHandler(data) {
    console.log(`data`, data);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const resp = await response.json();

    console.log(`resp`, resp);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};
