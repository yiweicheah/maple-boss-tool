import { useEffect, useState } from "react";
import "./BossesKilled.css";

import bossesIcon from "../../functions/bossesIcon";
import { colorPalette } from "../../data/colroPalette";
import { Group, Title } from "@mantine/core";
import { BarChart } from "@mantine/charts";

const BossesKilled = ({ charsBosses, totalBosses }) => {
  // const [bossesData, setBossesData] = useState([]);
  const [bossesKilled, setBossesKilled] = useState({});
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const updateBossesKilled = () => {
      let data = {};

      for (const char in charsBosses) {
        const tempChar = charsBosses[char];
        for (const boss in tempChar) {
          const tempBoss = tempChar[boss];

          if (tempBoss.active) {
            if (data[tempBoss.boss]) {
              data[tempBoss.boss] += 1;
            } else {
              data[tempBoss.boss] = 1;
            }
          }
        }
      }
      setBossesKilled(data);
    };

    updateBossesKilled();
  }, [charsBosses]);

  useEffect(() => {
    let data = [];
    const objectKey = Object?.keys(bossesKilled);
    for (const boss in bossesKilled) {
      const index = objectKey.indexOf(boss);
      data.push({
        name: boss,
        "Kill Count": bossesKilled[boss],
        color: colorPalette[index],
      });
    }

    setChartData(data);
  }, [bossesKilled]);

  // const visualize = () => {
  //   let dataToShow = [];

  //   for (const boss in bossesKilled) {
  //     dataToShow.push(
  //       <div className="bosses-killed-boss-div" key={boss}>
  //         <img src={bossesIcon(boss)} className="bosses-killed-boss-img" />
  //         {boss}: {bossesKilled[boss]}
  //       </div>
  //     );
  //   }
  //   return dataToShow;
  // };

  return (
    <div className="bosses-killed-div">
      <Title className="content-subtitle">
        Weely Bosses Killed: {totalBosses}
      </Title>
      <Group justify="center" className="bosses-killed-grp">
        <div className="visualize-div">
          {chartData
            ?.sort((x, y) => (x.name < y.name ? -1 : 1))
            .map((boss, i) => (
              <div className="bosses-killed-boss-div" key={i}>
                {/* <div
           className="char-chart-color-box"
           style={{ backgroundColor: boss.color }}
         ></div> */}
                <img
                  src={bossesIcon(boss.name)}
                  className="bosses-killed-boss-img"
                  alt={boss.name}
                />
                <span style={{ fontWeight: "bold" }}>{boss.name}</span>:{" "}
                {boss["Kill Count"]}
              </div>
            ))}
        </div>
        {/* <PieChart
          data={chartData}
          withLabelsLine
          // labelsPosition="inside"
          labelsType="percent"
          withLabels
          withTooltip
          tooltipDataSource="segment"
          className="bosses-chart"
          size={300}
        /> */}
        <BarChart
          data={chartData}
          dataKey="name"
          series={[{ name: "Kill Count", color: "#B06AB3" }]}
          // tickLine="y"
          className="bosses-chart"
          orientation="vertical"
          yAxisProps={{ width: 80 }}
          barProps={{ radius: 15 }}
          gridAxis="none"
        />
      </Group>
    </div>
  );
};

export default BossesKilled;
