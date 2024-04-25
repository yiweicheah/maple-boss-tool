import { Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";

import "./CharacterInfo.css";

const CharacterInfo = ({ selChar, chars, setChars, charsBosses }) => {
  const charName = selChar.name;

  const charIndex = chars.findIndex((char) => char.name === charName);

  const [bossesKilled, setBossesKilled] = useState(0);
  const [mesosEarned, setMesosEarned] = useState(0);

  useEffect(() => {
    if (selChar) {
      let mesos = 0;
      let bosses = 0;
      let charsData = chars;
      for (const boss in charsBosses[charName]) {
        if (charsBosses[charName][boss].active) {
          mesos +=
            charsBosses[charName][boss].price /
            Number(charsBosses[charName][boss].party);
          bosses += 1;
        }
      }

      charsData[charIndex] = {
        ...charsData[charIndex],
        totalMesos: mesos,
        totalBosses: bosses,
      };

      setChars(charsData);
      setBossesKilled(bosses);
      setMesosEarned(mesos);
    }
  }, [selChar, charsBosses, charName, charIndex, chars, setChars]);

  return (
    <div className="char-info-div">
      <Title className="content-title">{charName}</Title>
      <Text className="char-info-data">
        Weekly Bosses Killed: {bossesKilled}
      </Text>
      <Text className="char-info-data">
        Weekly Mesos Earned:{" "}
        {Math.round(mesosEarned)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </Text>
    </div>
  );
};

export default CharacterInfo;
