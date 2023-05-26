import {
  ActivityDateWrapper,
  ActivityOptionsBox,
  ActivityOptionsCard,
  ActivityOptionsCardTitle,
  ActivityOptionsContainer1,
  ActivityOptionsContainer2,
  ActivityOptionsContainer3,
  ActivityOptionsContentWrapper,
  verticalLine,
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
    endTime: '11:00',
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
        <ActivityOptionsContent activity={activity} />
      ))}
      {sideRoomActivities.map((activity) => (
        <ActivityOptionsContent activity={activity} />
      ))}
      {workshopRoomActivities.map((activity) => (
        <ActivityOptionsContent activity={activity} />
      ))}
    </ActivityOptionsContentWrapper>
  );
}

function ActivityOptionsContent({ activity }) {
  const { name, startTime, endTime } = activity;
  const startTimeNumber = Number(startTime.slice(0, 2).replace(/^0+/, ''));
  const endTimeNumber = Number(endTime.slice(0, 2).replace(/^0+/, ''));

  const activityDuration = endTimeNumber - startTimeNumber;
  let cardSize = '79px';

  if (activityDuration !== 1) {
    const result = activityDuration * 79 + 10;
    cardSize = `${result}px`;
  }

  return (
    <ActivityOptionsBox>
      <ActivityOptionsCard cardSize={cardSize}>
        <ActivityOptionsContainer1>
          <ActivityOptionsCardTitle>
            <h3>{name}</h3>
          </ActivityOptionsCardTitle>
          <ActivityDateWrapper>
            <p>{startTime + ' - '}</p>
            <p>{endTime}</p>
          </ActivityDateWrapper>
        </ActivityOptionsContainer1>
        <verticalLine>ola</verticalLine>
        <ActivityOptionsContainer3><p>27 vagas</p></ActivityOptionsContainer3>
      </ActivityOptionsCard>
    </ActivityOptionsBox>
  );
}
