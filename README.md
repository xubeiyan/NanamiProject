# NanamiProject
>“我要做的可是一个脚本解释器！” ——xubeiyan    

#### 写在前面

目的是为了制作一个能在网页上玩文字类冒险游戏的引擎，方便在各种平板上玩。社内的另一个AVG引擎（Sogal）已经开发得像模像样了（说白了就是你自己战胜不了拖延症）。不知各位看过《樱花庄的宠物女孩》（さくら荘のペットな彼女）没有，其中一个外号比较微妙女主角就叫青山七海，七海的日文读法就是nanami了，扯远了。其实是参加的游戏社团的名字叫七海游戏文化社，所以就叫Nanami Project了~ ——作于2013年

自从GoogleCode停止了服务之后我就懒得动这个了，想想自己也是懒。不过有些原因，一是当时被一些事情所困扰，如果当时我写这个话估计现在就没空写这个了吧2333；二是本身对于NanamiProject的代码不是很满意，毕竟谁会用一个200毫秒主循环的程序呢2333。现在倒是有时间了，于是就慢慢的写一点是一点吧。 ——作于2016年   

AVG HTML ENGINE

#### 简介

一共分为了四个部分，背景（background），人物角色（character image），文字框（text window），以及某个精灵（sprite）层    


#### 语法

<>表示参数，[]表示可省略的参数    

##### 背景(background)相关

* `bg <background image>` 显示背景图
* `bgfadein <background image> [<time>] [<fade in style>]` 背景渐入    
* `bgfadeout` <background image> <time> <fade out style>` 背景渐出    

##### 背景音乐(background music)相关

* `playbgm <background music> [<repeat>]` 播放背景音乐   
* `stopbgm` 停止播放背景音乐    
* `fadeoutbgm [<fade out time>]` 逐渐消去背景音乐     

##### 音效(sound effect)相关

* `playse <sound effect>` 播放音效    

##### 人物角色(character image)相关

* `cishow <character image> [<position>]` 显示角色图像     
* `cihide [<position>]` 清除角色图像    

##### 文字框(text window)相关

* `text <text>` 显示一段文字    

#### 没想好这儿要写什么
