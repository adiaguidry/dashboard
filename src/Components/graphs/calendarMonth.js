import React from "react";

const CalendarMonth = () => {
  return (
    <div className="month col-md-6 ">
      <div className="week week1">
        <div className="day"></div>
        <div className="day"></div>
        <div className="day hitGoal"></div>
        <div className="day"></div>
      </div>
      <div className="week">
        <div className="day hitGoal"></div>
        <div className="day hitGoal"></div>
        <div className="day"></div>
        <div className="day hitGoal"></div>
        <div className="day hitGoal"></div>
        <div className="day"></div>
        <div className="day"></div>
      </div>
      <div className="week">
        <div className="day"></div>
        <div className="day"></div>
        <div className="day hitGoal"></div>
        <div className="day"></div>
        <div className="day"></div>
        <div className="day hitGoal"></div>
        <div className="day"></div>
      </div>
      <div className="week">
        <div className="day"></div>
        <div className="day hitGoal"></div>
        <div className="day hitGoal"></div>
        <div className="day"></div>
        <div className="day hitGoal"></div>
        <div className="day"></div>
        <div className="day"></div>
      </div>
      <div className="week">
        <div className="day"></div>
        <div className="day"></div>
        <div className="day hitGoal"></div>
        <div className="day"></div>
        <div className="day hitGoal"></div>
        <div className="day hitGoal"></div>
      </div>
    </div>
  );
};

export default CalendarMonth;
