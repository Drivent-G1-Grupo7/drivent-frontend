import { IconBox, RoomOptionWrapper, StyledIcon } from './RoomOptionWrapper';

export function RoomOptions() {
  return (
    <RoomOptionWrapper>
      <div>
        <label htmlFor="room1">101</label>
        <IconBox>
          <StyledIcon icon="material-symbols:person-outline" />
          <StyledIcon icon="material-symbols:person-outline" />
          <StyledIcon icon="material-symbols:person-outline" />
        </IconBox>
      </div>
    </RoomOptionWrapper>
  );
}
