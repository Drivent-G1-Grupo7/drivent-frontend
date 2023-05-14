import { IconBox, RoomOptionWrapper, StyledIcon } from './RoomOptionWrapper';

export function RoomOptions({ room }) {
  return (
    <RoomOptionWrapper>
      <div>
        <label htmlFor="room">{room.name}</label>
        <CapacityDisplay room = { room }/>
      </div>
    </RoomOptionWrapper>
  );
}

function CapacityDisplay({ room }) {
  const capacityIcons = [];
  for (let i = 0; i < room.capacity; i++) {
    capacityIcons.push(
      <StyledIcon key={i} icon="material-symbols:person-outline" />
    );
  }
  return <IconBox>{capacityIcons}</IconBox>;
}
