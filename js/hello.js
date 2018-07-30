function changesize() {
 var e = document.getElementById("textSize");
  var r= e.options[e.selectedIndex].value;
  var x=document.getElementById("texta");
    x.style.fontSize=r;   
}
/*************************************************/
function changefond() {
   	var a=document.getElementById("textfond");
  var z= a.options[a.selectedIndex].value;
  document.getElementById("texta").style.fontFamily=z;
}
/*************************************************/
function changefondStyle() {

   	var t=document.getElementById("Font Style");
  var y= t.options[t.selectedIndex].value;
  document.getElementById("texta").style.fontStyle=y;
}
/*************************************************/
function changecolor() {
	var m=document.getElementById("co").value;
  document.getElementById("texta").style.color=m;
}
/*************************************************/
function changefondweightbold() {
    var element = document.getElementById("texta");
    element.classList.toggle("boldd");
}
/*************************************************/
function changefondweightitalic() {
    var element = document.getElementById("texta");
    element.classList.toggle("italicc");
}
/*************************************************/
function changefondweightunderlined() {
    var element = document.getElementById("texta");
    element.classList.toggle("underlinedd");
}
/*************************************************/
function centreee() {
    var element = document.getElementById("texta");
    element.classList.toggle("centred");

}





