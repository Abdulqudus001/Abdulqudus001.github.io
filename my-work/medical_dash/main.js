/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "80vw";
  document.getElementById("sidenav-sidemenu").style.width = "20%";
  document.getElementById("sidenav-content").style.width = "80%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("sidenav-sidemenu").style.width = "0";
  document.getElementById("sidenav-content").style.width = "0";
}

let sidebarLinks = document.querySelectorAll(".selected-navmenu");
let lines = document.querySelectorAll(".hidden-line");
let screens = document.querySelectorAll(".screens");

sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    lines.forEach(item => {
      if (item.classList.value.indexOf("show-line") > -1) {
        item.classList.remove("show-line");
      }
    });
    screens.forEach(item => {
      if (item.id != link.getElementsByTagName("a")[0].innerHTML) {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    });
    link.getElementsByTagName("hr")[0].classList.add("show-line");
  });
});


let checkbox = document.getElementById('checkbox');
let otherCheckboxes = document.querySelectorAll('.checkboxes');


checkbox.addEventListener('change', () => {
  otherCheckboxes.forEach(checkboxes => {
    checkboxes.checked = !checkboxes.checked;
  })
});

let showMoreIcons = document.querySelectorAll('.show-extra');

showMoreIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-caret-down')) {
      let extra = document.getElementById(index + 1).style.display = 'block';
      icon.classList.replace('fa-caret-down', 'fa-caret-up')
    } else {
      let extra = document.getElementById(index + 1).style.display = 'none';
      icon.classList.replace('fa-caret-up', 'fa-caret-down')
    }


  })
});