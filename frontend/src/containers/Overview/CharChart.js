import { PieChart } from "@mantine/charts";
import { useEffect, useState } from "react";
import { colorPalette } from "../../data/colroPalette";

import "./CharChart.css";
import { Group, Text, Title } from "@mantine/core";

const CharChart = ({ chars }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let dataForChart = [];

    chars.forEach((char, i) => {
      const dataForChartToPush = {
        name: char.name,
        value: Math.round(char.totalMesos),
        color: colorPalette[i],
      };

      dataForChart.push(dataForChartToPush);
    });

    setChartData(dataForChart);
  }, [chars]);

  return (
    <div className="char-chart-div">
      <Title className="content-subtitle">Mesos Per Week</Title>
      <Group justify="center" className="char-chart-grp">
        <div className="char-chart-grp-cont">
          <Text className="char-chart-total">
            Total Character(s): {chartData.length}
          </Text>
          {chartData.map((data, i) => (
            <div className="char-chart-txt-div" key={i}>
              <div
                className="char-chart-color-box"
                style={{ backgroundColor: data.color }}
              ></div>
              <Text className="char-chart-txt">
                {data.name}:{" "}
                {data.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Text>
            </div>
          ))}
        </div>
        <div className="char-chart-grp-cont">
          <PieChart
            data={chartData}
            withLabelsLine
            labelsPosition="inside"
            labelsType="percent"
            withLabels
            withTooltip
            tooltipDataSource="segment"
            className="char-chart"
            size={300}
          />
        </div>
      </Group>
    </div>
  );
};

export default CharChart;
