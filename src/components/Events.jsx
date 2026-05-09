import React from "react";
import "./Events.css";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Rolta Meeting",
      date: "December 15, 2024",
      description:
        "Huge discounts on all electrical items and fixtures. Up to 50% off on selected products. Visit our store and upgrade your home with the latest solutions.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
    },
    {
      id: 2,
      title: "Plumbing Workshop",
      date: "December 20, 2024",
      description:
        "Join our free workshop and learn basic plumbing repairs and maintenance techniques from professionals.",
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800",
    },
    {
      id: 3,
      title: "Smart Product Launch",
      date: "January 5, 2025",
      description:
        "Discover our new range of smart home automation products designed for energy efficiency and modern living.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?w=800",
    },
  ];

  return (
    <section className="events-section">
      <div className="events-container">

        {/* MAIN HEADING */}
        <h2 className="section-title">Events & Activities</h2>

        {/* EVENTS */}
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`event-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            {/* TEXT */}
            <div className="event-text">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-desc">{event.description}</p>
            </div>

            {/* IMAGE */}
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Events;