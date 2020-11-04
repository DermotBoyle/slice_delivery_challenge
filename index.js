const INPUT = "5x5(0, 0)(1, 3)(4,4)(4, 2)(4, 2)(0, 1)(3, 2)(2, 3)(4, 1)";
const insideParanthesis = /\(\s*\d+\s*,\s*\d*\s*\)/g;

const gridData = {
  currentGrid: "",
  currentCoordinates: [],
};

/***
 * Add grid size to gridData object
 * @params {string} INPUT
 * @returns {gridData.currentGrid : {string}}  
 */
const getCurrentGrid = (INPUT) => {
  return (gridData.currentGrid = INPUT.slice(0, 3));
};

/**
 * Removes whitespace and paranthesis from Input string
 * @param {string} INPUT 
 * @param {RegExp} insideParanthesis 
 * @returns {gridData.currentCoordinates : []}
 */
const getCurrentCoordinates = (INPUT, insideParanthesis) => {
  let onlyCoords = [],
    parsedCoords = "",
    coords = "";

  parsedCoords = INPUT.replace(/\s/g, "");
  onlyCoords = parsedCoords.match(insideParanthesis);
  coords = sliceString(onlyCoords);
  return (gridData.currentCoordinates = coords);
};

/**
 * Utility function of getCurrentCoordinates
 * @param {object[]} coords 
 */
const sliceString = (coords) => {
  let newArray = [];
  for (let i = 0; i < coords.length; i++) {
    newArray.push(coords[i].slice(1, -1));
  }
  return newArray;
};

getCurrentGrid(INPUT);
getCurrentCoordinates(INPUT, insideParanthesis);

console.log(gridData);
