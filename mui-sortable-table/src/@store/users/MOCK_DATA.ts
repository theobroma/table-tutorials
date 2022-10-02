import type { Person } from '../../@types';

const usersMock: Person[] = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    age: 21,
    gender: 'male',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    age: 32,
    gender: 'female',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    age: 42,
    gender: 'male',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    age: 33,
    gender: 'male',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    age: 45,
    gender: 'male',
  },
];

export default usersMock;
