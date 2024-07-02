import React from 'react';

function EventList({ events, selectedDate }) {
    const filteredEvents = events.filter(event => event.date === selectedDate);

    return (
        <div>
            <h3> Events on: {selectedDate} </h3>
            <ul>
                {filteredEvents.map((event, index) =>
                    <li key={index}> {event.name}: {event.description}</li>
                )}
            </ul>

        
        
        </div>
    )
}

export default EventList;