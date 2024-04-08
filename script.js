function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => {
      if (section.id === sectionId) {
          section.style.display = 'block';
      } else {
          section.style.display = 'none';
      }
  });
}

function toggleAdditionalContent(contentId) {
  const additionalContent = document.getElementById(contentId);
  if (additionalContent) {
      additionalContent.style.display = additionalContent.style.display === "none" ? "block" : "none";
  }
}
