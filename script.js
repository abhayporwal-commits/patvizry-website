function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const mailtoLink = `mailto:contact@patvizry.com?subject=${encodeURIComponent(subject)} - Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoLink;
}