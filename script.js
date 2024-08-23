function updateCountdown() {
    const endDate = new Date('2025-02-24T00:00:00');
    const now = new Date();
    const timeDiff = endDate - now;

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const birthdayDate = endDate.toLocaleDateString(undefined, options);
    document.getElementById('birthday-date').innerHTML = `Birthday: ${birthdayDate}`;

    if (timeDiff <= 0) {
        document.getElementById('timer').innerHTML = "🎉 It's the big day! 🎉";
        document.body.style.backgroundColor = "#ffeb3b"; 
        document.body.style.transition = "background-color 1s ease-in-out"; 
        setTimeout(() => {
            document.body.style.backgroundColor = "#ff5722"; 
        }, 500); 
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);