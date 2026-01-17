if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sekhamet-pwa/sw.js")
      .then(() => console.log("Service Worker enregistré"))
      .catch(err => console.error("SW erreur", err));
  });
}
