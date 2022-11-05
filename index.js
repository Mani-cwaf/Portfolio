document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        setTimeout(() => {
            document.querySelector("body").dataset.ease = "true";
            document.querySelector("body").style.opacity = "1";
        }, 750);

        function ClearContent(lock) {
            if (lock) {
                Array.from(document.getElementsByClassName("menu-item")).forEach((item) => {
                    item.dataset.locked = "false";
                });
            } else {
                Array.from(document.getElementsByClassName("content")).forEach((item) => {
                    item.style.opacity = "0";
                });
            }
        }

        const menu = document.getElementById("menu");
        var locked = false;
        var lockedindex;

        ClearContent();

        Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
            item.onmouseover = () => {
                menu.dataset.activeIndex = index;
                ClearContent(false);
                document.getElementsByClassName("content")[index].style.opacity = "1";
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
                    document.getElementsByClassName("content")[lockedindex].style.opacity = "1";
                    menu.dataset.activeIndex = lockedindex;
                }
            };
        });
    } else {
        document.querySelector("body").dataset.ease = "false";
        document.querySelector("body").style.opacity = "0";
  }
};