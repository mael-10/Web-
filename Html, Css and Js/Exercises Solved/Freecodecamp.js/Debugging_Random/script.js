const backgrond = document.querySelector('body');
const buttonBackground = document.querySelector('.btn');
const hextCode = document.querySelector('#bg-hex-code');

const darkColorsArr = [ //Counter from zero (array inicialize from zero)
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020"
];

function changeText(hexTextCode){
    hextCode.innerText = hexTextCode;
}

function changeBackGround(){
    const colorRandom = Math.floor(darkColorsArr.length * Math.random()); //Math need a upper case
    console.log(colorRandom);
    backgrond.style.backgroundColor = darkColorsArr[colorRandom];
    changeText(darkColorsArr[colorRandom]);
}


buttonBackground.onclick = changeBackGround;