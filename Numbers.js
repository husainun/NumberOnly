var newArray =[1, "apple", -3, "orange", 0.5,2,5,-3];
numbersOnly(newArray);
// updatedArray(newArray);
// console.log("The updated Array is ");
// console.log(newArray);

function numbersOnly(arr){
  var numArray=[];
  var j=0;
  for (var i=0; i<arr.length; i++){
    if (typeof arr[i] === "number")
    {
      numArray[j]=arr[i];
      j++;
    }
  }
  console.log("The number Array is ")
  console.log(numArray);
}
// function updatedArray (){
//   for (var i=0;i<newArray.length;i++)
//   {
//     if (typeof newArray[i] === "number") continue;
//     else
//
//      newArray.pop();
//   }
// }
