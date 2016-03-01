/**
* 游戏主题NanamiProject
*/
var np = function (titleText) {
	var sys; 	// 系统

	// 设定标题
	if (titleText == undefined) {
		titleText = "Niconiconi~";
	} else {
		document.title = titleText;
	}
	
	var that = {
		// 启动游戏
		start: function (gameWidth, gameHeight) {
			// 根据传入参数变更游戏大小
			var stageClass = document.getElementsByClassName("stage");
			for (var i = 0; i < stageClass.length; ++i) {
				if (gameWidth == undefined) {
					stageClass[i].style.width = 800;
				} else {
					stageClass[i].style.width = gameWidth;
				}
				if (gameHeight == undefined) {
					stageClass[i].style.height = 600;
				} else {
					stageClass[i].style.height = gameHeight;
				}
			}
			sys = system(); // 系统类
			sys.scriptLoop(script); // 执行脚本
		}
	}
	return that;
}