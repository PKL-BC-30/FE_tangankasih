import { createSignal } from 'solid-js';
import './blog.css';
import blog1 from './pages-img/blog-1.png';
import blog2 from './pages-img/blog-2.png';
import blog3 from './pages-img/blog-3.png';
import blog4 from './pages-img/blog-4.png';
import blogbg from './pages-img/blog-bg.png';

function App() {
  const [selectedEvent, setSelectedEvent] = createSignal<number | null>(null);
  
  const events = [
    {
      id: 1,
      date: '18 June',
      title: 'NMB Marathon',
      description:
        'Organized where participants can donate a certain amount of money to participate, and all proceeds go towards the purchase of digital devices.',
      image: blog1,
      organizer: 'NMB',
    },
    {
      id: 2,
      date: '21 June',
      title: 'Social Media Campaign',
      description:
        'Launched to raise awareness about the cause and encourage people to donate towards the purchase of digital devices.',
      image: blog2,
      organizer: 'Nattasha',
    },
    {
      id: 3,
      date: '28 June',
      title: 'Benefit Concert',
      description:
        'Concert featuring local artists and musicians can be organized where the proceeds from ticket sales go towards the purchase of digital devices.',
      image: blog3,
      organizer: 'Nattasha',
    },
    {
      id: 4,
      date: '09 July',
      title: 'Virtual Talent Show',
      description:
        'Organized where participants can donate a certain amount of money to participate, and all proceeds go towards the purchase of digital devices',
      image: blog4,
      organizer: 'Nattasha',
    },
  ];

  return (
    <div class="container">
      <main>
        <section class="hero">
          <div class="hero-content">
            <h2>Donation</h2>
            <h1>Fund Raising</h1>
          </div>
          <div class="hero-image">
            <img src={blogbg} alt="Coins" />
          </div>
        </section>
        <section class="events">
          <h2>Upcoming Events</h2>
          <div class="events-grid">
            {events.map((event, index) => (
              <div
                classList={{
                  'event-card': true,
                  selected: selectedEvent() === event.id,
                }}
                onClick={() => setSelectedEvent(event.id)}
              >
                <div class="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div class="event-details">
                  <h3>{event.date}</h3>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div class="organizer">
                    <span>Organized By: </span>
                    <span>{event.organizer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;