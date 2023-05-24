export default function RenderDateInput({ id, weekday, date, setSelectedDate }) {
  function handleClick(id, date) {
    setSelectedDate(date);
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
