/**
 * Function: solution(D)
 * ----------------------
 * Given a dictionary `D` where:
 *   - Key: Date in 'YYYY-MM-DD' format
 *   - Value: Integer (some numeric value)
 *
 * Returns:
 *   A new dictionary where:
 *     1. Keys are weekdays ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
 *     2. Values are sum of all values falling on that weekday
 *     3. Missing weekdays are filled with the average of previous and next known day
 */

function solution(D) {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const result = {};

  // Initialize all weekdays to 0
  for (const day of weekDays) {
    result[day] = 0;
  }

  // Step 1: Aggregate values by weekday
  for (const dateStr in D) {
    const date = new Date(dateStr);
    const dayIndex = (date.getDay() + 6) % 7; // Convert Sunday=0 → Sunday=6
    const dayName = weekDays[dayIndex];
    result[dayName] += D[dateStr];
  }

  // Step 2: Fill missing weekdays with mean of previous and next
  for (let i = 0; i < 7; i++) {
    const currentDay = weekDays[i];

    if (result[currentDay] === 0) {
      // find previous non-zero
      let prev = (i - 1 + 7) % 7;
      while (result[weekDays[prev]] === 0) {
        prev = (prev - 1 + 7) % 7;
      }

      // find next non-zero
      let next = (i + 1) % 7;
      while (result[weekDays[next]] === 0) {
        next = (next + 1) % 7;
      }

      result[currentDay] = Math.floor(
        (result[weekDays[prev]] + result[weekDays[next]]) / 2
      );
    }
  }

  return result;
}

// Export for Node.js testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { solution };
}
