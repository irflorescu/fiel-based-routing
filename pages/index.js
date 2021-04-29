import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1 className="center" style={{ margin: '2rem auto', fontFamily: 'Raleway, sans-serif' }}>
        Featured events
      </h1>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
