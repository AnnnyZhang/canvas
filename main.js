//画线
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight

ctx.strokeStyle = 'tomato';              //图形轮廓颜色
ctx.lineWidth = 15;                      //线条粗细
ctx.lineCap = "round";                  //设置连线末端样式


//标记是否需要继续绘制
let flg = false;
//标记线条开始的位置
let begin ;

let isTouch = ctx.ontouchmove;
console.log(isTouch);

canvas.onmousedown = (e)=> {
    //当鼠标点击时，开始画线
    flg = true;
    begin = [e.clientX, e.clientY];     //记录线条开始画的位置
}
canvas.onmousemove = (e)=> {
    if(flg === true){
        drawLine(begin[0], begin[1], e.clientX, e.clientY);     //调用画线
    }
    //记录鼠标最后的位置
    begin = [e.clientX, e.clientY];
}
canvas.onmouseup = ()=> {
    flg = false;
}

//画线动作
let drawLine = (x1, y1, x2, y2)=>{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

