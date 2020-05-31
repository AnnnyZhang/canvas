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
        ctx.fillRect(e.clientX - 8, e.clientY - 8, 16, 16);
    }
}
canvas.onmouseup = ()=> {
    flg = false;
}
