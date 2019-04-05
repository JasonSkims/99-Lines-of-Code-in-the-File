var friends = ['John', 'Brian', 'Allison', 'Claire', 'Andrew'];


for (var i=0; i<friends.length; i++){
    console.log(friends[i])

    for (var j=99;j>0 ; j--){
        console.log(j);
        console.log( + j + 'Lines of code in the file,' + j + ' lines of code;' + friends[i] +  ' strikes on out clears it all out,' + (j-1) + ' lines of code in the file.');
    }
}

