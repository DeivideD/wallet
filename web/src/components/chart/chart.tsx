
import Chart, { GoogleChartWrapperChartType } from "react-google-charts";

interface Props {
  chartType: GoogleChartWrapperChartType;
  width: string;
  height: string;
  data: [] | object;
  options?: object;
}

export function MyChart(options: Props): JSX.Element {
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