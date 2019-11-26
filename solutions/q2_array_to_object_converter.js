/* Write a Program to convert an array of objects to an object
	based on a given key */


	const convert = (inputArray,key) => {
        if(!Array.isArray(inputArray)){
            return null;
        }
        var objArray = {};
        inputArray.forEach(element => {
            objArray[element[key]] = element;
        });
     return	objArray;
	}
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
