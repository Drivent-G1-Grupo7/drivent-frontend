import { useState } from 'react';
import RoomSelection from '../RoomSelection';
import HotelOption from './HotelSelectionOption';

export default function HotelSelection() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      <HotelOption isSelected={isSelected} setIsSelected={setIsSelected}/>
      {isSelected && <RoomSelection /> }
    </>
  );
}
