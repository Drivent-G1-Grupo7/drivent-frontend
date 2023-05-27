import { useState } from 'react';
import {
  ActivityDateWrapper,
  ActivityOptionsBox,
  ActivityOptionsCard,
  ActivityOptionsCardTitle,
  ActivityOptionsContainer1,
  ActivityOptionsContainer2,
  EnterEventContainer,
  ActivityOptionsContentWrapper,
  StyledIcon,
  MainRoomActivitiesContainer,
  SideRoomActivitiesContainer,
  WorkshopRoomActivitiesContainer,
} from './ActivityOptionsWrapper';

export default function ActivityOptionsEvents({ selectedDate }) {
  const mainRoomActivities = selectedDate.filter((activity) => activity.location === 'Auditorio Principal');

  const sideRoomActivities = selectedDate.filter((activity) => activity.location === 'Auditorio Lateral');

  const workshopRoomActivities = selectedDate.filter((activity) => activity.location === 'Sala de Workshop');

  return (
    <ActivityOptionsContentWrapper>
      <MainRoomActivitiesContainer>
        {mainRoomActivities.map((activity) => (
          <ActivityOptionsContent activity={activity} />
        ))}
      </MainRoomActivitiesContainer>
      <SideRoomActivitiesContainer>
        {sideRoomActivities.map((activity) => (
          <ActivityOptionsContent activity={activity} />
        ))}
      </SideRoomActivitiesContainer>
      <WorkshopRoomActivitiesContainer>
        {workshopRoomActivities.map((activity) => (
          <ActivityOptionsContent activity={activity} />
        ))}
      </WorkshopRoomActivitiesContainer>
    </ActivityOptionsContentWrapper>
  );
}

function ActivityOptionsContent({ activity }) {
  const { name, startTime, endTime, totalSpots } = activity;
  const startTimeNumber = Number(startTime.slice(0, 2).replace(/^0+/, ''));
  const endTimeNumber = Number(endTime.slice(0, 2).replace(/^0+/, ''));
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribedActivities, setSubscribedActivities] = useState([]);

  const activityDuration = endTimeNumber - startTimeNumber;
  let cardSize = '79px';

  if (activityDuration !== 1) {
    const result = activityDuration * 79 + 10;
    cardSize = `${result}px`;
  }

  function handleClicktoSubcribe(activity) {
    if (subscribedActivities.includes(activity)) {
      setIsSubscribed(false);
      const newSubscribedActivities = subscribedActivities.filter(
        (lastSelectedActivity) => lastSelectedActivity.id !== activity.id
      );
      setSubscribedActivities(newSubscribedActivities);
    } else {
      setIsSubscribed(true);
      setSubscribedActivities([...subscribedActivities, activity]);
    }
  }

  return (
    <ActivityOptionsBox>
      <ActivityOptionsCard
        onClick={() => handleClicktoSubcribe(activity)}
        cardSize={cardSize}
        isSubscribed={isSubscribed}
        disabled={totalSpots === 0}
      >
        <ActivityOptionsContainer1>
          <ActivityOptionsCardTitle>
            <h3>{name}</h3>
          </ActivityOptionsCardTitle>
          <ActivityDateWrapper>
            <p>{startTime + ' - '}</p>
            <p>{endTime}</p>
          </ActivityDateWrapper>
        </ActivityOptionsContainer1>
        <ActivityOptionsContainer2 isSubscribed={isSubscribed}>
          <EnterEvent totalSpots={totalSpots} isSubscribed={isSubscribed} />
        </ActivityOptionsContainer2>
      </ActivityOptionsCard>
    </ActivityOptionsBox>
  );
}

function EnterEvent({ totalSpots, isSubscribed }) {
  return (
    <>
      {totalSpots === 0 ? (
        <EnterEventContainer totalSpots={totalSpots}>
          <StyledIcon icon="zondicons:close-outline" color="#cc6666" />
          <p>Esgotado</p>
        </EnterEventContainer>
      ) : isSubscribed ? (
        <EnterEventContainer totalSpots={totalSpots}>
          <StyledIcon icon="gg:check-o" color="#078632" />
          <p>Inscrito</p>
        </EnterEventContainer>
      ) : (
        <EnterEventContainer totalSpots={totalSpots}>
          <StyledIcon icon="pepicons-pop:enter" color="#078632" />
          <p>{totalSpots} vagas</p>
        </EnterEventContainer>
      )}
    </>
  );
}
