const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhere',
    date: '2021-05-12',
    image: 'images/coding-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description:
      "We know, networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'images/introvert-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Brook City',
    date: '2022-04-10',
    image: 'images/extrovert-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e4',
    title: 'Join the Matrix',
    description: 'The future begins today. Discover the latest and greatest features that will shape tomorrow.',
    location: 'Matrix Street 33, 25078 Future City',
    date: '2021-08-25',
    image: 'images/matrix-event.jpeg',
    isFeatured: true,
  },
  {
    id: 'e5',
    title: 'Advanced coding',
    description:
      "Grow your skills to the next level with this advanced coding lectures. You'll learn great things and make new friends.",
    location: 'Moma Street 5 bis, 34200 Old Burg',
    date: '2022-02-05',
    image: 'images/advanced-event.jpeg',
    isFeatured: false,
  },
  {
    id: 'e6',
    title: 'Become a ninja',
    description: 'You think you know how to code? You think you have nothing more to learn? Think again.',
    location: 'Sunset Boulevard, 10200 Golden City',
    date: '2021-11-30',
    image: 'images/ninja-event.jpeg',
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
