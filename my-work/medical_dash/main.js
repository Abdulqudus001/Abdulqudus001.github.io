/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "80vw";
  document.getElementById('sidenav-sidemenu').style.width = '20%';
  document.getElementById('sidenav-content').style.width = '80%';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById('sidenav-sidemenu').style.width = '0';
  document.getElementById('sidenav-content').style.width = '0';
}