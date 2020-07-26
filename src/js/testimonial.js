export const Testimonial = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Eshy S.',
    text: 'I got one of the most delicious dishes from Eatbite! Thanks so much guys!',
  },

  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1589654312430-20441681ac7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Sarah W',
    text: "Eatbite is amazing. I've been using buying meal here and i have no rgrets.",
  },

  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Fred S.',
    text: 'Thanks so much for the yummy meal available to us!',
  },
];


export const sectionTestimonial = (() => {
  const secTestimonial = document.createElement('section');
  secTestimonial.setAttribute('class', 'testimonials text-center bg-light');
  secTestimonial.setAttribute('id', 'people');
  const secContainer = document.createElement('div');
  secContainer.setAttribute('class', 'container');
  const testimonialTitle = document.createElement('h2');
  testimonialTitle.setAttribute('class', 'mb-5 test');
  testimonialTitle.textContent = 'What people are saying...';
  const rowTestimonial = document.createElement('div');
  rowTestimonial.setAttribute('class', 'row');
  rowTestimonial.setAttribute('id', 'test');
  secContainer.appendChild(testimonialTitle);
  secContainer.appendChild(rowTestimonial);
  secTestimonial.appendChild(secContainer);
  return secTestimonial;
})();