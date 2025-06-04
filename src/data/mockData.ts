import { Itinerary } from '../types';

export const mockItinerary: Itinerary = {
  id: '1',
  name: 'Delhi Exploration',
  days: [
    {
      id: 'day-1',
      name: 'Day',
      attractions: [
        {
          id: 'india-gate',
          name: 'India Gate',
          rating: 4.6,
          reviews: 281124,
          description: 'India Gate is a war memorial located in New Delhi, along the Rajpath. It is dedicated to the 82,000 soldiers, both Indian and British.',
          image: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          position: 1
        },
        {
          id: 'red-fort',
          name: 'Red Fort',
          rating: 4.5,
          reviews: 168729,
          description: 'The Red Fort is a historical fort in the old Delhi area, on the banks of Yamuna.',
          image: 'https://images.pexels.com/photos/13517511/pexels-photo-13517511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          position: 2
        },
        {
          id: 'qutub-minar',
          name: 'Qutub Minar',
          rating: 4.5,
          reviews: 151556,
          description: 'Qutub Minar is a minaret or a victory tower located in the Qutub complex, a UNESCO World Heritage Site in Delhi\'s Mehrauli area.',
          image: 'https://images.pexels.com/photos/1850213/pexels-photo-1850213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          position: 3
        },
        {
          id: 'lotus-temple',
          name: 'Lotus Temple',
          rating: 4.5,
          reviews: 67772,
          description: 'Located in the national capital of New Delhi, the Lotus Temple is an edifice dedicated to the Bahai faith.',
          image: 'https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          position: 4
        },
        {
          id: 'humayuns-tomb',
          name: 'Humayun\'s tomb',
          rating: 4.5,
          reviews: 46024,
          description: 'Humayun\'s tomb is the final resting place of the Mughal Emperor Humayun.',
          image: 'https://images.pexels.com/photos/12428359/pexels-photo-12428359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          position: 5
        },
      ]
    }
  ]
};