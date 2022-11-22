let id = window.location.search.split("=")[1]
console.log(id);
let img = document.querySelector('.img_carre');

if(id === "1"){
    document.querySelector('#title').textContent='Les Boucanier';
    img.src = "../assets/img/caraibes_martinique_boucaniers.jpg";
    localStorage.setItem('holiday', 'Les Boucanier');
}else if(id === "2"){
    document.querySelector('#title').textContent = 'Kamarina';
    img.src = "../assets/img/sicile_kamarina.jpg";
    localStorage.setItem('holiday', 'Kamarina');
}else if(id === "3"){
    document.querySelector('#title').textContent = 'Finohlu';
    img.src = "../assets/img/maldives_fino.jpg"
    localStorage.setItem('holiday', 'Finohlu');
}else if(id ==="4"){
    document.querySelector('#title').textContent = 'Albion sauvage'
    img.src = "../assets/img/maurice_albion.jpg"
    localStorage.setItem('holiday', 'Albion sauvage');
}else if(id ==="5"){
    document.querySelector('#title').textContent = 'Kabi'
    img.src = "../assets/img/maldives_kani.jpg"
    localStorage.setItem('holiday', 'Kabi');
}
else if(id ==="6"){
    document.querySelector('#title').textContent = 'Gregolimano'
    img.src = "../assets/img/maldives_kani.jpg"
    localStorage.setItem('holiday', 'Gregolimano');
}

document.querySelector('.trois').addEventListener('click', function() {
    let payement = localStorage.getItem("holiday");
    console.log(payement)
    if(payement === null){
        alert('Sélectionner un voyage avant !');
    }
})