const API_KEY = "abc123";

const add = ( x, y ) => x + y;

let res = add( 2, 3 );

const addInfinitely = ( ...numbers ) => {
  return numbers.reduce((s, n) => s + n, 0);
};

addInfinitely( 1, 2, 3 );
addInfinitely( 1, 2, 3, 4, 5 );
