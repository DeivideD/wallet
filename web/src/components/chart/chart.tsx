
import Chart, { ChartWrapperOptions, GoogleChartWrapperChartType } from "react-google-charts";

interface Props {
  chartType: GoogleChartWrapperChartType;
  width: string;
  height: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  data: [] | {};
  options?: ChartWrapperOptions["options"];
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