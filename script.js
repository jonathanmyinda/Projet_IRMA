// Scroll effect for header
         window.addEventListener('scroll', () => {
             const header = document.getElementById('header');
             if (window.scrollY > 50) {
                 header.classList.add('scrolled');
             } else {
                 header.classList.remove('scrolled');
             }
         });
 
         // Mobile menu toggle
         const menuToggle = document.getElementById('menuToggle');
         const navLinks = document.getElementById('navLinks');
 
         menuToggle.addEventListener('click', () => {
             menuToggle.classList.toggle('active');
             navLinks.classList.toggle('active');
         });
 
         // Close mobile menu when clicking on a link
         document.querySelectorAll('.nav-links a').forEach(link => {
             link.addEventListener('click', () => {
                 menuToggle.classList.remove('active');
                 navLinks.classList.remove('active');
             });
         });
 
         // Smooth scroll for anchor links
         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
             anchor.addEventListener('click', function (e) {
                 e.preventDefault();
                 const target = document.querySelector(this.getAttribute('href'));
                 if (target) {
                     const offsetTop = target.offsetTop - 80;
                     window.scrollTo({
                         top: offsetTop,
                         behavior: 'smooth'
                     });
                 }
             });
         });
 
         // Slides navigation
         let currentSlide = 0;
         const slides = document.querySelectorAll('.slide');
         const slideDots = document.querySelectorAll('.slide-dot');
 
         function showSlide(index) {
             slides.forEach((slide, i) => {
                 slide.classList.remove('active');
                 slideDots[i].classList.remove('active');
                 if (i === index) {
                     slide.classList.add('active');
                     slideDots[i].classList.add('active');
                 }
             });
             currentSlide = index;
         }
 
         slideDots.forEach((dot, index) => {
             dot.addEventListener('click', () => {
                 showSlide(index);
             });
         });
 
         // Auto-advance slides
         setInterval(() => {
             currentSlide = (currentSlide + 1) % slides.length;
             showSlide(currentSlide);
         }, 7000);
 
         // Programs filter
         const filterBtns = document.querySelectorAll('.filter-btn');
         const programCards = document.querySelectorAll('.program-card');
 
         filterBtns.forEach(btn => {
             btn.addEventListener('click', () => {
                 const filter = btn.getAttribute('data-filter');
                 
                 filterBtns.forEach(b => b.classList.remove('active'));
                 btn.classList.add('active');
 
                 programCards.forEach(card => {
                     if (filter === 'all') {
                         card.style.display = 'block';
                     } else {
                         const type = card.getAttribute('data-type');
                         card.style.display = type === filter ? 'block' : 'none';
                     }
                 });
             });
         });
 
         // Testimonials slider
         let currentTestimonial = 0;
         const testimonials = document.querySelectorAll('.testimonial');
         const testimonialDots = document.querySelectorAll('.testimonial-dot');
 
         function showTestimonial(index) {
             testimonials.forEach((testimonial, i) => {
                 testimonial.classList.remove('active');
                 testimonialDots[i].classList.remove('active');
                 if (i === index) {
                     testimonial.classList.add('active');
                     testimonialDots[i].classList.add('active');
                 }
             });
             currentTestimonial = index;
         }
 
         testimonialDots.forEach((dot, index) => {
             dot.addEventListener('click', () => {
                 showTestimonial(index);
             });
         });
 
         // Auto-advance testimonials
         setInterval(() => {
             currentTestimonial = (currentTestimonial + 1) % testimonials.length;
             showTestimonial(currentTestimonial);
         }, 8000);
 
         // Modal functions
         function openModal(type) {
             let modalId;
             switch(type) {
                 case 'apply':
                     // Scroll to admission form
                     document.getElementById('candidater').scrollIntoView({ behavior: 'smooth' });
                     return;
                 case 'brochure':
                     modalId = 'brochureModal';
                     break;
                 case 'events':
                     modalId = 'eventsModal';
                     break;
                 case 'research':
                     modalId = 'researchModal';
                     break;
                 default:
                     return;
             }
             document.getElementById(modalId).classList.add('active');
         }
 
         function closeModal(modalId) {
             document.getElementById(modalId).classList.remove('active');
         }
 
         // Close modal when clicking outside
         document.querySelectorAll('.modal').forEach(modal => {
             modal.addEventListener('click', (e) => {
                 if (e.target === modal) {
                     modal.classList.remove('active');
                 }
             });
         });
 
         // Download brochure function
         function downloadBrochure() {
             // Simulate download
             console.log('Téléchargement de la brochure IRMA 2025...');
             closeModal('brochureModal');
             
             // In a real application, this would trigger an actual download
             // window.location.href = '/path/to/brochure.pdf';
         }
 
         // Admission form submission
         document.getElementById('admissionForm').addEventListener('submit', (e) => {
             e.preventDefault();
             
             // Get form data
             const formData = new FormData(e.target);
             const data = Object.fromEntries(formData);
             
             console.log('Candidature soumise:', data);
             
             // Reset form
             e.target.reset();
             
             // Show success modal
             document.getElementById('successModal').classList.add('active');
             
             // In a real application, this would send data to a server
         });
 
         // Contact form submission
         document.getElementById('contactForm').addEventListener('submit', (e) => {
             e.preventDefault();
             
             // Get form data
             const formData = new FormData(e.target);
             const data = Object.fromEntries(formData);
             
             console.log('Message envoyé:', data);
             
             // Reset form
             e.target.reset();
             
             // Show success modal
             document.getElementById('contactSuccessModal').classList.add('active');
             
             // In a real application, this would send data to a server
         });
 
         // Newsletter form submission
         document.getElementById('newsletterForm').addEventListener('submit', (e) => {
             e.preventDefault();
             
             const email = e.target.querySelector('input[type="email"]').value;
             
             console.log('Newsletter inscription:', email);
             
             // Reset form
             e.target.reset();
             
             // Show success modal
             document.getElementById('newsletterSuccessModal').classList.add('active');
             
             // In a real application, this would send data to a server
         });
 
         // File upload label update
         document.getElementById('portfolio').addEventListener('change', (e) => {
             const fileName = e.target.files[0]?.name || 'Aucun fichier sélectionné';
             const label = e.target.parentElement.querySelector('.file-upload-label span');
             if (e.target.files[0]) {
                 label.textContent = `Fichier sélectionné: ${fileName}`;
             }
         });
 
         // Animation on scroll (optional enhancement)
         const observerOptions = {
             threshold: 0.1,
             rootMargin: '0px 0px -100px 0px'
         };
 
         const observer = new IntersectionObserver((entries) => {
             entries.forEach(entry => {
                 if (entry.isIntersecting) {
                     entry.target.style.opacity = '1';
                     entry.target.style.transform = 'translateY(0)';
                 }
             });
         }, observerOptions);
 
         // Observe elements for animation
         document.querySelectorAll('.program-card, .event-card, .research-card, .stat-card').forEach(el => {
             el.style.opacity = '0';
             el.style.transform = 'translateY(20px)';
             el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
             observer.observe(el);
         });