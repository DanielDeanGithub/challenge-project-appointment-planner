import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  name,
  setName,
  date,
  setDate,
  time,
  setTime,
  contact,
  setContact,
  contacts,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <ContactPicker 
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)} 
        value={contact}
        name={contact}
      />
      <input type="submit" />
    </form>
  );
};
