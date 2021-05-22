Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 130,
    constraints: {
        facingMode: "environment"
    }
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function Take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='imageCaptured' src='"+data_uri+"'>";
    })
}
console.log("ml5 version is"+ml5.version);
classifier=ml5.imageClassifier('MobileNet',modelLoaded);
function Check(){
    img=document.getElementById("imageCaptured");
    classifier.classify(img,gotResult);
}
function modelLoaded(){
    console.log("model id loaded");
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label
    }
}