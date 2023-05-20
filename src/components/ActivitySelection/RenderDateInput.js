export default function RenderDateInput({ id, weekday, date }) {
  return (
    <label htmlFor={id}>
      <input type='radio' id={id} name='date'/>
      <span>{weekday}, {date}</span>
    </label>
  );
}
