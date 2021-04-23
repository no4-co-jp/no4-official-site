var nowMeasuring = false;
var measureOriginTop = 0;
var measureOriginLeft = 0;

var div = document.createElement("div");
div.id = '_pointer_';
div.style.cssText = 'position:absolute; top:0%; left:0%; background:#000; z-index:9999; opacity:0.5; color:#fff; font-size:20px;';
document.body.appendChild(div);

var measurePointDiv = document.createElement("div");
measurePointDiv.id = '_measurePoint_';
measurePointDiv.style.cssText = 'display: none;';
document.body.appendChild(measurePointDiv);

document.addEventListener("mousemove", onMouseMove);
function onMouseMove(e) {
	var x = Math.round((e.clientX / document.body.clientWidth * 1000)) / 10;
	var y = Math.round((e.clientY / document.body.clientHeight * 1000)) / 10;
	div.style.top = (y < 95) ? e.clientY + 2 : e.clientY - 40 + 2;
	div.style.left = (x < 90) ? e.clientX + 2 : e.clientX - 40 + 2;
	var top = (y === parseInt(y)) ? y + ".0" : y;
	var left = (x === parseInt(x)) ? x + ".0" : x;
	if (!nowMeasuring) {
		div.innerHTML = "TOP&nbsp;&nbsp;&nbsp;= " + top + "%<br>LEFT&nbsp;&nbsp;= " + left + "%";
	} else {
		var width  = Math.round((parseFloat(left) - parseFloat(measureOriginLeft)) * 10) / 10;
		var height = Math.round((parseFloat(top) - parseFloat(measureOriginTop)) * 10) / 10;
		var width  = (width === parseInt(width)) ? width + ".0" : width;
		var height = (height === parseInt(height)) ? height + ".0" : height;
		div.innerHTML = "TOP&nbsp;&nbsp;&nbsp;= " + top + "%<br>LEFT&nbsp;&nbsp;= " + left + "%<br>WIDTH&nbsp;= " + width + "%<br>HEIGHT= " + height + "%";
	}
}

document.addEventListener("mouseup", onMouseUp);
function onMouseUp(e) {
	nowMeasuring = !nowMeasuring;
	if (nowMeasuring) {
		var x = Math.round((e.clientX / document.body.clientWidth * 1000)) / 10;
		var y = Math.round((e.clientY / document.body.clientHeight * 1000)) / 10;
		measureOriginTop = (y === parseInt(y)) ? y + ".0" : y;
		measureOriginLeft = (x === parseInt(x)) ? x + ".0" : x;
		measurePointDiv.style.cssText = 'position:absolute; top:0%; left:0%; border:1px solid #f00; border-radius:4px; background:#f00; width:1px; height: 1px; z-index:9999; opacity:0.5; color:#fff; font-size:20px;';
		measurePointDiv.style.top = e.clientY;
		measurePointDiv.style.left = e.clientX;
	} else {
		measurePointDiv.style.cssText = 'display: none;';
	}
}