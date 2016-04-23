/**
* 解释部分
*/
var script = function () {
	var status = ['wait', 'getscript', 'running'],
		statusIndex = 0,
		that = {
			// 执行指令内容
			execute: function (scriptContent) {
				var command = scriptContent.split(' ')[0],
					arguments = scriptContent.split(' ')[1];
				switch (scriptContent) {
					// 渐入切换图像
					case 'fade':
						var from = arguments.split(',')[0],
							to = arguments.split(',')[1],
							time = arguments.split(',')[2];
						if (time == undefined) {
							time = 1;
						}
						bg.fade(from, to, time);
						break;
					default:
						console.log("不支持的命令...");
						break;
				}
			}
			// 返回游戏状态
			getStatus: function () {
				if (status[statusIndex] != undefined) {
					return status[statusIndex];
				} else {
					return 'UndefinedState';
				}
			}
		}
	return that;
}