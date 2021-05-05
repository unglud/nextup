import MeetupDetail from "../components/meetups/MeetupDetail";

export default function MeetupDetailsPage (props) {
    return <MeetupDetail props={props.meetupData}/>;
}

export async function getStaticPaths () {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps (context) {
    const meetupId = context.params.meetupId;

    console.log(`meetupId`, meetupId);

    return {
        props: {
            meetupData: {
                id: "m1",
                title: "First Meetup",
                image: "https://source.unsplash.com/random",
                address: "some address",
            }
        }
    }
}
