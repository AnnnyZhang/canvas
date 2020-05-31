//画线
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight

ctx.fillStyle = 'tomato';               //填充颜色

let flg = 'false';
canvas.onmousedown = ()=> {
    flg = true;
}
canvas.onmousemove = (e)=> {
    if(flg === true){
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 16, 0 ,2*Math.PI);
        ctx.fill();
    }
}
canvas.onmouseup = ()=> {
    flg = false;
}
