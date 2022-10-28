const menu = document.getElementById("menu");
var locked = false;
var lockedindex;

function ClearContent(){
  Array.from(document.getElementsByClassName("content")).forEach((item) => {
    item.style.visibility = "hidden";
  });
}
ClearContent();

Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
      ClearContent();
      document.getElementsByClassName("content")[index].style.visibility = "visible";
    }
    item.onmousedown = () => {
      if (locked) {
        if (lockedindex == index) {
          locked = false;
        } else {
          lockedindex = menu.dataset.activeIndex;
        }
      } else {
        locked = true;
        lockedindex = menu.dataset.activeIndex;
      }
    }
    item.onmouseout = () => {
      ClearContent();
      if (locked) {
        document.getElementsByClassName("content")[lockedindex].style.visibility = "visible";
      }
    }
});