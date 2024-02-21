

fetch('https://whatyearisit-backend-psi-eight.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        console.log('Année :', data);
        document.querySelector('#year').textContent = data.year;
});