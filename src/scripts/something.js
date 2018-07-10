export default () => {
    const button = document.querySelector('.button');
    const root = document.getElementById('root');

    button.addEventListener('click', () => {
        const rannumber1=Math.floor(Math.random() * 256 );
        const rannumber2=Math.floor(Math.random() * 256 );
        const rannumber3=Math.floor(Math.random() * 256 );
        const randomColor = `${rannumber1}, ${rannumber2}, ${rannumber3}`;
        root.style.backgroundColor = `rgb(${randomColor})`;
        button.innerHTML = 'CLICK ME AGAIN!!!'
    })
} 