import hotel1Img from '../../../assets/images/hotel1.png';

const mockHotelsWithRooms = {
  id: 1,
  name: 'Driven Resort',
  img: hotel1Img,
  Room: [
    {
      id: 1,
      name: '101',
      capacity: 3,
      hotelId: 1,
    },
    {
      id: 2,
      name: '102',
      capacity: 3,
      hotelId: 1,
    },
    {
      id: 3,
      name: '103',
      capacity: 3,
      hotelId: 1,
    },
  ],
};

export default mockHotelsWithRooms;
