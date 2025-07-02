function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

function changeLang(select) {
  const lang = select.value;
  window.location.href = lang + ".html"; // تأكدي أن عندك ملفات en.html / fr.html / ar.html
}

// تشغيل الوضع الليلي تلقائيًا إذا كان مفعل من قبل
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});
