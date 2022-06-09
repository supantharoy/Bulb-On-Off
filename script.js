
ctrl = document.getElementById('ctrl');
btn = document.getElementById('btn');
img = document.querySelector('img');
image = document.getElementById('image');
icon = document.getElementById('icon')

control = () =>{

    if (ctrl.innerHTML == 'Turn On'){

        img.src = `Turn On.jpg`;
        image.style.width = '295px';
        image.style.height = '177px';
        image.style.top = '23%';

        ctrl.innerHTML = 'Turn Off';
        document.title = "Bulb On";
        icon.href = 'Bulb On.png';
    }

    else{

        img.src = `Turn Off.jpg`;
        image.style.width = '200px';
        image.style.height = '120px';
        image.style.top = '22%';

        ctrl.innerHTML = 'Turn On';

        document.title = "Bulb Off";
        icon.href = 'Bulb Off.png';
    }
    
}

btn.addEventListener('click', control)

control()