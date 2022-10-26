import { useContext, useEffect } from "react";
import { MyChart } from "../../components/chart";
import { Dashboard } from "../../components/dashboard";
import { PageContext } from "../../contexts/page-context";

import { ChartColumn, ChartDonat, Container } from "./style";

export function Home() {
  const { setPage } = useContext(PageContext);


  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], // CSS-style declaration
  ];

  const options = {
    width: 800,
    title: "My Wallet",
    pieHole: 0.4,
    is3D: false,
    backgroundColor: "transparent",
    legend:{position: 'right', textStyle: {color: 'blue', fontSize: 16}}, 
    titleTextStyle: { color: '#000',fontName: 'Poppins', fontSize: 25, bold: true, italic: 'false'}
  };


  const dataColumn = [
    ["Element", "Density", { role: "style" }],
    ["Janeiro", 108.94, "#33CC95"], // RGB value
    ["Fevereiro", 1100.49, "#33CC95"], // English color name
    ["Março", 1021.45, "color: #33CC95"], // CSS-style declaration
    ["Abrirl", 119.3, "#33CC95"],
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
        <MyChart chartType="PieChart" width="50%" height="300px" data={data} options={options} />
      </ChartDonat>
    </Container>
  );
}
