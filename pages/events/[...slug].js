import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-data';

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  // router.query.slug returns a list, so filterData is a list

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = Number(filterData[0]);
  const filteredMonth = Number(filterData[1]);

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth > 12 ||
    filteredMonth < 1
  ) {
    return (
      <div className="center">
        <h1>Invalid date</h1>
        <p>Please use the search form.</p>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="center">
        <h1>Sorry! There are no events for the chosen date</h1>
      </div>
    );
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;
