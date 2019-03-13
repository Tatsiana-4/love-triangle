/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */


module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangleLovers = [];
  let countTriangles = 0;
   for(var i = 0; i < preferences.length; i++){
      let firstPosition = i+1;
      let firstLover = preferences[i];
      if (triangleLovers.includes(firstPosition)){
      continue;
      }
  let secondPosition = firstLover;
  let secondLover = preferences[secondPosition-1];
  let thirdPosition = secondLover;
  let thirdLover = preferences[thirdPosition-1];
  if (firstLover == secondPosition && secondLover == thirdPosition && thirdLover == firstPosition &&
      firstPosition != secondPosition && secondPosition != thirdPosition && firstPosition != thirdPosition) {
      countTriangles ++;
      triangleLovers.push( firstPosition, secondPosition, thirdPosition);
        }  
}
return countTriangles;
};
    

