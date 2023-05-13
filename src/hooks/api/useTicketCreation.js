import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTicketCreation() {
  const token = useToken();
    
  const {
    loading: ticketCreationLoading,
    error: ticketCreationError,
    act: createTicket
  } = useAsync((data) => ticketApi.postTicket(data, token), false);
  
  return {
    ticketCreationLoading,
    ticketCreationError,
    createTicket
  };
}
