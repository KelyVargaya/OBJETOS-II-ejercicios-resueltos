var assert = require('assert');

function SumaN(numInicial,numFinal){
   var objeto ={
      inicio:numInicial,
      fin:numFinal ,
      sumaFinal : function (){
        var resul = 0;
        for (var i=objeto.inicio;i<=objeto.fin;i++){
          resul = resul +i;
        }
        return (resul);
      }
     }
    return objeto.sumaFinal();
   }


//Ejercicio 2
function superCoders(nombre,edad,ocupacion,genero){
  this.nombre=nombre;
  this.edad=edad;
  this.ocupacion=ocupacion;
  this.genero=genero;
  this.mensaje = function (){
    if((this.edad>=17) && (this.ocupacion == "Web Depelover") && (this.genero == "femenino")){

      return ("You're awesome");
    }
    else if ((this.edad>=17) && (this.ocupacion == "Estudiante Laboratoria") && (this.genero == "femenino")){
       return ("You're awesome");
    }
    else {
      return "Upsii";
    }
  }
};
  var persona1 = new superCoders("Kely", 21, "Estudiante Laboratoria", "femenino");
console.log (persona1.mensaje());


//Ejercicio3
function Arreglos(array){
	var texto=new Object();
	       for(var i=0;i<array.length;i++){
	var j=parseInt(i)+1;

    texto["propiedad"+j]=array[i];
	}

	var propiedades=Object.keys(texto)
	var resultado = "";
	      for(j in propiedades){
		resultado += propiedades[j] + "-->" + texto[propiedades[j]];
		if(j<propiedades.length-1)
			resultado = resultado + ";";
	}
	return resultado;
  //console.log resultado;
}

//Ejercicio 4

function Paciente(nombre, apellido, edad, genero, ciudad, pais) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.genero=genero;
    this.ciudad=ciudad;
    this.pais=pais;

    this.fichaPaciente = function() {

    return "Nombre: " + this.nombre + " Edad: " + this.edad + " Pais: " + this.pais;
}
}

var paciente1 = new Paciente("Kely", "Vargaya", 21, "Femenino", "Arequipa", "Peru");
//console.log(paciente1.fichaPaciente());


describe('Ejercicio de Objetos II, Ejercicio 1', function(){
    it('Retorna Suma de numeros que estan entre 1 y 10 debe retornar 55 ', function(){
      assert.equal(55, SumaN(1,10));
    });
  });

  describe('Ejercicio de Objetos II, Ejercicio 2', function(){
      it('Retorna Kely es estudiante de Laboratoria --> You are awesome!!! ', function(){
        assert.equal("You're awesome", persona1.mensaje());
      });
    });

    describe('Ejercicio de Objetos II, Ejercicio 3',function(){
		it("Retorna las propiedades concatenadas en un String",function(){
			assert.equal("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1",Arreglos([6,5,4,3,2,1]));
		});
	});

  describe('Ejercicio de Objetos II, Ejercicio 4',function(){
  it("Retorna la ficha de registro de la Paciente Kely ",function(){
    assert.equal("Nombre: Kely Edad: 21 Pais: Peru",paciente1.fichaPaciente());
  });
  });
