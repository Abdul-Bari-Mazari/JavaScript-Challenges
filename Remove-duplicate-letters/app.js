// **************** [8] ********************

function removeDuplicates() {
    var arr = ["a", "a", "b", "r", "b", "b", "a"];
    console.log(`Orginal Array: ${arr}`);

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === (arr[i+1])) {
            arr.splice(i, 1)
        }
    }
    console.log(`Duplicate Elements Removed: ${arr}`);
    
}

removeDuplicates();