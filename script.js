
function toggleAdditionalContent(contentId) {
  const additionalContent = document.getElementById(contentId);
  if (additionalContent) {
      additionalContent.style.display = (additionalContent.style.display === "none") ? "block" : "none";
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      hideFooter();
      hideSlider(); 
      hideClients();
  }
}

function hideFooter() {
  const footer = document.querySelector('footer');
  footer.style.display = 'none';
}

function hideSlider() {
  const slider = document.querySelector('.slider');
  slider.style.display = 'none';
}

function hideClients() {
  const clientsSection = document.querySelector('.clients');
  clientsSection.style.display = 'none';
}

function showClients() {
  const clientsSection = document.querySelector('.clients');
  clientsSection.style.display = 'block';
}

document.querySelectorAll('nav a').forEach(link => {
  const sectionId = link.getAttribute('href').substring(1);
  link.addEventListener('mouseenter', function() {
      showSection(sectionId);
      hideFooter();
      hideSlider(); 
      hideClients();
  });
  link.addEventListener('click', function() {
      hideFooter();
      hideSlider(); 
      hideClients(); 
  });
});

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

document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;


  function showSlide(index) {

      slides.forEach(slide => {
          slide.style.display = 'none';
      });

      slides[index].style.display = 'block';
  }

  showSlide(currentSlide);

  function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  document.querySelector('.prev-btn').addEventListener('click', prevSlide);

  document.querySelector('.next-btn').addEventListener('click', nextSlide);
});

document.querySelector('.comp-name').addEventListener('mouseenter', function() {
  location.reload();
});

document.querySelector('.comp-name').addEventListener('click', function(event) {
  event.preventDefault(); 
  location.reload(); 
});
