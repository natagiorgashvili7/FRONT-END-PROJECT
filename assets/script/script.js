// burger bar
const burger = document.getElementById("burger-menu");
const overlay = document.getElementById("overlay-menu");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  overlay.style.display = overlay.style.display === "flex" ? "none" : "flex";
});

const links = overlay.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    overlay.style.display = "none";
    burger.classList.remove("active");
  });
});

// button:
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}

// fetch
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
  .then(response => response.json())
  .then(data => {
    const mealsDiv = document.getElementById("menu-container");

    data.meals.forEach(meal => {
      mealsDiv.innerHTML += `
        <div class="meal-card">
          <h2>${meal.strMeal}</h2>
          <img src="${meal.strMealThumb}" width="300">
          <p><b>Category:</b> ${meal.strCategory}</p>
        </div>
      `;
    });
});

// cookies
document.addEventListener("DOMContentLoaded", function () {
    const cookieBox = document.getElementById("cookieBox");
    const cookieChoice = localStorage.getItem("cookiesAccepted");
    if (cookieChoice !== null) {
        cookieBox.style.display = "none";
    }
});
function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    hideCookieBox();
}

function declineCookies() {
    localStorage.setItem("cookiesAccepted", "false");
    hideCookieBox();
}
function hideCookieBox() {
    const cookieBox = document.getElementById("cookieBox");
    if (cookieBox) {
        cookieBox.style.display = "none";
    }
}


// form validation
const form = document.getElementById("reservationForm");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const persons = document.getElementById("persons").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{9,12}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

  if (!firstName || !lastName || !email || !phone || !password || !date || !time || !persons) {
    error.textContent = "All fields are required!";
    return;
  }

  if (!emailRegex.test(email)) {
    error.textContent = "Invalid email format";
    return;
  }

  if (!phoneRegex.test(phone)) {
    error.textContent = "Phone must be 9-12 digits";
    return;
  }

  if (!passwordRegex.test(password)) {
    error.textContent = "Password must include uppercase and number";
    return;
  }

  localStorage.setItem("reservation", JSON.stringify({
    firstName, lastName, email, phone, date, time, persons
  }));

  alert("Reservation saved!");
  form.reset();
  error.textContent = "";
});

/* SHOW / HIDE PASSWORD */
function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}
