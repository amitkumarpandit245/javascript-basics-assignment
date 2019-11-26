/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (size) => {
    
    var result='';
    for(var i=0;i<size;i++)
       {
        var space='';
           for(var j=i;j<size;j++)
           {
                   space=space+' ';
           }
           for(var k=0;k<i+1;k++)
           {
                   space=space+'* ';
           }
           result=result+space+' \n';
              //console.log(space+stars);
              space='';
              stars='';
       }
       return result;
};
/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/
module.exports = buildPyramid;
