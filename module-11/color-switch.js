const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(randomIntegerFromInterval(0, colors.length - 1));

//==============OPTION N1====================
//  let intervalId;
//  refs.stop.disabled = true;

// const switchColor = function (){
//   intervalId =  setInterval(() => {
//     const randomColor = colors[randomIntegerFromInterval( 0, colors.length-1 )];
//     document.body.style.backgroundColor = randomColor;
//   }, 1000)
//   refs.start.disabled = true;
//   refs.stop.disabled = false;

// };

// const stopSwitch =  function (){
//   clearInterval (intervalId);
// refs.start.disabled = false;
// refs.stop.disabled = true;
// };


// refs.start.addEventListener('click', switchColor );   
// refs.stop.addEventListener('click', stopSwitch );


//===================OPTION N2====================

const switchColor = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return
    };
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
      document.body.style.backgroundColor = randomColor;

    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;

  },
};
refs.start.addEventListener('click', switchColor.start.bind(switchColor));
refs.stop.addEventListener('click', switchColor.stop.bind(switchColor));