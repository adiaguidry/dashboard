import React, { useState, useEffect } from "react";
import CalendarFiller from "./calendarFiller";

const Calendar = () => {
  console.log();
  return (
    <div className="calendar-container">
      <CalendarFiller noKetoDay="#45f46f" ketoDay="#81a8ff" />
    </div>
  );
};

export default Calendar;
