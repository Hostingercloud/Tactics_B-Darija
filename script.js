const toggleBtn = document.getElementById("toggleNotes");
const notes = document.getElementById("notes");

toggleBtn.addEventListener("click", () => {
  if (notes.classList.contains("hidden")) {
    notes.classList.remove("hidden");
    toggleBtn.textContent = "Hide Tactical Notes";
  } else {
    notes.classList.add("hidden");
    toggleBtn.textContent = "Show Tactical Notes";
  }
});
