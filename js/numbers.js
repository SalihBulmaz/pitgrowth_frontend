//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
     if (!startTimestamp) startTimestamp = timestamp;
     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
     let counting_num = Math.floor(progress * (end - start) + start);
    if(counting_num >= 1000){
        let thousands = Math.floor(counting_num / 1000)      
        let decimals = counting_num - parseInt(thousands * 1000)
        target.innerText = thousands + "." + decimals
    }
    else{
        target.innerText = counting_num
    }
     if (progress < 1) {
      window.requestAnimationFrame(step);
     }
    };
    window.requestAnimationFrame(step);
   };
   //#endregion - end of - number counter animation
   
   document.addEventListener("DOMContentLoaded", () => {
    counterAnim("#count2", 0, 156500, 3000);
    counterAnim("#count3", 0, 45, 3000);
    counterAnim("#count4", 0, 14, 3500);
   });
   