(function () {
    emailjs.init('saBOO2mulME3YKZ2t');
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_bxc3455', 'template_eeb146n', this)
        .then(function(response) {
            console.log('Success!', response.status, response.text);
            alert('Váš Email byl úspěšně odeslán');
            resetForm();
        }, function(error) {
            console.log('Failed...', error);
            alert('Ups, vyskytla se chybička!');
        });
});

function resetForm() {
    document.getElementById('contactForm').reset();
}

