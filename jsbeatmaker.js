
function loadSample(){

    const loadBtn = document.querySelector('input[type="button"]');
    const loadAudio = document.querySelector('input[type="file"]');
    
    loadBtn.addEventListener('click', function() {

    var keyNum = document.getElementsByName('key');
    
    
    var keyNumValue;
    for(var i = 0; i < keyNum.length; i++){
        if(keyNum[i].checked){
            
         keyNumValue = keyNum[i].value;
        }
    }



    console.log(keyNumValue);
    console.log(loadAudio.value);
 /*
    loadAudio.play();


   var destDiv = document.getElementsById("p-" + (keyNumValue));

    var newAudio = document.createElement('audio');
    newAudio.setAttribute("src", loadAudio.value);
    newAudio.setAttribute("id", "audio"+(keyNumValue));
    newAudio.setAttribute("type", "audio/*");

    destDiv.apendChild(newAudio);
*/
    
});

}



function playAudio(){
    window.addEventListener('keypress', function (e) {
        var code = e.key;
        let getAudio = document.getElementById("audio" + (code));
            getAudio.currentTime = 0.00;
            getAudio.play();
    
    }); 
}


function keyPressAnimate() {
    window.addEventListener('keydown', function (e) {
        var code = e.key;
            document.getElementById(`p${code}`).style.borderColor = "Yellow";

    });
    window.addEventListener('keyup', function (e) {
        var code = e.key;
        document.getElementById(`p${code}`).style.borderColor = "Black"; 
    }); 


}









playAudio();
keyPressAnimate();
loadSample();






