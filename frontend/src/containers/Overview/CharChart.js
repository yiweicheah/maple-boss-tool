import { PieChart } from "@mantine/charts";
import { useEffect, useState } from "react";
import { colorPalette } from "../../data/colroPalette";

import "./CharChart.css";
import { Group, Text, Title } from "@mantine/core";
import { moneyConverter } from "../../functions/moneyConverter";

const CharChart = ({ chars, totalMesos }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let dataForChart = [];

    chars.forEach((char, i) => {
      const dataForChartToPush = {
        name: char.name,
        value: Math.round(char.totalMesos),
        bosses: char.totalBosses,
        color: colorPalette[i],
      };

      dataForChart.push(dataForChartToPush);
    });

    setChartData(dataForChart);
  }, [chars]);

  return (
    <div className="char-chart-div">
      <Title className="content-subtitle">
        Mesos Per Week:{" "}
        {totalMesos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </Title>
      <Group justify="center" className="char-chart-grp">
        <div className="char-chart-grp-cont left">
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
                <span className="bold-txt">{data.name}</span>: Killed{" "}
                <span className="bold-txt">{data.bosses}</span> bosses for{" "}
                <span className="bold-txt">{moneyConverter(data.value)}</span>{" "}
                mesos
              </Text>
            </div>
          ))}
        </div>
        <div className="char-chart-grp-cont right">
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
