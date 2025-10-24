const { solution } = require('./solution');

describe('solution()', () => {
  test('should correctly sum values by weekday', () => {
    const input = {
      '2020-01-01': 4,
      '2020-01-02': 4,
      '2020-01-03': 6,
      '2020-01-04': 8,
      '2020-01-05': 2,
      '2020-01-06': -6,
      '2020-01-07': 2,
      '2020-01-08': -2,
    };
    const output = solution(input);
    expect(output).toEqual({
      Mon: -6,
      Tue: 2,
      Wed: 2,
      Thu: 4,
      Fri: 6,
      Sat: 8,
      Sun: 2,
    });
  });

  test('should fill missing weekdays with mean of nearest days', () => {
    const input = {
      '2020-01-01': 6,
      '2020-01-04': 12,
      '2020-01-05': 14,
      '2020-01-06': 2,
      '2020-01-07': 4,
    };
    const output = solution(input);
    expect(output).toEqual({
      Mon: 2,
      Tue: 4,
      Wed: 6,
      Thu: 8,
      Fri: 10,
      Sat: 12,
      Sun: 14,
    });
  });

  test('should handle negative and large integer values', () => {
    const input = {
      '2020-01-01': -1000000,
      '2020-01-02': 1000000,
    };
    const output = solution(input);
    expect(output.Wed).toBe(-1000000);
    expect(output.Thu).toBe(1000000);
  });
});
