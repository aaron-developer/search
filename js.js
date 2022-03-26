function autocompletado () {
    document.getElementById("demo").innerHTML = '';

    var preguntas = [
     "Cisco", "javascript", "Linux", "Kali linux", "anonymus", ".onion"
    ];

     var palabra = document.getElementById("buscar-palabra").value;
     var zero = palabra.length;
     for(indice in preguntas){
        var nombre = preguntas[indice];
        var str = nombre.substring(0,zero);
        if(palabra.length <= nombre.length && palabra.length != 0 && nombre.length != 0){
            if(palabra.toLowerCase() == str.toLowerCase()){
                var node = document.createElement("LI");
                var textnode = document.createTextNode(preguntas[indice]);
                node.appendChild(textnode);
                document.getElementById("demo").appendChild(node);
            }
        }
    }
}

//-------------function text for html---------

var x = myFunction(1, 1);
document.getElementById("text").innerHTML = "Project number : " + " " + x;

function myFunction(project, number1) {
  return project * number1 + " " + "Search created on js, CSS and html by Aaron Padilla"
}