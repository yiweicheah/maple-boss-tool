import { Title } from "@mantine/core";
import CharChart from "../../containers/Overview/CharChart";
// import BossesKilled from "../../containers/Overview/BossesKilled";

const Overview = ({ chars, charsBosses, totalMesos }) => {
  const content = () => {
    if (chars.length === 0) {
      return (
        <div className="overview-div">
          <Title className="content-title">Please add a character first</Title>
        </div>
      );
    } else {
      return (
        <div className="overview-div">
          <Title className="content-title">Overview</Title>
          <CharChart
            chars={chars}
            charsBosses={charsBosses}
            totalMesos={totalMesos}
          />
          {/* <BossesKilled charsBosses={charsBosses} /> */}
        </div>
      );
    }
  };

  return <div>{content()}</div>;
};

export default Overview;
