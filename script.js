setInterval(() => {
    const star=document.createElement('div');
    star.classList.add('star-animation');
    star.style.top=`${Math.random()*100}%`;
    star.style.left=`${Math.random()*100}%`;
    document.body.appendChild(star);
    setTimeout(()=>{
        star.remove();
    },5000);
}, 1000);