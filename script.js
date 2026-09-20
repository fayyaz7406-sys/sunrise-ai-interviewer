document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  const status = document.getElementById("buttonStatus");
  const buttons = [
    document.getElementById("startInterview"),
    document.getElementById("startInterviewBottom")
  ].filter(Boolean);

  if (year) year.textContent = new Date().getFullYear();

  function startInterview() {
    if (!window.vapiInstance) {
      status.textContent = "Vapi is still loading. Please wait a moment and try again.";
      return;
    }

    try {
      // The Vapi HTML SDK instance starts the configured assistant call.
      vapiInstance.start();
      status.textContent = "Connecting to the AI interviewer… Please allow microphone access.";
    } catch (error) {
      console.error("Vapi start error:", error);
      status.textContent = "Could not start the interview. Open the browser console for the Vapi error.";
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", startInterview);
  });

  window.addEventListener("vapi-ready", () => {
    if (status) {
      status.textContent = "AI interviewer ready. Click Start AI Interview.";
    }
  });
});
