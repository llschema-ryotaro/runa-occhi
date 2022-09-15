export default function viewHiehgt() {
  function setFillHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  
  let vw = window.innerWidth;
  
  window.addEventListener("resize", () => {
    if (vw === window.innerWidth) {
      return;
    }
    vw = window.innerWidth;
    setFillHeight();
  });
  
  // 初期化
  setFillHeight();
}