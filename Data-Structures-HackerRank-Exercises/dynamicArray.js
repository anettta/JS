var hobbies = new Array();

hobbies.push("drawing");
hobbies.push("running");
hobbies.push("coding");

for(var i = 0; i < hobbies.length; i++){
    document.write(hobbies[i] + " ");
}

hobbies.shift();