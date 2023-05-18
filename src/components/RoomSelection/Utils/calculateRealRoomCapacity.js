//pegar todos os quartos pelo ultimo hotelId selecionado
//pegar todas as reservas (bookings)
//iterar por cada quarto e verificar quantas vezes o id do quarto está na reserva
//se o numero de booking.Room.id for igual a capacidade do quarto, o quarto não está disponível
//retornar a lista de quartos, mais a propriedade (isAvailable), mais a propriedade bookings que a quantidade de vezes que o id do quarto aparece na reserva

import mockBookings from './bookingMock';
import mockHotelsWithRooms from './hotelsWithRoomsMock';

function getRealRoomCapacity(hotelId) {
  const rooms = mockHotelsWithRooms.Room;
  const bookings = mockBookings.Room;
  const realRoomCapacity = rooms.map((room) => {
    const count = bookings.filter((booking) => booking.Room.id === room.id).length;
    return {
      ...room,
      isAvailable: count < room.capacity,
      bookings: count,
    };
  });
  return realRoomCapacity;
}
