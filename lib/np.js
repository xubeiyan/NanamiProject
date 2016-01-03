/**
* 游戏主题NanamiProject
*/
var np = function (titleText) {
	if (titleText == undefined) {
		titleText = "NanamiProject";
	}
	document.title = titleText;
	
	var that = {
		init: function (gameWidth, gameHeight) {
			var bg = document.getElementById("background-back").getContext('2d');
			bg.fillStyle = "#888888";
			bg.fillRect(0,0,800,800);
		}
	}
	return that;
}