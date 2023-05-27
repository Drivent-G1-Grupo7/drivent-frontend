import { useState, useEffect } from 'react';
import RoomSelection from '../RoomSelection';
import HotelOption from './HotelSelectionOption';
import ChosenRoom from '../RoomSelection/ChosenRoom';
import useGetBooking from '../../hooks/api/useGetBooking';
import useHotel from '../../hooks/api/useHotel';
import useRoom from '../../hooks/api/useRoom';
import useRoomBooking from '../../hooks/api/useRoomBooking';

export default function HotelSelection() {
  const [isSelected, setIsSelected] = useState(false);
  const [lastSelectedHotel, setLastSelectedHotel] = useState(null);
  const [wasRoomChosen, setWasRoomChosen] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [bookingExists, setBookingExists] = useState(0);
  const { getBooking } = useGetBooking();
  const { getHotels } = useHotel();
  const { getRooms } = useRoom();
  const { getRoomBooking } = useRoomBooking();
 
  useEffect(() => {
    const fetchData = async() => {
      try {
        const hotelsData = await getHotels();
        const hotelsWithRoomsData = await Promise.all(
          hotelsData.map(async(hotel) => {
            const { Rooms } = await getRooms(hotel.id);
            await Promise.all(
              Rooms.map(async(room) => {
                const { bookingLength } = await getRoomBooking(room.id);
                room.bookingsCount = bookingLength;
              })
            );
            const vacancy = Rooms.reduce((total, room) => total + room.capacity - room.bookingsCount, 0);
            return { ...hotel, Rooms, vacancy };
          })
        );
        setHotels(hotelsWithRoomsData);
        const userBooking = await getBooking();
        if (userBooking) {
          setBookingExists(userBooking.id);
          setSelectedRooms([userBooking.Room.id]);
          for (const hotel of hotelsWithRoomsData) {
            const room = hotel.Rooms.find((room) => room.id === userBooking.Room.id);
            if (room) {
              setLastSelectedHotel(hotel);
              setWasRoomChosen(true);
            }
          }
        }
      } catch (error) {
        setBookingExists(0);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {wasRoomChosen ? (
        <ChosenRoom lastSelectedHotel={lastSelectedHotel} lastSelectedRoom={selectedRooms} setWasRoomChosen={setWasRoomChosen} />
      ) : (
        <>
          <HotelOption
            hotels={hotels}
            setIsSelected={setIsSelected}
            lastSelectedHotel={lastSelectedHotel}
            setLastSelectedHotel={setLastSelectedHotel}
          />
          {isSelected && (
            <RoomSelection
              lastSelectedHotel={lastSelectedHotel}
              setWasRoomChosen={setWasRoomChosen}
              selectedRooms={selectedRooms}
              setSelectedRooms={setSelectedRooms}
              booking={bookingExists}
              setBooking={setBookingExists}
            />
          )}
        </>
      )}
    </>
  );
}
