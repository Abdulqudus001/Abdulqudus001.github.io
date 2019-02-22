/* Set the width of the side navigation to */

let sideNavWidth = '';
let marginLeft = ''

function getWidth(width) {
  if (width > 599 && width < 768) {
    sideNavWidth = '60vw';
    marginLeft = '0';
  } else if (width > 767 && width < 992) {
    sideNavWidth = '50vw';
    marginLeft = '0';
  } else if (width > 991 && width < 1200) {
    sideNavWidth = '35vw';
    marginLeft = '0';
  } else if (width > 1199 && width < 1300) {
    sideNavWidth = '30vw'
    marginLeft = '30vw';
  } else if (width > 1299) {
    sideNavWidth = '25vw'
    marginLeft = '25vw';
  } else {
    sideNavWidth = '80vw';
    marginLeft = '0';
  }
}

// Open sideNav if screen width is large enough
if (window.innerWidth > 1199) {
  getWidth(window.innerWidth);
  document.getElementById("mySidenav").style.width = sideNavWidth;
  document.getElementById('main').style.marginLeft = marginLeft;
  document.getElementById("sidenav-sidemenu").style.width = "60px";
  document.getElementById("sidenav-content").style.width = "80%";
  document.getElementById('toggle').style.display = 'none';
}


function openNav() {
  getWidth(window.innerWidth);
  document.getElementById("mySidenav").style.width = sideNavWidth;
  document.getElementById('main').style.marginLeft = marginLeft;
  document.getElementById("sidenav-sidemenu").style.width = "60px";
  document.getElementById("sidenav-content").style.width = "80%";
  document.getElementById('toggle').style.display = 'none';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById('main').style.marginLeft = '0';
  document.getElementById("sidenav-sidemenu").style.width = "0";
  document.getElementById("sidenav-content").style.width = "0";
  document.getElementById('toggle').style.display = 'block';
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