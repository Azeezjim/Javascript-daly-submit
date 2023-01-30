const cursor = document.querySelector('cursor');

window.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageX + "px";
  cursor.setAttribute('data-fromTop', ((cursor.offsetTop - scrollY)))
});

window.addEventListener("mousemove", e => {
  const fromTop = cursor.getAttribute('data-fromTop')
  cursor.style.riight = scrollX + "px";
  cursor.style.top = scrollY + "px";
 })