canvas.onclick = (e)=> {
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = e.clientX + 'px';
    div.style.top = e.clientY + 'px';
    div.style.width = 6 + 'px'
    div.style.height = 6 + 'px'
    div.style.borderRadius = '50%';
    div.style.background = 'tomato';
    canvas.appendChild(div);
}