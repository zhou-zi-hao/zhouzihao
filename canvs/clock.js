var dom  = document.getElementById('clock');
var ctx = dom.getContext('2d');  //获取画布
var width = ctx.canvas.width; //画布的宽度
var height = ctx.canvas.height;//画布的
var r = width / 2; //获取圆的半径
ctx.translate(r,r);//重构圆心 默认为画布的左上角
//绘制圆形
function drawBackground() {
    ctx.save();
    ctx.beginPath();//开始使用
    ctx.lineWidth = 10; //设置圆边框的宽度  像素
    //画圆的属性 arc   x,y为圆心的坐标 arc(x,y,半径，起始的弧度，结束的弧度，顺（false）/逆（true）) 默认为顺
    ctx.arc(0,0,r-5,0*Math.PI,2*Math.PI,false)
    ctx.stroke() //结束画布

    //为时刻表添加数字
    var hoursArr = [3,4,5,6,7,8,9,10,11,12,1,2];
    ctx.font = '18px Arial';
    //下面这两个是设置上下左右垂直居中的
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    hoursArr.forEach((item,index)=>{
        var rad = 2 * Math.PI /12 *index;
        var x = Math.cos(rad) * (r - 30);
        var y = Math.sin(rad) * (r - 30);
        //fillText(item,x,y) 填充文本  第一个参数为填充的文本  后面的x,y为填充的位置（坐标）
        ctx.fillText(item, x, y)
    })
    //设置每一时刻的圆点的颜色
    for(let i = 0; i < 60; i++){
        var rad = 2 * Math.PI /60 *i;
        var x = Math.cos(rad) * (r - 15);
        var y = Math.sin(rad) * (r - 15);
        ctx.beginPath()
        if(i%5 === 0){
            ctx.fillStyle = "#000";
            ctx.arc(x,y,2,0,2*Math.PI,false)
        }else{
            ctx.fillStyle = "#ccc";
            ctx.arc(x,y,2,0,2*Math.PI,false)
        }
        ctx.fill()
    }
}
//小时
function drawHour(hour,Minutes){
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 12 * hour;
    var mrad = 2 * Math.PI / 12 / 60 * Minutes;
    ctx.rotate(rad + mrad)
    ctx.lineWidth =5;
    ctx.lineCap = "round";
    ctx.moveTo(0,10);
    ctx.lineTo(0,-r / 2);
    ctx.stroke()
    ctx.restore();
}
//分针
function getMinutes(Minutes){
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 60 * Minutes;
    ctx.rotate(rad)
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.moveTo(0,10);
    ctx.lineTo(0,-r + 23);
    ctx.stroke();
    ctx.restore();
}
//秒针
function getMilliseconds(seconds){
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "red"
    var rad = 2 * Math.PI / 60 * seconds;
    ctx.rotate(rad)
    ctx.moveTo(-2,20);
    ctx.lineTo(2,20)
    ctx.lineTo(1,-r + 18)9
    ctx.lineTo(-1,-r + 18) 
    ctx.fill()
    ctx.restore();
}
//中心的小圆点
function get(){
    ctx.beginPath();
    ctx.fillStyle = "#fff"
    ctx.arc(0,0,3,0,2*Math.PI,false)
    ctx.fill();
}


function getBox() {
    ctx.clearRect(0,0,width,height);
    var times = new Date();
    var hour = times.getHours();
    var minutes = times.getMinutes();
    var seconds = times.getSeconds();
    drawBackground();
    // drawHour(hour,minutes);
    // getMinutes(minutes);
    getMilliseconds(seconds);
    get();
    ctx.restore()
}
getBox();
setInterval(getBox,1000);