const changeColor = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['violet', 'red', 'pink', 'black', 'yellow','green','orange','lightblue', 'grey','brown'];

button.addEventListener('click', () => {
    const colorInd = Math.floor(Math.random() * colors.length);//0.0-0.9 * 10 => 5
    // console.log(colorInd)
    changeColor.style.backgroundColor = colors[colorInd];
});
