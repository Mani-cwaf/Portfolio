function ClearContent(lock) {
  if (lock) {
      Array.from(document.getElementsByClassName("menu-item")).forEach((item) => {
          item.dataset.locked = "false";
      });
  } else {
      Array.from(document.getElementsByClassName("content")).forEach((item) => {
          item.style.visibility = "hidden";
      });
  }
}

document.onreadystatechange = function() {
  if (document.readyState == "complete") {
      document.querySelector("body").style.visibility = "visible";

      const menu = document.getElementById("menu");
      var locked = false;
      var lockedindex;

      ClearContent();

      Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
          item.onmouseover = () => {
              menu.dataset.activeIndex = index;
              ClearContent(false);
              document.getElementsByClassName("content")[index].style.visibility = "visible";
          };
          item.onmousedown = () => {
              if (locked) {
                  if (lockedindex == index) {
                      locked = false;
                      ClearContent(true);
                  } else {
                      ClearContent(true);
                      lockedindex = menu.dataset.activeIndex;
                      item.dataset.locked = "true";
                  }
              } else {
                  locked = true;
                  lockedindex = menu.dataset.activeIndex;
                  item.dataset.locked = "true";
              }
          };
          item.onmouseout = () => {
              ClearContent(false);
              if (locked) {
                  document.getElementsByClassName("content")[lockedindex].style.visibility = "visible";
                  menu.dataset.activeIndex = lockedindex;
              }
          };
      });
  } else {
      document.querySelector("body").style.visibility = "hidden";
  }
};