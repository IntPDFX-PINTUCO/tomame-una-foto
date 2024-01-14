var reconocervoz=window.webkitSpeechRecognition
var jarvis=new webkitSpeechRecognition
jarvis.lang="es-AR"
function iniciar() {
    jarvis.start()
}
jarvis.onresult=function (params) {
    texto=params.results[0][0].transcript
    texto=texto.toLowerCase()
    document.getElementById("textbox").value=texto
    if (texto.includes("fotografiame")||texto.includes("toma mi selfie")||texto.includes("toma mi foto")) {
       Webcam.attach("#camara") 
    setTimeout(tomarfoto, 2450)
    document.getElementById("gif").style.display="flex"
    document.getElementById("gif").innerHTML='<img src="gif.gif" >'
    }
}
function tomarfoto() {
    Webcam.snap(function (dirección) {
        document.getElementById("resultado").innerHTML='<img src="'+dirección+'" id="foto">'
        document.getElementById("gif").style.display="none"
    })
}