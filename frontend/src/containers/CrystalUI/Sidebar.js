import { useState } from "react";
import {
  IconCheck,
  IconDeviceFloppy,
  IconFileAnalytics,
  IconSquareRoundedPlusFilled,
  IconX,
  IconCircleMinus,
} from "@tabler/icons-react";
import { NavLink, Text, TextInput } from "@mantine/core";

import "./Sidebar.css";

import { charBosses } from "../../data/charBosses";
import { moneyConverter } from "../../functions/moneyConverter";

const Sidebar = ({
  chars,
  setChars,
  delChar,
  charsBosses,
  setCharsBosses,
  setShow,
  setSelChar,
  saveData,
  totalMesos,
}) => {
  const [active, setActive] = useState("overview");
  const [edit, setEdit] = useState(false);
  const [newChar, setNewChar] = useState("");
  const [showedAdd, setShowedAdd] = useState(false);

  const showAdd = () => setShowedAdd(true);
  const hideAdd = () => setShowedAdd(false);

  const showEdit = () => setEdit(true);
  const closeEdit = () => setEdit(false);

  const saveClick = () => {
    if (window.confirm("Save data to local storage?")) {
      saveData();
    }
  };

  const addChar = (e) => {
    e.preventDefault();

    const charData = chars;
    const bossData = charsBosses;
    const newCharData = {
      name: newChar,
      totalMesos: 0,
      totalBosses: 0,
    };

    setChars([...charData, newCharData]);
    setCharsBosses({ ...bossData, [newChar]: charBosses });
    setNewChar("");
    hideAdd();
  };

  return (
    <div>
      <div className="save-div">
        <IconDeviceFloppy size="28" className="save-icon" onClick={saveClick} />
        <button
          onClick={() => {
            edit ? closeEdit() : showEdit();
          }}
          className={`edit-btn ${edit ? "done" : "edit"}`}
          radius="xl"
        >
          {edit ? "Done" : "Edit"}
        </button>
      </div>
      <NavLink
        label="Overview"
        onClick={() => {
          setShow("overview");
          setActive("overview");
          setSelChar(null);
        }}
        className="crystal-ui-nav"
        active={active === "overview" ? true : false}
        leftSection={<IconFileAnalytics />}
      />
      <div className="crystal-ui-nav title">Characters</div>
      {chars.map((char, i) =>
        edit ? (
          <div key={`char-nav-${i}`} className="crystal-ui-nav edit">
            {char.name}
            <IconCircleMinus
              color="red"
              className="crystal-ui-del-btn"
              onClick={() => {
                setShow("overview");
                setActive("overview");
                delChar(char);
              }}
            />
          </div>
        ) : (
          <NavLink
            key={`char-nav-${i}`}
            label={`${char.name}`}
            onClick={() => {
              setActive(char.name);
              setShow("char");
              setSelChar(char);
            }}
            className="crystal-ui-nav"
            active={active === char.name ? true : false}
            rightSection={
              <Text className="crystal-ui-nav-mesos">
                {moneyConverter(Math.round(char.totalMesos))}
              </Text>
            }
          />
        )
      )}
      {!showedAdd ? (
        <NavLink
          label="Add New Character"
          className="crystal-ui-nav"
          onClick={showAdd}
          leftSection={<IconSquareRoundedPlusFilled />}
        />
      ) : (
        <form onSubmit={addChar} className="new-char-form">
          <TextInput
            placeholder="Name"
            value={newChar}
            onChange={(e) => {
              setNewChar(e.target.value);
            }}
            className="crystal-ui-nav input"
            required
            radius="xl"
          />
          <button className="new-char-btn" type="submit">
            <IconCheck color="green" className="new-char-btn-icon" />
          </button>
          <button className="new-char-btn" onClick={hideAdd}>
            <IconX color="red" className="new-char-btn-icon" />
          </button>
        </form>
      )}
      <div className="crystal-ui-nav total">
        Total: {moneyConverter(Math.round(totalMesos))}
      </div>
    </div>
  );
};

export default Sidebar;
