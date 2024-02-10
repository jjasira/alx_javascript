function setCookies() {
  const firstnameValue = document.getElementById("firstname").value;
  const emailValue = document.getElementById("email").value;

  document.cookie = `firstname=${firstnameValue}; path=/`;
  document.cookie = `email=${emailValue}; path=/`;
}

function showCookies() {
  const cookiesParagraph = document.createElement("p");
  const cookiesValue = document.cookie;

  cookiesParagraph.innerHTML = `Cookies: ${cookiesValue}`;
  document.body.appendChild(cookiesParagraph);
}
