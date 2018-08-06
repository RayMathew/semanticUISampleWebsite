if (document.cookie.indexOf("raywebsitesession=Valid") === -1) {
   var address = location.href;
   console.log(address);
   location.href = address.split('index.html')[0] + 'login.html'
}
