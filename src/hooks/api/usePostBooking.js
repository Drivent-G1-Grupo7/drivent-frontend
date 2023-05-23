import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export default function usePostBooking() {
  const token = useToken();
  
  const {
    data: newBooking,
    loading: newBookingLoading,
    error: newBookingError,
    act: postBooking
  } = useAsync((data) => bookingApi.postBooking(data, token));

  return {
    newBooking,
    newBookingLoading,
    newBookingError,
    postBooking
  };
}