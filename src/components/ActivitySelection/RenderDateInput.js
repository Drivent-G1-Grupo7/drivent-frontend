export default function RenderDateInput({ id, weekday, date, setSelectedDate, dates }) {
  function handleClick(id, selectedDate) {
    const selectedDateActivities = dates.filter((date) => date.date === selectedDate);
    setSelectedDate(selectedDateActivities);
  }
  return (
    <label htmlFor={id} onClick={() => handleClick(id, date)}>
      <input type="radio" id={id} name="date" />
      <span>
        {weekday}, {date}
      </span>
    </label>
  );
}
