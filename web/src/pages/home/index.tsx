import { useContext, useEffect } from "react";
import { MyChart } from "../../components/chart";
import { Dashboard } from "../../components/dashboard";
import { PageContext } from "../../contexts/page-context";

import { ChartColumn, ChartDonat, Container } from "./style";

export function Home() {
  const { setPage } = useContext(PageContext);


  const data = [
    ["Task", "Hours per Day"],
    ["Fundos Imobiliarios", 40],
    ["Ações", 25],
    ["Renda Fixa", 10],
    ["Reserva de Emergencia", 25],
  ];

  const data2 = [
    ["Task", "Hours per Day"],
    ["BCFF11", 20],
    ["VISC11", 25],
    ["KNCR11", 5],
    ["CVCB3", 25],
  ];


  const options = {
    width: 800,
    title: "Carteira",
    pieHole: 0.4,
    is3D: false,
    backgroundColor: "transparent",
    legend:{position: 'right', textStyle: {color: 'blue', fontSize: 16}}, 
    titleTextStyle: { color: '#000',fontName: 'Poppins', fontSize: 25, bold: true, italic: 'false'},
    colors:['#33CC95','#cc2649', '#36bba6', '#ff4845']
  };

  const options2 = {
    width: 800,
    title: "Pricipais Ativos",
    pieHole: 0.4,
    is3D: false,
    backgroundColor: "transparent",
    legend:{position: 'right', textStyle: {color: 'blue', fontSize: 16}}, 
    titleTextStyle: { color: '#000',fontName: 'Poppins', fontSize: 25, bold: true, italic: 'false'},
    colors:['#cc2649','#33CC95', '#36bba6', '#ff4845']
  };



  const dataColumn = [
    ["Element", "total", { role: "style" }],
    ["Janeiro", 108.94, "#ef2b41"], // RGB value
    ["Fevereiro", 1100.49, "#33CC95"], // English color name
    ["Março", 600.45, "color: #ffc55f"], // CSS-style declaration
    ["Abrirl", 119.3, "#ef2b41"],
    ["maio", 1021.45, "color: #33CC95"], 
    ["Junho", 2040.45, "color: #33CC95"], 
    ["Julho", 1000.45, "color: #33CC95"], 
    ["Agosto", 1121.45, "color: #33CC95"], 
    ["Setembro", 1221.45, "color: #33CC95"], 
  ];

  const optionsColumn = {
    backgroundColor: "transparent",
  };


  useEffect(() => {
    setPage('home');
  }, [setPage]);

  return (
    <Container>
      <Dashboard />
      <ChartColumn>
        <MyChart chartType="ColumnChart" width="100%" height="400px" data={dataColumn} options={optionsColumn}/>
      </ChartColumn>
      <ChartDonat>
        <MyChart chartType="PieChart" width="50%" height="300px" data={data} options={options} />
        <MyChart chartType="PieChart" width="50%" height="300px" data={data2} options={options2} />
      </ChartDonat>
    </Container>
  );
}
