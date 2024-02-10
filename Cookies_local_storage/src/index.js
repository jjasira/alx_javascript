function setCookies() {
  const firstnameValue = document.getElementById("firstname").value;
  const emailValue = document.getElementById("email").value;

  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 10 * 24 * 60 * 60 * 1000);

  document.cookie = `firstname=${firstnameValue}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = `email=${emailValue}; expires=${expirationDate.toUTCString()}; path=/`;
}

function showCookies() {
  const cookiesParagraph = document.createElement("p");
  const cookiesValue = document.cookie;

  cookiesParagraph.innerHTML = `Cookies: ${cookiesValue}`;
  document.body.appendChild(cookiesParagraph);
}
