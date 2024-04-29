import "./Bosses.css";
import { weeklyBosses } from "../../data/bosses";
import bossesIcon from "../../functions/bossesIcon";
import { difficultyIcon } from "../../functions/difficultyIcon";
import { Card, Group, Radio, Select, Switch, Text } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { charBosses } from "../../data/charBosses";
import { nLomien } from "../../data/bossesTemplates";

const Bosses = ({ selChar, charsBosses, setCharsBosses }) => {
  // const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState("");
  // const [sort, setSort] = useState("");

  //get character name
  const charName = selChar.name;

  //handle function for changes of switch button
  const handleSwitchChg = (bossName, e) => {
    setCharsBosses({
      ...charsBosses,
      [charName]: {
        ...charsBosses[charName],
        [bossName]: {
          ...charsBosses[charName][bossName],
          active: e.currentTarget.checked,
        },
      },
    });
  };

  //handle function for selecting party number
  const handlePartyChg = (bossName, e) => {
    setCharsBosses({
      ...charsBosses,
      [charName]: {
        ...charsBosses[charName],
        [bossName]: {
          ...charsBosses[charName][bossName],
          party: e,
        },
      },
    });
  };

  //template data for select
  const templateData = [
    { label: "None", value: "none" },
    { label: "NLomien", value: "nLomien" },
  ];

  const handleTempleteSel = (e) => {
    const handleChg = (template) =>
      setCharsBosses({ ...charsBosses, [charName]: template });

    switch (e) {
      case "none":
        return handleChg(charBosses);
      case "nLomien":
        return handleChg(nLomien);
      default:
        return null;
    }
  };

  return (
    <div className="bosses-div">
      <Radio.Group
        name="bossMule"
        onChange={(e) => handleTempleteSel(e)}
        className="bosses-template"
      >
        <Text className="bosses-template-title">Boss Mule Presets</Text>
        <Group mt="xs" justify="center" className="bosses-template-grp">
          {templateData.map((data, i) => (
            <Radio value={data.value} label={data.label} key={i} />
          ))}
        </Group>
      </Radio.Group>
      <div className="bosses-grid">
        {weeklyBosses.map((boss, i) => (
          <Card
            key={`boss-card-${i}`}
            className={`boss-card ${
              charsBosses[charName][boss.name].active ? "active" : null
            }`}
          >
            <Switch
              color="lime"
              className="boss-card-switch"
              checked={charsBosses[charName][boss.name].active}
              onChange={(e) => handleSwitchChg(boss.name, e)}
              thumbIcon={
                charsBosses[charName][boss.name].active ? (
                  <IconCheck
                    style={{ width: "12px", height: "12px" }}
                    color="teal"
                    stroke={3}
                  />
                ) : (
                  <IconX
                    style={{ width: "12px", height: "12px" }}
                    color="red"
                    stroke={3}
                  />
                )
              }
            />
            <Card.Section className="boss-card-section">
              <img
                src={bossesIcon(boss.boss)}
                alt={`${boss.name}`}
                className="boss-card-img"
              />
              <img
                src={difficultyIcon(boss.difficulty)}
                alt={boss.difficulty}
                className="boss-card-icon"
              />
            </Card.Section>
            <div className="boss-card-content">
              <Text className="boss-card-name">{boss.name}</Text>
              <Text className="boss-card-price">
                {Math.round(
                  boss.price / Number(charsBosses[charName][boss.name].party)
                )
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Text>
              <Select
                className="boss-card-party"
                label="Party Member(s)"
                data={["1", "2", "3", "4", "5", "6"]}
                classNames={{ input: "boss-card-party.input" }}
                value={charsBosses[charName][boss.name].party}
                onChange={(e) => handlePartyChg(boss.name, e)}
                allowDeselect={false}
                radius="xl"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Bosses;
