import React, { useState, useEffect } from "react";
import Calendar from "./calendar";

const CalendarFiller = ({ ketoDay, noKetoDay }) => {
  return (
    <ul>
      <li style={{ backgroundColor: ketoDay }}>Mon</li>
      <li style={{ backgroundColor: ketoDay }}>Tue</li>
      <li style={{ backgroundColor: noKetoDay }}>Wed</li>
      <li style={{ backgroundColor: ketoDay }}>Thur</li>
      <li style={{ backgroundColor: noKetoDay }}>Fri</li>
      <li style={{ backgroundColor: noKetoDay }}>Sat</li>
      <li style={{ backgroundColor: ketoDay }}>Sun</li>
    </ul>
  );
};

export default CalendarFiller;
