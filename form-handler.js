// Form Submission
const contactForm = document.getElementById('deliveryForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message')?.value || '';
        
        // Construct WhatsApp message
        const whatsappMessage = `Bonjour ExpressDelivery!%0a%0aJe suis ${name}.%0a%0aJe souhaite utiliser votre service: ${service}.%0a%0aDétails:%0a${message}%0a%0aMon numéro: ${phone}`;
        
        // Open WhatsApp
        window.open(`https://wa.me/243894036799?text=${whatsappMessage}`, '_blank');
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        alert('Merci pour votre demande! Nous vous contacterons très rapidement sur WhatsApp.');
    });
}