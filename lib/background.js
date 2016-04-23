/**
* 背景background
*/
var background = function () {
	var bg = document.getElementById("background-back"),
		bgb = document.getElementById("background-back").getContext('2d'),
		bgf = document.getElementById("background-front").getContext('2d'),
		that = {
			// 渐入 从from渐入为to
			fade: function (from, to, time) {
				
			},
			// 测试用
			test: function () {
				bgf.fillStyle = '#888888';
				bgf.fillRect(0, 0, 800, 600);
			}
		}
	return that;
}