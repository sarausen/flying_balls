document.addEventListener("mousemove", createFizz);

function removeFizz(e){
    document.removeEventListener("mousemove", createFizz);
    document.removeEventListener("mouseup", removeFizz);
}

function createFizz(e){
    let x = e.clientX, y = e.clientY;
    let particle = createFizzParticle(x,y);
    document.body.appendChild(particle);
    setTimeout(() => {
        document.body.removeChild(particle);
    }, 8000);
    
}

function createFizzParticle(x,y){
    let fizz = document.createElement("div");
    fizz.classList.add("fizz-particle");
    setStyleProperty(fizz, "--offset-x", `${x}px`);
    setStyleProperty(fizz, "--offset-y", `${y}px`);
    setStyleProperty(fizz, "--particle-w", "2rem");
    setStyleProperty(fizz, "--particle-h", "2rem");
    return fizz;
}

function setStyleProperty(el, styleProp, styleVal){
    el.style.setProperty(styleProp, styleVal);
}