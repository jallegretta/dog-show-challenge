document.addEventListener('DOMContentLoaded', () => {

    window.onload = (event) => {
        fetch('http://localhost:3000/dogs') 
            .then(response => response.json())
            .then(data => console.log(data));
      };
    
})