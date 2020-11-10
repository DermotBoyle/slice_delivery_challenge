const INPUT = "5x5(0, 0)(1, 3)(4,4)(4, 2)(4, 2)(0, 1)(3, 2)(2, 3)(4, 1)";
const insideParanthesis = /\(\s*\d+\s*,\s*\d*\s*\)/g;

const gridData = {
  currentGrid: "",
  coordinates: [],
  lastCoordinate: [],
  result : [],
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
 * @returns {gridData.coordinates : []}
 */
const getCurrentCoordinates = (INPUT, insideParanthesis) => {
  let onlyCoords = [],
    parsedCoords = "",
    coords = "";

  parsedCoords = INPUT.replace(/\s/g, "");
  onlyCoords = parsedCoords.match(insideParanthesis);
  coords = removeParanthesis(onlyCoords);
  return (gridData.coordinates = coords);
};

/**
 * Utility function of getCurrentCoordinates
 * @param {object[]} coords
 */
const removeParanthesis = (coords) => {
  let newArray = [];
  for (let i = 0; i < coords.length; i++) {
    newArray.push(coords[i].slice(1, -1));
  }
  return newArray;
};

/**
 * Add function for two the same - double drop or carry on... ?
 * @param {*} gridData 
 */

const deliveryMechanism = (gridData) => {
let lastDelivery, prevSpot, splitCurrent, yAxis, xAxis, positionZero  = JSON.stringify(['0', '0']);
  for (let i = 0; i < gridData.coordinates.length; i++) {
    let currentCoordinate = gridData.coordinates[i].split(',');
    
    if(JSON.stringify(currentCoordinate) == positionZero){
      console.log('pushed')
      gridData.result.push('D')
      lastDelivery = currentCoordinate;
    } else {
      console.log(lastDelivery,  currentCoordinate, 'sum')
      yAxis = currentCoordinate[0] - lastDelivery[0] ;
      xAxis = currentCoordinate[1] - lastDelivery[1] ;
      gridData.result = [...gridData.result, yAxis, xAxis, 'D'];
      lastDelivery = currentCoordinate
    }
  }
};



getCurrentGrid(INPUT);
getCurrentCoordinates(INPUT, insideParanthesis);
deliveryMechanism(gridData);

console.log(gridData);
