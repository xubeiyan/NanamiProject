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
			var bg = background(),
				srpt = script();
			
			bg.test();
		}
	}
	return that;
}