document.getElementById('leadForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let isValid = true;

    // নাম চেক
    if (name === '') {
        document.getElementById('nameError').innerText = 'অনুগ্রহ করে আপনার নাম লিখুন।';
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = '';
    }

    // ইমেইল চেক
    if (email === '') {
        document.getElementById('emailError').innerText = 'অনুগ্রহ করে আপনার ইমেইল লিখুন।';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // যদি কোনো ভুল থাকে, তবে ফর্ম সাবমিট হবে না
    if (!isValid) {
        event.preventDefault();
    }
});
