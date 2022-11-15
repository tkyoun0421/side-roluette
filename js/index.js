const clickBtn = document.querySelector(".click_btn");
const roluette = document.querySelector(".roluette");

// 룰렛에 들어갈 항목
const product = [
  "쇼핑지원금 100P", "쇼핑지원금 500P", "할인쿠폰 50%", "쇼핑지원금 1,000P", "쇼핑지원금 1p", "쇼핑지원금 10,000P", "할인쿠폰 50%", "쇼핑지원금 500P"
]
let rotateNum = 0;


//룰렛 돌리기
clickBtn.addEventListener("click", function() {

  if (clickBtn.innerHTML == "RESET") {
    roluette.style.transition = `all 0s`;
    roluette.style.transform = "rotate(0deg)";
    clickBtn.innerHTML = "START";
  } else {
    roluette.style.transition = `all 4s`;
    const TEN_LABS = 360;
    const random = Math.floor(Math.random() * product.length);
    const arc = 360 / product.length;
    const rotate = (random * arc) + TEN_LABS;

    roluette.style.transform = `rotate(-${rotate}deg)`;  
    clickBtn.style.pointerEvents = "none";  
    
    setTimeout(() => {
      alert(product[random] + "에 당첨되셨습니다!");
      clickBtn.innerHTML = "RESET";
      clickBtn.style.pointerEvents = "unset";
    }, 3000);
  }
});
