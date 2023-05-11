import { HotelSelectionWrapper, StyledHotelWrapper } from './HotelSelectionWrapper';
import hotel1Img from '../../assets/images/hotel1.png';
import hotel2Img from '../../assets/images/hotel2.png';
import hotel3Img from '../../assets/images/hotel3.png';

export default function HotelSelection() {
  return (
    <HotelSelectionWrapper>
      <h2>Primeiro, escolha seu hotel</h2>
      <label htmlFor="hotel1">
        <StyledHotelWrapper type="radio" id="hotel1" name="hotel" value="hotel1">
          <img src={hotel1Img} alt="hotel1" />
          <h3>Driven Resort</h3>
          <div>
            <span>Tipos de acomodação:</span>
            <p>Single e Double</p>
          </div>
          <div>
            <span>Vagas disponíveis:</span>
            <p>103</p>
          </div>
        </StyledHotelWrapper>
        <StyledHotelWrapper type="radio" id="hotel1" name="hotel" value="hotel1">
          <img src={hotel2Img} alt="hotel1" />
          <h3>Driven Palace</h3>
          <div>
            <span>Tipos de acomodação:</span>
            <p>Single, Double e Triple</p>
          </div>
          <div>
            <span>Vagas disponíveis:</span>
            <p>25</p>
          </div>
        </StyledHotelWrapper>
        <StyledHotelWrapper type="radio" id="hotel1" name="hotel" value="hotel1">
          <img src={hotel3Img} alt="hotel1" />
          <h3>Driven World</h3>
          <div>
            <span>Tipos de acomodação:</span>
            <p>Single e Double</p>
          </div>
          <div>
            <span>Vagas disponíveis:</span>
            <p>2</p>
          </div>
        </StyledHotelWrapper>
      </label>
    </HotelSelectionWrapper>
  );
}
