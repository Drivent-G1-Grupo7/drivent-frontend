import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import { CardFormContainer, CardContainer } from './styles';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { StyledButton } from './StyledButton';
import { ConfirmedPaymentCard } from './ConfirmedPayment';
import { Icon } from '@iconify/react';
import useProcessPayment from '../../hooks/api/useProcessPayment';

export default function CardForm({ unpaidTicket, ticketId }) {
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
    issuer: ''
  });
  const [showCreditCard, setShowCreditCard] = useState(unpaidTicket);
  const { processPayment } = useProcessPayment();

  function inputChangeHandler(event) {
    const { name, value } = event.target;

    setCardData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function inputFocusHandler(event) {
    setCardData((prevData) => ({
      ...prevData,
      focus: event.target.name
    }));
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      await processPayment({
        ticketId: ticketId,
        cardData: cardData
      });
      setShowCreditCard(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <CardContainer>
      <h2>Pagamento</h2>
      <CardFormContainer>
        {showCreditCard ?
          <>
            <Cards
              number={cardData.number}
              expiry={cardData.expiry}
              cvc={cardData.cvc}
              name={cardData.name}
              focused={cardData.focus}
            />
            <form onSubmit={handleSubmit}>
              <input
                type='tel'
                name='number'
                placeholder='Número do Cartão'
                value={cardData.number}
                onChange={inputChangeHandler}
                onFocus={inputFocusHandler}
              />
              <span>Ex: 49..., 51..., 36..., 37...</span>
              <input
                type='text'
                name='name'
                placeholder='Nome'
                value={cardData.name}
                onChange={inputChangeHandler}
                onFocus={inputFocusHandler}
              />
              <div>
                <input
                  type='tel'
                  name='expiry'
                  placeholder='Validade'
                  value={cardData.expiry}
                  onChange={inputChangeHandler}
                  onFocus={inputFocusHandler}
                />
                <input
                  type='tel'
                  name='cvc'
                  placeholder='CVC'
                  value={cardData.cvc}
                  onChange={inputChangeHandler}
                  onFocus={inputFocusHandler}
                />
              </div>
              <StyledButton type="submit">FINALIZAR PAGAMENTO</StyledButton>
            </form>
          </> :
          <ConfirmedPaymentCard>
            <div>
              <Icon icon="material-symbols:check-circle" color="green" width="48" height="48" />
              <h2>Pagamento Confirmado</h2>
            </div>
            <span>Prossiga para a escolha de hospedagem e atividades</span>
          </ConfirmedPaymentCard>
        }
      </CardFormContainer>
    </CardContainer>
  );
}
