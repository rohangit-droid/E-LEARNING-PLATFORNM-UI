
document.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("courseProgress");
  const progressText = document.getElementById("progressText");

  if (progress && progressText) {
    progress.addEventListener("input", () => {
      progressText.textContent = progress.value + "%";
    });
  }
});
