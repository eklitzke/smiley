function hueToRGB(hue) {
  var h = hue / 60;
  var c = 1;
  var x = c * (1 - Math.abs(h % 2 - 1));
  c *= 255;
  x *= 255;
  if (h < 1) {
	return [c, x, 0];
  } else if (h < 2) {
	return [x, c, 0];
  } else if (h < 3) {
	return [0, c, x];
  } else if (h < 4) {
	return [0, x, c];
  } else if (h < 5) {
	return [x, 0, c];
  } else {
	return [c, 0, x];
  }
}

window.addEventListener("load", function () {
  var smiley = document.getElementById("smiley");

  var resize = function () {
	smiley.style.width = window.innerWidth + "px";
	smiley.style.height = window.innerHeight + "px";
  };
  window.addEventListener("resize", resize, false);
  resize();

  var size = 1;
  var angle = 0;
  var scaleGroup = smiley.getElementById("scale_group");
  var rotateGroup = smiley.getElementById("rotate_group");
  setInterval(function () {
	angle += 0.5;
	if (angle >= 360) {
	  angle -= 360;
	}
	var color = hueToRGB(angle);
	smiley.getElementById("face").setAttribute("fill", "rgb(" + parseInt(color[0]) + "," + parseInt(color[1]) + "," + parseInt(color[2]) + ")");
	size *= 1.0015;
	scaleGroup.setAttribute("transform", "scale(" + size + ")");
	rotateGroup.setAttribute("transform", "rotate(" + angle + " 0 0)");
  }, 10);
}, false);
