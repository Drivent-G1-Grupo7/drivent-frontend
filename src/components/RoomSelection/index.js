import { RoomOptions } from './RoomOption';
import { RoomBox, RoomSelectionWrapper } from './RoomSelectionWrapper';

const mockRoom = {
  Room1: {
    name: '101',
    capacity: 2,
  },
  Room2: {
    name: '102',
    capacity: 2,
  },
};

// name: ['101', '102', '103', '104',
//    '105', '106', '107', '108',
//     '109', '110', '111', '112',
//      '113', '114', '115', '116'],

export default function RoomSelection() {
  return (
    <RoomSelectionWrapper>
      <h2>Ótima pedida! Agora escolha seu quarto:</h2>
      <RoomBox>
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
        <RoomOptions />
            
      </RoomBox>
    </RoomSelectionWrapper>
  );
}
