function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        document.getElementById('result').textContent = 'Please enter your date of birth.';
        return;
    }
    
    const dobDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    

    document.getElementById('result').textContent = (`Your age is ${age} years.`);
}