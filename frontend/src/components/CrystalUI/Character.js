import Bosses from "../../containers/Character/Bosses";
import CharacterInfo from "../../containers/Character/CharacterInfo";

const Character = ({
  selChar,
  chars,
  setChars,
  charsBosses,
  setCharsBosses,
}) => {
  return (
    <div>
      <CharacterInfo
        selChar={selChar}
        chars={chars}
        setChars={setChars}
        charsBosses={charsBosses}
      />
      <Bosses
        selChar={selChar}
        chars={chars}
        setChars={setChars}
        charsBosses={charsBosses}
        setCharsBosses={setCharsBosses}
      />
    </div>
  );
};

export default Character;
