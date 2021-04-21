import { useRouter } from 'next/router';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import { getEventById } from '../../dummy-data';

function EventDetailPage() {
  const router = useRouter();
  // const eventId = router.query.eventId;
  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <div>
        <h1>Sorry! No event found.</h1>
      </div>
    );
  }

  return (
    // <></> is equivalent to <Fragment><Fragment />
    // the latter requires to import { Fragment } from 'react'
    <>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
