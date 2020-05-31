//画线
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight

ctx.fillStyle = 'tomato';               //填充颜色

var flg = 'true';
canvas.onclick = ()=> {
    if(flg){
        canvas.onmousemove = (e)=> {
            ctx.fillRect(e.clientX - 8, e.clientY - 8, 16, 16);           //控制矩形盒的x, y, width, height
        }
    }
    flg = false;
}
