import { useEffect, useState } from 'react';
import { ActivityDateDiv } from './ActivityDateDiv';
import { RadioInputDiv } from './RadioInputDiv';
import RenderDateInput from './RenderDateInput';
import ActivityOptions from './ActivityOptions';
import useGetActivities from '../../hooks/api/useGetActivity';

const mockDates = [
  {
    id: 1,
    date: '22/10',
    weekday: 'Sexta',
  },
  {
    id: 2,
    date: '23/10',
    weekday: 'Sábado',
  },
  {
    id: 3,
    date: '24/10',
    weekday: 'Domingo',
  },
];

export default function ActivitySelection() {
  const [dates, setDates] = useState(mockDates);
  const [selectedDate, setSelectedDate] = useState([]);
  const { getActivities } = useGetActivities();

  useEffect(() => {
    const fetchData = async() => {
      try {
        const activityData = await getActivities();
        setDates(activityData);
      } catch (error) {}
    };
    fetchData();
  }, []);
  // A variavel dates é um array de objetos, e cada objeto tem as propriedades date e weekday iguais em mais de um objeto.
  // A função abaixo filtra o array de objetos e retorna um array de objetos com as propriedades date e weekday únicas.
  // O array de objetos retornado é usado para renderizar os inputs de radio.
  const uniqueDates = dates.filter((date, index, self) => index === self.findIndex((t) => t.date === date.date));

  // A variavel dates é um array de objetos, e cada objeto tem as propriedades date e weekday iguais em mais de um objeto.
  // Quero criar uma funcao que verifique a propriedade date de cada objeto e retorne um array de objetos com a propriedade date igual a data selecionada.
  // A funcao abaixo retorna um array de objetos com a propriedade date igual a data selecionada.
  // const selectedDateActivities = dates.filter((date) => date.date === selectedDate);

  return (
    <ActivityDateDiv>
      <h2>Primeiro, filtre pelo dia do evento: </h2>
      <RadioInputDiv>
        {uniqueDates.map((dateinfo) => (
          <RenderDateInput
            key={dateinfo.id}
            id={dateinfo.id}
            weekday={dateinfo.weekday}
            date={dateinfo.date}
            dates={dates}
            setSelectedDate={setSelectedDate}
          />
        ))}
      </RadioInputDiv>
      {selectedDate.length > 0 && <ActivityOptions selectedDate={selectedDate} />}
    </ActivityDateDiv>
  );
}
