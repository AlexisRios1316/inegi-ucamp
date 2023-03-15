const urlbase =
  "https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000002,1002000003/es/0700/true/BISE/2.0/bea5909f-649d-6068-8a50-fa2c46c2a3c7?type=json";
const urlTotal =
  "https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001/es/0700/true/BISE/2.0/bea5909f-649d-6068-8a50-fa2c46c2a3c7?type=json";

const chartPaisPoblacion = document.querySelector("#poblacion-pais");
const chartPoblacionTotal = document.querySelector("#Poblacion-Total");


document.addEventListener("DOMContentLoaded", () => {
  getApoyos();
  getTotal();
});

const getApoyos = async () => {
  const response = await fetch(urlbase);
  const json = await response.json();

  const { Series } = json; // destructori

  console.log("iniciado correctamente ");

  //mandar a mostrar el arreglo
  console.log(Series);

  //Destructor del recorrido
  return json.Series.map((item) => {
    item.OBSERVATIONS.map((subitem) => {
      console.log(subitem.OBS_VALUE);
    });

    const chartConfig = {
      type: "bar",
      data: {
        labels: json.Series.map((observations) => observations.INDICADOR),
        datasets: [
          {
            label: "Poblacion Total de : Hombres y Mujeres",
            data: [
              json.Series[0].OBSERVATIONS[0].OBS_VALUE,
              json.Series[1].OBSERVATIONS[0].OBS_VALUE,
            ],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
          },
        ],
      },
    };

    console.log(chartConfig);

    const chart = new Chart(chartPaisPoblacion, chartConfig);
  });
};

const getTotal = async () => {
  const response = await fetch(urlTotal);
  const json = await response.json();

  const { Series } = json; // destructori

  console.log("iniciado correctamente ");

  //mandar a mostrar el arreglo
  console.log(Series);

  //Destructor del recorrido
  return json.Series.map((item) => {
    item.OBSERVATIONS.map((subitem) => {
      console.log(subitem.OBS_VALUE);
    });

    const chartConfig1 = {
      type: "bar",
      data: {
        labels: json.Series.map((observations) => observations.INDICADOR),
        datasets: [
          {
            label: "Poblacion Total",
            data: [json.Series[0].OBSERVATIONS[0].OBS_VALUE],
            backgroundColor: ["rgba(153, 102, 255, 0.2)"],
          },
        ],
      },
    };

    console.log(chartConfig1);

    const chart = new Chart(chartPoblacionTotal, chartConfig1);
  });

  


};


