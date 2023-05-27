import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export default function useRoomBooking() {
  const token = useToken();
  
  const {
    data: roomBooking,
    loading: roomBookingLoading,
    error: roomBookingError,
    act: getRoomBooking
  } = useAsync((data) => bookingApi.roomBookings(data, token));

  return {
    roomBooking,
    roomBookingLoading,
    roomBookingError,
    getRoomBooking
  };
}
