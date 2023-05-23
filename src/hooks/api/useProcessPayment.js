import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function useProcessPayment() {
  const token = useToken();
  
  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: processPayment
  } = useAsync((data) => paymentApi.processPayment(data, token));

  return {
    payment,
    paymentLoading,
    paymentError,
    processPayment
  };
}
