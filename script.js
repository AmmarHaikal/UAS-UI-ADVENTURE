document.getElementById("startButton").addEventListener("click", () => {
  const loading = document.getElementById("loadingScreen");
  loading.classList.add("show");

  // simulasi pindah halaman setelah loading
  setTimeout(() => {
    loading.innerHTML = "<p>Welcome to the Game!</p>";
    // kamu bisa ganti ini jadi window.location.href = "halaman2.html";
  }, 2000);
});
