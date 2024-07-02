document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    document.getElementById('infoName').innerText = name;
    document.getElementById('infoName2').innerText = 'Hi ' + name + ', ';
    document.getElementById('infoBirthdate').innerText = birthdate;
    document.getElementById('infoGender').innerText = gender;
    document.getElementById('infoMessage').innerText = message;

    const currentTime = new Date().toLocaleString();
    document.getElementById('currentTime').innerText = currentTime;
});
