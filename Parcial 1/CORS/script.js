window.onload=function(){
   //PETICION A SERVIDOR
   document.getElementById("btnPeticion").addEventListener("click", () => {
    fetch('http://localhost:3000')
        .then(respuesta => {
            console.log("Servidor express escuchando a peticion")
        });
});
}