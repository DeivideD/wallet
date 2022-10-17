import Chart, { GoogleChartWrapperChartType } from "react-google-charts";

interface Props {
  chartType: GoogleChartWrapperChartType;
  width: string;
  height: string;
  data: [] | {};
  options: {};
}

export function MyChart(options: Props){
  return (
    <Chart
      chartType={options.chartType}
      width={options.width}
      height={options.height}
      data={options.data}
      options={options.options}
    />
  );
}