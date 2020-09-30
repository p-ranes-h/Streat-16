var synth = window.speechSynthesis;
document.body.addEventListener('keyup',(e)=>{
    const {textContent} = e.target;
    var utterThis = new SpeechSynthesisUtterance(textContent);
     synth.speak(utterThis);
    console.log(textContent);    
})