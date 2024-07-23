const scrollIndicator = document.getElementById("scrollIndicator");
const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
function updateScrollIndicator() {
  const ScrollPercentage = (window.scrollY / totalScrollHeight) * 100;
  scrollIndicator.style.width = ScrollPercentage + "%";
}
window.addEventListener("scroll", updateScrollIndicator);
updateScrollIndicator();
