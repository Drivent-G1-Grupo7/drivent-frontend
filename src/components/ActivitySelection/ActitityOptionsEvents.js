import {
  ActivityOptionsBox,
  ActivityOptionsCard1,
  ActivityOptionsCard2,
  ActivityOptionsContentWrapper,
} from './ActivityOptionsWrapper';

const mockActivity = [
  {
    id: 1,
    name: 'Minecraft: montando o PC ideal',
    startTime: '09:00',
    endTime: '10:00',
    totalSpots: 10,
    location: 'Auditório Principal',
  },
  {
    id: 2,
    name: 'Minecraft: montando o PC ideal',
    startTime: '09:00',
    endTime: '10:00',
    totalSpots: 10,
    location: 'Auditório Lateral',
  },
  {
    id: 3,
    name: 'Minecraft: montando o PC ideal',
    startTime: '09:00',
    endTime: '10:00',
    totalSpots: 10,
    location: 'Sala de Workshop',
  },
];

export default function ActivityOptionsEvents({ selectedDate }) {
  const mainRoomActivities = mockActivity.filter((activity) => activity.location === 'Auditório Principal');
  const sideRoomActivities = mockActivity.filter((activity) => activity.location === 'Auditório Lateral');
  const workshopRoomActivities = mockActivity.filter((activity) => activity.location === 'Sala de Workshop');
  return (
    <ActivityOptionsContentWrapper>
      {mainRoomActivities.map((activity) => (
        <ActivityOptionsBox>
          <ActivityOptionsCard1>
            <h3>{activity.name}</h3>
            <p>{activity.startTime}</p>
            <p>{activity.endTime}</p>
          </ActivityOptionsCard1>
        </ActivityOptionsBox>
      ))}
      {sideRoomActivities.map((activity) => (
        <ActivityOptionsBox>
          <ActivityOptionsCard2>
            <h3>{activity.name}</h3>
            <p>{activity.startTime}</p>
            <p>{activity.endTime}</p>
          </ActivityOptionsCard2>
        </ActivityOptionsBox>
      ))}
      {workshopRoomActivities.map((activity) => (
        <ActivityOptionsBox>
          <ActivityOptionsCard1>
            <h3>{activity.name}</h3>
            <p>{activity.startTime}</p>
            <p>{activity.endTime}</p>
          </ActivityOptionsCard1>
        </ActivityOptionsBox>
      ))}
    </ActivityOptionsContentWrapper>
  );
}
