// ELEMENTS
const tRexElement = document.querySelector(".charecter");
const treeElement = document.querySelector('.block');
// RESTART PAGE ELEMNT
const restartPage = document.querySelector(".restart-page"); 
const restartBtn =  document.querySelector(".restart-btn"); 
// JUMP T-REX CAHRACTER WHEN SPACE IS CLICKED
document.addEventListener('keyup', (e) => {
    if (e.key == ' ' || e.key == 'Enter' || e.key == 'ArrowUp') {
        tRexElement.classList.add('jumpAnimate');
        // baad as chan sanie ejra mikne ama yebar
        setTimeout(() => {
            
            tRexElement.classList.remove('jumpAnimate');
        }, 500);
    }
    // if (e.keyCode == '32') {
    //     console.log('you clicked space');
    // }
    console.log(e.key);

})
// CALLS CHECK CONDITION FUNCTION EVERY 10MLS
// har chand sanie yebar tekrar mikone
const tRexInterval = setInterval(checkCondition, 10);
// CHECK IF WE LOST OR NOT
function checkCondition() {
    // parseInt for making the number integaer(sahih)
    const tRexTop = parseInt(window.getComputedStyle(tRexElement).top);
    const treeLeft = parseInt(window.getComputedStyle(treeElement).left);
    if ( treeLeft < 90  && tRexTop >= 230 ){
        tRexElement.style.top = `${tRexTop}px`;
        treeElement.style.display = "none";
        restartPage.classList.add("show-restart-page");
        clearInterval(tRexInterval);
    }
}
restartBtn.addEventListener('click', () => {
    restartPage.classList.remove("show-restart-page");
    tRexElement.style.top = ``;
    treeElement.style.display = 'block';
    setInterval(checkCondition, 10);
})