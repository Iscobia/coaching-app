if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sekhamet-pwa/sw.js")
      .then(() => console.log("Service Worker enregistré"))
      .catch(err => console.error("SW erreur", err));
  });
}

const ua = navigator.userAgent;

const isIOS = /iPhone|iPad|iPod/i.test(ua);
const isAndroid = /Android/i.test(ua);
const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
const isChrome = /Chrome/i.test(ua);

function showBrowserWarning(message) {
  const div = document.createElement("div");
  div.innerHTML = `
    <div style="
      position:fixed;
      inset:0;
      background:#000000cc;
      color:white;
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:9999;
      padding:20px;
    ">
      <div style="max-width:400px; text-align:center;">
        <p>${message}</p>
        <button onclick="this.parentNode.parentNode.remove()">
          J’ai compris
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(div);
}

if (isIOS && !isSafari) {
  showBrowserWarning(
    "Je remarque que Safari n’est pas ton navigateur principal. L’application peut ne pas fonctionner correctement sur un autre navigateur."
  );
}

if (isAndroid && !isChrome) {
  showBrowserWarning(
    "Je remarque que Chrome n’est pas ton navigateur principal. L’application peut ne pas fonctionner correctement sur un autre navigateur."
  );
}
