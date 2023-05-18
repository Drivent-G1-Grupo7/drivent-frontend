import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useRoom() {
  const token = useToken();
  
  const {
    data: rooms,
    loading: roomsLoading,
    error: roomsError,
    act: getRooms
  } = useAsync((data) => hotelApi.getHotelWithRoom(data, token));

  return {
    rooms,
    roomsLoading,
    roomsError,
    getRooms
  };
}
