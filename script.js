document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const responseDiv = document.getElementById('formResponse');
    
    responseDiv.textContent = `شكراً لك يا ${name}! تم استلام رسالتك بنجاح وسنتواصل معك قريباً.`;
    
    this.reset();
});
