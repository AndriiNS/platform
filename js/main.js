document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
// header bnt

document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.querySelector(".mobile-nav-btn");
  const nav = document.querySelector(".header__inner-mobile");
  const menuIcon = document.querySelector(".nav-icon");

  navBtn.onclick = function () {
    nav.classList.toggle("header__inner-mobile--open");
    menuIcon.classList.toggle("nav-icon--active");
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
});
//
function openModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("modal--active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("modal--active");
  document.body.style.overflow = "";
}

document.querySelector(".modal__close").addEventListener("click", closeModal);

document.querySelector(".modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});
function copyToClipboard() {
  const copyText = document.getElementById("copyInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text
  document.execCommand("copy");

  // Show success message
  const successMessage = document.getElementById("copySuccessMessage");
  successMessage.textContent = "Address copied to clipboard!";
  successMessage.style.display = "block";

  // Hide the message after 2 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 2000);
}
