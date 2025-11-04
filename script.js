document.getElementById("startButton").addEventListener("click", () => {
  const loading = document.getElementById("loadingScreen");
  loading.classList.add("show");

  // simulasi loading sebelum masuk ke halaman berikut
  setTimeout(() => {
    loading.innerHTML = "<p>Welcome to the Adventure!</p>";
    // kalau mau beneran pindah halaman, ubah ini jadi:
    // window.location.href = "halaman2.html";
  }, 2000);
});
