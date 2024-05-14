import { useMemo, useRef } from "react";

export default function ComputeIntensive() {
  function memo() {
    ComputeIntensive();
  }
  //const OurResults = useMemo(memo, []);
  const todoList = [
    { name: "Grocery shopping for the week" },
    { name: "Attend a dentist appointment for a routine checkup" },
    { name: "Pay monthly bills, such as rent, utilities, and internet" },
    { name: "Schedule a workout session or go for a run" },
    { name: "Clean and organize the house or apartment" },
    { name: "Meal prep for the upcoming week" },
    { name: "Attend a work-related meeting" },
    { name: "Catch up on emails" },
    { name: "Visit the gym" },
    { name: "Read a chapter" },
  ];

  function ComputeIntensive() {
    const now = performance.now();
    while (performance.now() - now < 4000) {
      //spin()
    }
  }

  return (
    <>
      <h4>Todo List</h4>
      <ul>
        <li>todo item 1</li>
        {/* {filteredToDoList.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))} */}
      </ul>
    </>
  );
}
