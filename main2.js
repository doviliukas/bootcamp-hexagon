var pcs = [
{ "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
{ "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
{ "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
{ "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
],
q = 2,
sum = 1600,
colors = [],
color = "";
for( var i=0; i<pcs.length;i++ ){
// Filtras
if( (pcs[i].kaina * q <= sum) && (( pcs[i].spalva.juoda >= q ) || ( pcs[i].spalva.balta >= q )) ){
// Colors chaos
colors = Object.keys( pcs[i].spalva );
color = "";
for( var j=0; j<colors.length; j++ ){
if( ( (colors[j] === "balta") && (pcs[i].spalva.balta >= q) ) || ( (colors[j] === "juoda") && (pcs[i].spalva.juoda >= q) ) ){
if( color ) {
color += " ir " + colors[j];
} else {
color = colors[j];
}
}
}
console.log("Modelis: " + pcs[i].modelis + "\nKaina: " + (pcs[i].kaina * q) + "\nSpalvos: " + color);
}
}
