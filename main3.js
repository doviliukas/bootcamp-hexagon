var posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu", "aa aaaa aaa"],
result = "";

function longestWord(string){

var stringArray = string.split(" "),
answer = "";

for(var i=0; i<stringArray.length; i++){

if( stringArray[i].length > answer.length ){
answer = stringArray[i];
}
}
return answer;
}

for(var i=0; i<posts.length; i++){

result += longestWord(posts[i]) + " ";
}

console.log(result);

