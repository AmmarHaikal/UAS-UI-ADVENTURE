const startButton = document.getElementById("startButton");
const loadingScreen = document.getElementById("loadingScreen");

startButton.addEventListener("click", () => {
  // tampilkan layar loading
  loadingScreen.classList.add("show");

  // simulasi loading selama 2 detik
  setTimeout(() => {
    loadingScreen.innerHTML = "<p>Welcome to the Adventure!</p>";

    // setelah 2 detik lagi, pindah ke halaman map
    setTimeout(() => {
      window.location.href = "map.html";
    }, 2000);

  }, 2000);
});
