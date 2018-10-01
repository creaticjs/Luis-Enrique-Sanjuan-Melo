var imgFilms =[
    {url:"https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Star_Wars_Phantom_Menace_poster.jpg/220px-Star_Wars_Phantom_Menace_poster.jpg"},
    {url:"https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg/220px-Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg"},
    {url:"https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg/220px-Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg"},
    {url:"https://is5-ssl.mzstatic.com/image/thumb/Video49/v4/ff/af/3a/ffaf3a5f-5aa1-e495-8846-b671def30067/pr_source.lsr/268x0w.png"},
    {url:"https://images-na.ssl-images-amazon.com/images/I/91%2BCydthCeL._SL1500_.jpg"},
    {url:"https://images-na.ssl-images-amazon.com/images/I/51UdiBUkerL.jpg"},
    {url:"https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg"}
]



function getPpeliculas(){

   // return new Promise( function(resolve, reject){
    console.log("peliculas");
    var petPeliculas = new XMLHttpRequest();
    petPeliculas.onreadystatechange = function() {

        if(this.readyState ==4 && this.status == 200){
            data = JSON.parse(this.responseText);
         console.log(data);

            var  p1 = document.getElementById('filmsCont');
    var films = '';
    var poster ='';
    console.log(data)
    //rganizar peliculas en orden
    var episodes = data.results.sort(function(a,b){
        if(a.episode_id > b.episode_id){
            return 1;
        }
    
        if(a.episode_id < b.episode_id){
            return -1;
        }
        return 0
    });


        console.log("episodios:" + episodes);
       //imprimir nombres
    episodes.forEach(function(e,i){
        films += "<p class='btnbox'>"+e.title+"</p>"
    p1.innerHTML = films;
    });
    //grid
    imgFilms.forEach(function(item){
    var picAux = `<div class="col-sm-3">
    <img src="${item.url}" style="width:300px;">
    <p ${episodes.title}> </p>
    </div>`;
        poster += picAux; 
    });

    document.getElementById('poster').innerHTML = poster;
    
        console.log("poster" + item.url)
        
      
           

        };
         
    }
    


    petPeliculas.open('GET', 'https://swapi.co/api/films/', true)
    petPeliculas.onerror= function(){ reject(Error('error de red')) }
    petPeliculas.send();

}

function getPersonajes(){

}
