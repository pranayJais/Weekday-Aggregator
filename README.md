This project contains a function `solution(D)` that:
1. Groups date–value pairs by weekday.
2. Sums values per weekday.
3. Fills missing weekdays with the mean of adjacent weekdays.

## Example
**Input:**
```js
{
  '2020-01-01': 6,
  '2020-01-04': 12,
  '2020-01-05': 14,
  '2020-01-06': 2,
  '2020-01-07': 4
}
**Output:**
{
  Mon: 2,
  Tue: 4,
  Wed: 6,
  Thu: 8,
  Fri: 10,
  Sat: 12,
  Sun: 14
}
