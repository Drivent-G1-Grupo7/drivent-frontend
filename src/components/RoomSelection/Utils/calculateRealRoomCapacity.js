//pegar todos os quartos pelo ultimo hotelId selecionado
//pegar todas as reservas (bookings)
//iterar por cada quarto e verificar quantas vezes o id do quarto está na reserva
//se o numero de booking.Room.id for igual a capacidade do quarto, o quarto não está disponível
//retornar a lista de quartos, mais a propriedade (isAvailable), mais a propriedade bookings que a quantidade de vezes que o id do quarto aparece na reserva

import mockBookings from './bookingMock';
import mockHotelsWithRooms from './hotelsWithRoomsMock';

function getRealRoomCapacity(hotelsWithRooms) {
  const rooms = hotelsWithRooms;
  const bookings = mockBookings.Room;
  const realRoomCapacity = rooms.map((room) => {
    const bookingsCount = bookings.filter((booking) => booking.id === room.id).length;
    return {
      ...room,
      isAvailableRoom: bookingsCount < room.capacity,
      bookingsCount: bookingsCount,
    };
  });
  return realRoomCapacity;
}

export default getRealRoomCapacity;
