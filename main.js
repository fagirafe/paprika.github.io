(function () {
  const modal = document.getElementById("projectModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const projectForm = document.getElementById("projectForm");
  const formMessage = document.getElementById("formMessage");

  function openModal() {
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (openModalBtn) {
    openModalBtn.addEventListener("click", openModal);
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  if (projectForm) {
    projectForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(projectForm);
      const data = Object.fromEntries(formData.entries());

      console.log("Form submitted:", data);

      if (formMessage) {
        formMessage.classList.remove("hidden");
      }

      projectForm.reset();

      setTimeout(function () {
        closeModal();
        if (formMessage) {
          formMessage.classList.add("hidden");
        }
      }, 1200);
    });
  }
})();
