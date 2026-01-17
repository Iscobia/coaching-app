const calendarIcon = document.getElementById("calendar-icon");
const calendarOverlay = document.getElementById("calendar-overlay");
const closeCalendar = document.getElementById("close-calendar");

calendarIcon.addEventListener("click", () => {
  calendarOverlay.style.display = "block";
});

closeCalendar.addEventListener("click", () => {
  calendarOverlay.style.display = "none";
});

// Bouton sauvegarder paramètres
document.getElementById("save-settings").addEventListener("click", () => {
  const program = document.getElementById("program-select").value;
  const notifTime = document.getElementById("notif-time").value;
  const startDay = document.getElementById("start-day").value;
  localStorage.setItem("program", program);
  localStorage.setItem("notifTime", notifTime);
  localStorage.setItem("startDay", startDay);
  alert("Paramètres sauvegardés !");
  calendarOverlay.style.display = "none";
});
