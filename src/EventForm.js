import React, { useState } from 'react';

function EventForm({ onAddEvent, selectedDate}) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
//const = constant variable
        if (!selectedDate) {
            alert("Please select a date first.")
            return;
        }
        onAddEvent({ date: selectedDate, name, description});
        setName("");

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type = "text"
                value = {name}
                placeholder = "Event Name"
                onChange = {(e) => setName(e.target.value)}
                required
            ></input>

            <input
                type = "text"
                value = {description}
                placeholder = "Description"
                onChange = {(e) => setDescription(e.target.value)}
                required
            ></input>
            <button type="submit">Add Event</button>
        </form>

    );

}

export default EventForm;