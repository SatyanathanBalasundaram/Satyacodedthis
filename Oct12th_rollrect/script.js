// function calcrect(width,height){
//     return width*height;
// }



function calcArea(){
    const width=document.getElementById("width").value;
    const height=document.getElementById("height").value;
    const area = width*height;
    document.getElementById("result").textContent = area;

}