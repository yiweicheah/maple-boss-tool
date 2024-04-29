import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { notifications } from "@mantine/notifications";

import "./CrystalUI.css";

import { AppShell } from "@mantine/core";
import Sidebar from "../../containers/CrystalUI/Sidebar";
import Overview from "./Overview";
import Character from "./Character";

const CrystalUI = () => {
  const [chars, setChars] = useState([]);
  const [charsBosses, setCharsBosses] = useState({});
  const [show, setShow] = useState("overview");
  const [selChar, setSelChar] = useState(null);
  const [totalMesos, setTotalMesos] = useState(0);
  const [totalBosses, setTotalBosses] = useState(0);
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    const charsData = window.localStorage.getItem("chars");
    const bossesData = window.localStorage.getItem("bosses");
    if (charsData && bossesData) {
      const charsToParse = JSON.parse(charsData);
      const bossesToParse = JSON.parse(bossesData);
      setChars(charsToParse);
      setCharsBosses(bossesToParse);
    }
  }, []);

  useEffect(() => {
    const charsData = window.localStorage.getItem("chars");
    const bossesData = window.localStorage.getItem("bosses");

    if (
      JSON.stringify(chars) === charsData &&
      JSON.stringify(charsBosses) === bossesData
    ) {
      setHasChanged(false);
    } else {
      setHasChanged(true);
    }
  }, [chars, charsBosses]);

  useEffect(() => {
    if (hasChanged) {
      const handleOnBeforeUnload = (event) => {
        event.preventDefault();
        return (event.returnValue = "");
      };
      window.addEventListener("beforeunload", handleOnBeforeUnload, {
        capture: true,
      });
      return () => {
        window.removeEventListener("beforeunload", handleOnBeforeUnload, {
          capture: true,
        });
      };
    } else {
      return;
    }
  }, [hasChanged]);

  useEffect(() => {
    let dataForMesos = 0;
    let dataForBoss = 0;

    chars.forEach((char, i) => {
      dataForMesos += Math.round(char.totalMesos);
      dataForBoss += char.totalBosses;
    });

    setTotalMesos(dataForMesos);
    setTotalBosses(dataForBoss);
  }, [chars]);

  const delChar = (char) => {
    if (window.confirm(`Are you sure you want to delete ${char.name}?`)) {
      const charsData = chars;
      const charsBossesData = charsBosses;
      const charToDel = char.name;
      const newCharsData = charsData.filter((char) => char.name !== charToDel);
      delete charsBossesData[char.name];
      setChars(newCharsData);
      setCharsBosses(charsBossesData);
      notifications.show({
        title: "Character Deleted",
        message: `${char.name} has been deleted. Please remember to save your changes.`,
        color: "red",
      });
    }
  };

  //function  to save data
  const saveData = () => {
    window.localStorage.setItem("chars", JSON.stringify(chars));
    window.localStorage.setItem("bosses", JSON.stringify(charsBosses));
    notifications.show({
      title: "Saved Successful",
      message: "You data has been successfully saved to your local storage.",
      color: "green",
    });
  };

  //content to show
  const contentToShow = () => {
    switch (show) {
      case "overview":
        return (
          <Overview
            chars={chars}
            charsBosses={charsBosses}
            totalMesos={totalMesos}
            totalBosses={totalBosses}
          />
        );
      case "char":
        return (
          <Character
            selChar={selChar}
            chars={chars}
            setChars={setChars}
            charsBosses={charsBosses}
            setCharsBosses={setCharsBosses}
          />
        );
      default:
        return <Overview chars={chars} charsBosses={charsBosses} />;
    }
  };

  return (
    <div className="crystal-ui-div">
      <AppShell
        navbar={{
          width: 300,
          breakpoint: "sm",
        }}
        className="crystail-ui-app"
      >
        <AppShell.Navbar className="crystal-ui-navbar">
          <Sidebar
            chars={chars}
            setChars={setChars}
            delChar={delChar}
            charsBosses={charsBosses}
            setCharsBosses={setCharsBosses}
            setShow={setShow}
            setSelChar={setSelChar}
            saveData={saveData}
            totalMesos={totalMesos}
          />
        </AppShell.Navbar>
        <Fade>
          {" "}
          <AppShell.Main>{contentToShow()}</AppShell.Main>
        </Fade>
      </AppShell>
    </div>
  );
};

export default CrystalUI;
