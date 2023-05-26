import { CapacityDisplayWrapper, IconBox, RoomOptionWrapper, StyledIcon } from './RoomOptionWrapper';
import { YELLOW, RED, BLACK, WHITE } from './Utils/colors';

export function RoomOptions({ room, selectedRooms, setSelectedRooms }) {
  const bookingsCount = 0;

  function handleSelectedRoom(roomId) {
    setSelectedRooms([roomId]);
  }

  return (
    <RoomOptionWrapper
      type='button'
      onClick={() => handleSelectedRoom(room.id)}
      color={selectedRooms.includes(room.id) ? YELLOW : WHITE }
      id={room.id}
      name="room"
      value={room.name}
    >
      <label htmlFor="room">{room.name}</label>
      <CapacityDisplayWrapper>
        <CapacityDisplay
          room={room}
          selectedRooms={selectedRooms}
          bookingsCount={bookingsCount}
        />
      </CapacityDisplayWrapper>
    </RoomOptionWrapper>
  );
}

function CapacityDisplay({ room, selectedRooms, bookingsCount }) {
  const capacityIcons = [];

  if (bookingsCount === room.capacity) {
    for (let i = 0; i < bookingsCount; i++) {
      capacityIcons.push(<StyledIcon key={i} icon="material-symbols:person" color="#9D9D9D" />);
    }
  } else if (selectedRooms.includes(room.id)) {
    let i = 0;
    if (bookingsCount) {
      while (i < bookingsCount) {
        capacityIcons.push(<StyledIcon key={i} icon="material-symbols:person" color={BLACK} />);
        i++;
      }
    }
    capacityIcons.push(<StyledIcon key={i} icon="material-symbols:person" color={RED} />);
    i++;
    while (i < room.capacity) {
      capacityIcons.push(<StyledIcon key={i} icon="material-symbols:person-outline" />);
      i++;
    }
  } else {
    let i = 0;
    if (bookingsCount) {
      while (i < bookingsCount) {
        capacityIcons.push(<StyledIcon key={i} icon="material-symbols:person" color={BLACK} />);
        i++;
      }
    }
    while (i < room.capacity) {
      capacityIcons.push(<StyledIcon key={i} icon="material-symbols:person-outline" />);
      i++;
    }
  }
  
  return <IconBox>{capacityIcons}</IconBox>;
}
