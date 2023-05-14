import { useState } from 'react';
import Card from 'react-credit-cards-2';
import CardFormContainer from './styles';

export default function CardForm() {
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
    issuer: ''
  });

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

  return (
    <CardFormContainer>
      <Card
        number={cardData.number}
        expiry={cardData.expiry}
        cvc={cardData.cvc}
        name={cardData.name}
        focused={cardData.focus}
      />
      <form>
        <input
          type='tel'
          name='number'
          placeholder='Número do Cartão'
          value={cardData.number}
          onChange={inputChangeHandler}
          onFocus={inputFocusHandler}
        />
        <input
          type='text'
          name='name'
          placeholder='Nome'
          value={cardData.name}
          onChange={inputChangeHandler}
          onFocus={inputFocusHandler}
        />
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
      </form>
    </CardFormContainer>
  );
}
