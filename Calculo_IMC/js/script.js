var form = document.querySelector('form');

  var imc=0;
  var resultado = document.getElementById('resultado');
	

form.addEventListener('submit',function(event){
  var altura =parseInt(form.altura.value);
	var peso = parseInt(form.peso.value);
  imc=(peso/Math.pow((altura/100),2)).toFixed(2);
 if(imc <16){
   resultado.innerHTML="Baixo peso muito grave "+imc+" kg/m²";
    }else if(imc >=16 && imc <=16.99){
      resultado.innerHTML="Baixo peso grave "+imc+" kg/m²";
    }else if(imc >=17.00 && imc<=18.49){
      resultado.innerHTML="Baixo peso "+imc+" kg/m²";
    }else if(imc >=18.50 && imc <=24.99){
      resultado.innerHTML="Peso normal "+imc+" kg/m²";
    }else if(imc >=25.00 && imc <=29.99){
      resultado.innerHTML="Sobrepeso "+imc+" kg/m²";
    }else if(imc >=30 && imc <=34.99){
      resultado.innerHTML="Obesidade grau I  "+imc+" kg/m²";
    }else if(imc >=35.00 && imc <=39.99){
      resultado.innerHTML="Obesidade grau II "+imc+" kg/m²";
    }else if(imc >=40.00){
      resultado.innerHTML="Obesidade grau III (obesidade mórbida) "+imc+" kg/m²";
    }
   event.preventDefault(); 
});

function SomenteNumero(e){
 var tecla=(window.event)?event.keyCode:e.which;
 if((tecla>47 && tecla<58)) return true;
 else{
 if (tecla==8 || tecla==0) return true;
 else  return false;
 }
}