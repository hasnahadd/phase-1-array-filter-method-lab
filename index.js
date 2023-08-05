// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


const driversOb = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers ,matchName){
let Ndrivers = drivers.filter(function (value){
return value.toLowerCase() == matchName.toLowerCase();
});
console.log(Ndrivers);
if (Ndrivers.length>0) {
    return Ndrivers;
    
}else{

   return [] ;
}
}
console.log(findMatching(drivers ,'sally'));

function fuzzyMatch(drivers ,matchName){
let matchDrivers = drivers.filter(function(value){

return value.toLowerCase().startsWith(matchName.toLowerCase()) && value.toLowerCase() !== matchName.toLowerCase();  });
   

return matchDrivers;

}
console.log(fuzzyMatch(drivers ,'sa'));

function matchName( driversOb , Name){
    let matchNames = driversOb.filter(function(value){

     return   value.name === Name });

    
return matchNames;
//return matchNames.map(emp => emp.name);
}
console.log(matchName( driversOb , 'Sammy'));

