/**
* 游戏主题NanamiProject
*/
var np = function (titleText) {
	if (titleText == undefined) {
		titleText = "NanamiProject";
	}
	document.title = titleText;
	
	var that = {
		start: function (gameWidth, gameHeight) {
			// 根据传入参数变更游戏大小
			if (gameWidth == undefined && gameHeight == undefined) {
				gameWidth = 800;
				gameHeight = 600;
			}
			var stageClass = document.getElementsByClassName("stage");
			for (var stage in stageClass) {
				stageClass[stage].clientWidth = gameWidth;
				stageClass[stage].clientWeight = gameHeight;
			}
			
			var bg = document.getElementById("background-back").getContext('2d');
			bg.fillStyle = "#888888";
			bg.fillRect(0,0,800,800);
		}
	}
	return that;
}