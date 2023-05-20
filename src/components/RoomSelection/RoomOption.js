import { CapacityDisplayWrapper, IconBox, RoomOptionWrapper, StyledIcon } from './RoomOptionWrapper';
import { YELLOW, RED } from './Utils/colors';

export function RoomOptions({ room, selectedRooms, setSelectedRooms, isAvailable }) {
  function handleSelectedRoom(roomId) {
    setSelectedRooms([roomId]);
  }

  return (
    <RoomOptionWrapper
      onClick={() => handleSelectedRoom(room.id)}
      color={selectedRooms.includes(room.id) ? YELLOW : null}
      id={room.id}
      name="room"
      value={room.name}
      disabled={!isAvailable}
    >
      <label htmlFor="room">{room.name}</label>
      <CapacityDisplayWrapper>
        <CapacityDisplay room={room} selectedRooms={selectedRooms} />
      </CapacityDisplayWrapper>
    </RoomOptionWrapper>
  );
}

function CapacityDisplay({ room, selectedRooms }) {
  const capacityIcons = [];

  if (selectedRooms.includes(room.id)) {
    for (let i = 1; i < room.capacity; i++) {
      capacityIcons.push(<StyledIcon key={i} icon="material-symbols:person-outline" />);
    }
    capacityIcons.push(<StyledIcon key={room.id} icon="material-symbols:person" color={RED} />);
  } else {
    for (let i = 0; i < room.capacity; i++) {
      capacityIcons.push(<StyledIcon key={i} icon="material-symbols:person-outline" />);
    }
  }
  return <IconBox>{capacityIcons}</IconBox>;
}
