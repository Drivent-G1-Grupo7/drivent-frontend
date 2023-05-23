import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function useGetPayment() {
  const token = useToken();
  
  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: getPayment
  } = useAsync((data) => paymentApi.getPayment(data, token));

  return {
    payment,
    paymentLoading,
    paymentError,
    getPayment
  };
}
