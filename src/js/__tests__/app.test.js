import lifeIndication from '../app';

test.each([
  { name: 'мечник', health: 10, expected: 'critical' },
  { name: 'маг', health: 100, expected: 'healthy' },
  { name: 'лучник', health: 45, expected: 'wounded' },
])(
  'determine lifelevel %s of health %i',
  ({ name, health, expected }) => {
    const result = lifeIndication({ name, health, expected });
    expect(result).toBe(expected);
  },
);
