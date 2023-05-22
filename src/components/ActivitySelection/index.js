import { useState } from 'react';
import { ActivityDateDiv } from './ActivityDateDiv';
import { RadioInputDiv } from './RadioInputDiv';
import RenderDateInput from './RenderDateInput';

const mockDates = [
  {
    id: 1,
    date: '22/10',
    weekday: 'Sexta'
  },
  {
    id: 2,
    date: '23/10',
    weekday: 'Sábado'
  },
  {
    id: 3,
    date: '24/10',
    weekday: 'Domingo'
  }
];

export default function ActivitySelection() {
  const [dates, setDates] = useState(mockDates);
  return (
    <ActivityDateDiv>
      <h2>Primeiro, filtre pelo dia do evento: </h2>
      <RadioInputDiv>
        {dates.map((dateinfo) => (
          <RenderDateInput
            key={dateinfo.id}
            id={dateinfo.id}
            weekday={dateinfo.weekday}
            date={dateinfo.date}
          />
        ))}
      </RadioInputDiv>
    </ActivityDateDiv>
  );
}