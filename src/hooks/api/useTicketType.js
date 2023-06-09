import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTicketType() {
  const token = useToken();
  
  const {
    data: ticketTypes,
    loading: ticketTypeLoading,
    error: ticketTypeError,
    act: getTicketTypes
  } = useAsync(() => ticketApi.getTicketTypes(token));

  return {
    ticketTypes,
    ticketTypeLoading,
    ticketTypeError,
    getTicketTypes
  };
}
