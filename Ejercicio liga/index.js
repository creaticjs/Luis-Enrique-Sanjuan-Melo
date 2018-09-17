var dataEquipos= [
    {
      
        nombre:"Real Madrid",
        categoria:"a",
        Urlimg:"",
        golFavor:"6",
        golContra:"1",
        puntos:"6"
    },
    {
        nombre:"Barcelona",
        categoria:"a",
        Urlimg:"",
        golFavor:"4",
        golContra:"0",
        puntos:"6"
    },
    {
        nombre:"Sevilla",
        categoria:"a",
        Urlimg:"",
        golFavor:"4",
        golContra:"1",
        puntos:"4"
    },
    {
        nombre:"Espanyol",
        categoria:"a",
        Urlimg:"",
        golFavor:"4",
        golContra:"3",
        puntos:"4"
    },
    {
        nombre:"Huesca",
        categoria:"a",
        Urlimg:"",
        golFavor:"4",
        golContra:"3",
        puntos:"4"
    },
    {
        nombre:"Athletic",
        categoria:"a",
        Urlimg:"",
        golFavor:"4",
        golContra:"3",
        puntos:"4"
    },
    {
        nombre:"Celta",
        categoria:"a",
        Urlimg:"",
        golFavor:"3",
        golContra:"2",
        puntos:"4"
    },
    {
        nombre:"Atletico",
        categoria:"a",
        Urlimg:"",
        golFavor:"2",
        golContra:"1",
        puntos:"4"
    },
    {
        nombre:"R. sociedad",
        categoria:"a",
        Urlimg:"",
        golFavor:"5",
        golContra:"5",
        puntos:"4"
    },
    {
        nombre:"Getafe",
        categoria:"a",
        Urlimg:"",
        golFavor:"2",
        golContra:"2",
        puntos:"4"
    },
    {
        nombre:"Fuenlabrada",
        categoria:"b",
        Urlimg:"",
        golFavor:"5",
        golContra:"1",
        puntos:"3"
    },
    {
        nombre:"Cultural Leonesa",
        categoria:"b",
        Urlimg:"",
        golFavor:"4",
        golContra:"0",
        puntos:"3"
    },
    {
        nombre:"Celta B",
        categoria:"b",
        Urlimg:"",
        golFavor:"3",
        golContra:"0",
        puntos:"3"
    },
    {
        nombre:"Ponferradina",
        categoria:"b",
        Urlimg:"",
        golFavor:"2",
        golContra:"0",
        puntos:"3"
    },
    {
        nombre:"Castilla",
        categoria:"b",
        Urlimg:"",
        golFavor:"2",
        golContra:"0",
        puntos:"3"
    },
    {
        nombre:"Unionistas de Salamanca",
        categoria:"b",
        Urlimg:"",
        golFavor:"1",
        golContra:"0",
        puntos:"3"
    },
    {
        nombre:"Deportivo Fabril",
        categoria:"b",
        Urlimg:"",
        golFavor:"2",
        golContra:"2",
        puntos:"1"
    },
    {
        nombre:"Internacional",
        categoria:"b",
        Urlimg:"",
        golFavor:"2",
        golContra:"2",
        puntos:"1"
    },
    {
        nombre:"Real Valladolid B",
        categoria:"b",
        Urlimg:"",
        golFavor:"2",
        golContra:"2",
        puntos:"1"
    },
    {
        nombre:"SS Ryes",
        categoria:"b",
        Urlimg:"",
        golFavor:"2",
        golContra:"2",
        puntos:"1"
    },
    

]

var priDivision= document.getElementById('primera')
var segDivision = document.getElementById('segunda')
var listEquiposA = document.getElementById('listaPrimera')
var listEquiposB = document.getElementById('listaSegunda')
var cont = document.getElementById('container')
var cuerpo = document.getElementById('tabla-cuerpo')
console.log(cuerpo);
var equiA = '';
var equiB = '';
var tabA = '';
var tabB = '';
var imagenEquipos= document.getElementById('imgEquipo');

     priDivision.onclick = function()

    {
            console.log("primera");
            var primeraEquipos = dataEquipos.filter(function(divisiona) {
                return divisiona.categoria == "a";
            });
            console.log(primeraEquipos);
           
            
           primeraEquipos.forEach(function(e,i){
             equiA += "<p>"+e.nombre+"</p><img src='"+e.Urlimg+"'>";
                    console.log(e.nombre);
            });
            cont.innerHTML = equiA;

           primeraEquipos.forEach(function(equi,i){
            
            tabA +="<tr><td>"+i+"</td><td>"+equi.nombre+"</td><td>"+equi.golContra+"</td><td>"+equi.golFavor+"</td><td>"+equi.puntos+"</td><tr>";

        });
            cuerpo.innerHTML = tabA;
      Fe

            class Fecha{
                
                
                    constructor (golesFavor, golesContra, p){
                        console.log('dentro de la clase');
                        this.golesFavor = golesFavor;
                        this.golesContra  = golesContra;
                        this.p=p;
                    }
                    actualizar(){
                
                       dataEquipos.forEach(function(gf,i){
                            this.golesfavor = golFavor;
                            console.log( `nuevo gol a favor: ${this.golFavor}`);
                       })
                
                
                }
            }

            var partido = new Fecha(3,0,0);

            
    }

    segDivision.onclick = function()

    {
            console.log("segunda");
            var segundaEquipos = dataEquipos.filter(function(divisionb) {
                return divisionb.categoria == "b";
            });
            console.log(segundaEquipos);

                        
            segundaEquipos.forEach(function(e,i){
              equiB += "<p>"+e.nombre+"</p><img src='"+e.Urlimg+"'>";
                    console.log(e.nombre);
            })

            cont.innerHTML = equiB;

            segundaEquipos.forEach(function(index,i){
                tabB +="<tr><td>"+index.nombre+"</td><td>"+index.golContra+"</td><td>"+index.golFavor+"</td><td>"+index.puntos+"</td><tr>";
            })

            cuerpo.innerHTML = tabB;


    }
    
        
    
