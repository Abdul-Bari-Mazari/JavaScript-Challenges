// *************** [3] *****************

function removeSpaces(str) {
  var str;
  var noSpaceString = str.replaceAll(" ", "");
  
  return noSpaceString;
}

console.log(removeSpaces("This Sentence Has No Spaces!_(replaceAll. Method")); 

function removeSpacesUsingSplit(str2) {
    var str2;
    var noSpaces = str2.split(' ').join('');

    return noSpaces;
}

console.log(removeSpacesUsingSplit("This Sentence Has No Spaces_(Split.Method"));
