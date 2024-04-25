import { useEffect, useState } from "react";
import "./BossesKilled.css";
import { Text } from "@mantine/core";

const BossesKilled = ({ charsBosses }) => {
  // const [bossesData, setBossesData] = useState([]);
  const [bossesKilled, setBossesKilled] = useState({});

  // console.log(bossesKilled);

  // console.log(charsBosses);

  useEffect(() => {
    let data = [];

    for (const char in charsBosses) {
      console.log(Object.keys(charsBosses[char]));
    }

    setBossesKilled(data);
  }, [charsBosses]);

  let dataToShow = [];

  for (const boss in bossesKilled) {
    dataToShow.push(<Text></Text>);
  }

  return <div>{dataToShow}</div>;
};

export default BossesKilled;
