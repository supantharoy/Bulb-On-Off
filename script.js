
btn = document.getElementById('btn');
img = document.querySelector('img');
image = document.getElementById('image');
icon = document.getElementById('icon')


control = () =>{

    if (btn.innerHTML == 'Turn On'){

        img.src = 'Bulb On.jpg';
        btn.innerHTML = 'Turn Off';
        document.title = "Bulb On";
        icon.href = 'Bulb On Icon.png';
    }

    else{

        img.src = `Bulb Off.jpg`;
        btn.innerHTML = 'Turn On';
        document.title = "Bulb Off";
        icon.href = 'Bulb Off Icon.png';
    }
}

btn.addEventListener('click', control)
