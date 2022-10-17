import { useContext, useEffect } from "react";
import { PageContext } from "../../../contexts/page-context";
import { MyChart } from "../../chart";
import { Dashboard } from "../../dashboard";
import { Container } from "./style";

export function Home(){
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
    title: "My Wallet",
    pieHole: 0.4,
    is3D: true,
    backgroundColor: "transparent",
  };

  useEffect(() => {
    setPage('home');
  }, [setPage]);

  return(
    <Container>
      <Dashboard />
      <div>
        <MyChart chartType="PieChart" width="70%" height="500px" data={data} options={options}/>
      </div>
    </Container>
  );
}
