import data from './data/worldbank/worldbank.js';

export { educación, empleo, negocios, población, salud, violencia};


//Filtro que proporciona los indicadores de "Mujeres y Educación"

function educación(countryData){
let newdataEducacion=[];
let indicatorEducacion=[];
  newdataEducacion = countryData.indicators.filter(indicators=>
  {
  return indicators.indicatorName.includes("mujeres")  && (indicators.indicatorName.includes("alfabetización")
  | indicators.indicatorName.includes("alfabetizados")|| indicators.indicatorName.includes("escolar")
  | indicators.indicatorName.includes("escuela")| indicators.indicatorName.includes("instrucción")
  | indicators.indicatorName.includes("Educación")| indicators.indicatorName.includes("inscripciones")
  | indicators.indicatorName.includes("ingreso"))
})


//  función que retorna los nombres de los indicadores de "Mujeres y Educación"
for (var i = 0; i < newdataEducacion.length; i++)
{
indicatorEducacion.push(newdataEducacion[i].indicatorName)

}

return indicatorEducacion;
}


//Filtro que proporciona los indicadores de "Mujeres y Empleo"
function empleo (countryData){
  let newdataEmpleo=[];
  let indicatorEmpleo=[];
  newdataEmpleo = countryData.indicators.filter(indicators=>
    {
      return indicators.indicatorName.includes("mujeres")  && indicators.indicatorName.includes("empleo")
      | indicators.indicatorName.includes("desempleadas")| indicators.indicatorName.includes("laboral")

    })
    //Funcion que proporciona el nombre de los indicadores
    for (var i = 0; i < newdataEmpleo.length; i++) {
      indicatorEmpleo.push(newdataEmpleo[i].indicatorName)
    }
    return indicatorEmpleo;
  }



  // //Filtro que proporciona los indicadores de "Mujeres y Población"

  function población(countryData){
    let newdataPoblacion=[];
    let indicatorPoblacion=[];
    newdataPoblacion = countryData.indicators.filter(indicators=>
      {
        return indicators.indicatorName.includes("mujeres")  && indicators.indicatorName.includes("población")

      })

      //  función que retorna los nombres de los indicadores de "Mujeres y Población"
      for (var i = 0; i < newdataPoblacion.length; i++)
      {
        indicatorPoblacion.push(newdataPoblacion[i].indicatorName)

      }
      return indicatorPoblacion;
  }

  //Filtro que proporciona los indicadores de "Mujeres y Negocios"
function negocios(countryData){
let newdataNegocios=[];
let indicatorNegocios=[];

newdataNegocios =countryData.indicators.filter(indicators=>
  {
  return indicators.indicatorName.includes("mujeres") && (indicators.indicatorName.includes("iniciar")
  | indicators.indicatorName.includes("Independientes")| indicators.indicatorName.includes("propiedad"))
  })

  //  función que retorna los nombres de los indicadores para Brasil "Mujeres y Negocios"
  for (var i = 0; i < newdataNegocios.length; i++)
  {
  indicatorNegocios.push(newdataNegocios[i].indicatorName)

  }
  return indicatorNegocios;
}


//Filtro que proporciona los indicadores de "Mujeres y Salud"
function salud (countryData){
let newdataSalud=[];
let indicatorSalud=[];

newdataSalud = countryData.indicators.filter(indicators=>
{
return indicators.indicatorName.includes("mujeres")  && (indicators.indicatorName.includes("Prevalencia")
| indicators.indicatorName.includes("nacer") || indicators.indicatorName.includes("anticoncepción"))
})

//  función que retorna los nombres de los indicadores de"Mujeres y Salud"
for (var i = 0; i < newdataSalud.length; i++)
{
indicatorSalud.push(newdataSalud[i].indicatorName)
}
return indicatorSalud;
}

//Filtro que proporciona los indicadores de "Mujeres y violencia"
function violencia (countryData){
let newdataViolencia =[];
let indicatorViolencia =[];

newdataViolencia = countryData.indicators.filter(indicators=>
{
return (indicators.indicatorName.includes("mujeres")|indicators.indicatorName.includes("Mujeres"))  && (indicators.indicatorName.includes("violencia")
| indicators.indicatorName.includes("casaron")| indicators.indicatorName.includes("golpee"))
})

//  función que retorna los nombres de los indicadores para Brasil "Mujeres y violencia"
for (var i = 0; i < newdataViolencia.length; i++)
{
indicatorViolencia.push(newdataViolencia[i].indicatorName)
}
return indicatorViolencia;
}
