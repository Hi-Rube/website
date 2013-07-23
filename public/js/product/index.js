var Scrolling = false;
function $(o) {
	return document.getElementById(o);
}
function ScroMove() {
	Scrolling = true;
}
document.onmousemove = function(e) {
	if (Scrolling == false)
		return;
	ScroNow(e);
}
document.onmouseup = function(e) {
	Scrolling = false;
}
function ScroNow(event) {
	var event = event ? event : (window.event ? window.event : null);
	var Y = event.clientY - $("Scroll").getBoundingClientRect().top
			- $("ScroLine").clientHeight / 2;
	var H = $("ScroRight").clientHeight - $("ScroLine").clientHeight;
	var SH = Y / H * ($("ScroLeft").scrollHeight - $("ScroLeft").clientHeight);
	if (Y < 0)
		Y = 0;
	if (Y > H)
		Y = H;
	$("ScroLine").style.top = Y + "px";
	$("ScroLeft").scrollTop = SH;
}
function ScrollWheel() {
	var Y = $("ScroLeft").scrollTop;
	var H = $("ScroLeft").scrollHeight - $("ScroLeft").clientHeight;
	if (event.wheelDelta >= 120) {
		Y = Y - 80;
	} else {
		Y = Y + 80;
	}
	if (Y < 0)
		Y = 0;
	if (Y > H)
		Y = H;
	$("ScroLeft").scrollTop = Y;
	var SH = Y / H * $("ScroRight").clientHeight - $("ScroLine").clientHeight;
	if (SH < 0)
		SH = 0;
	$("ScroLine").style.top = SH + "px";
}
