var dom  = document.getElementById('loging');
var box = dom.getContext('2d');  //获取画布
var width = box.canvas.width; //画布的宽度
var height = box.canvas.height;//画布的
var r = width / 2;


function drawRound(x,y) {

            box.translate(r,r);  //重构圆心位置  不改变的话默认为  画布的左上角
            box.beginPath()
            box.lineWidth = 5;
            box.arc(0,0,r-3,x*Math.PI,y*Math.PI,false)
            box.stroke()



}
drawRound(1,2)

