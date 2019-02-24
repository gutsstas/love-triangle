/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
      let next_one = preferences[i] - 1;
      if (next_one == i) continue;
      let next_two = preferences[next_one] - 1;
      if (next_one == next_two) continue;
      let next_three = preferences[next_two] - 1;
      if (next_three == next_two) continue;
      if (next_three == i) {
          count++;
      }
   }
   return count / 3;

};
