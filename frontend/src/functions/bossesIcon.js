const bossesIcon = (boss) => {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/maple-boss-tool.appspot.com/o/images%2Fbosses%2F";

  switch (boss) {
    case "Akechi Mitsuhide":
      return `${url}Akechi%20Mitsuhide.png?alt=media&token=a2cda70b-6a81-43ce-80bf-322b15521ac0`;
    case "Black Mage":
      return `${url}Black%20Mage.png?alt=media&token=61ac9cc0-7850-47d7-ab73-8ebb477be3ed`;
    case "Chosen Seren":
      return `${url}Chosen%20Seren.png?alt=media&token=8c80dae3-9a34-4662-b82b-a53df645a20c`;
    case "Crimson Queen":
      return `${url}Crimson%20Queen.png?alt=media&token=305c11af-b150-4d42-9596-ea4ef0a611e2`;
    case "Cygnus":
      return `${url}Cygnus.png?alt=media&token=7d18b7de-b8c5-43f6-9eb4-750e2418cd31`;
    case "Damien":
      return `${url}Damien.png?alt=media&token=ff7d6284-a8a8-482c-a9a2-e1e8f218e563`;
    case "Darknell":
      return `${url}Darknell.png?alt=media&token=ca4f62ce-905e-4a71-bf84-16a305260c36`;
    case "Gloom":
      return `${url}Gloom.png?alt=media&token=23f97701-1e4c-434c-b950-fcf8150a5035`;
    case "Guardian Angel Slime":
      return `${url}Guardian%20Angel%20Slime.png?alt=media&token=dde14873-06fb-4e8f-be3f-3c708b80fde6`;
    case "Hilla":
      return `${url}Hilla.png?alt=media&token=c3cfbb15-b707-4fba-8557-7c5cdfdc85a9`;
    case "Kaling":
      return `${url}Kaling.png?alt=media&token=907fada4-fbdb-4260-9a10-53041ab2f0b7`;
    case "Kalos the Guardian":
      return `${url}Kalos%20the%20Guardian.png?alt=media&token=2f5a447f-6216-40f0-b3fa-a659c0ae7edd`;
    case "Lotus":
      return `${url}Lotus.png?alt=media&token=ceb07be6-fb2d-4a95-9139-59de345f7f2b`;
    case "Lucid":
      return `${url}Lucid.png?alt=media&token=027bf141-d371-444c-9cdc-dd149c0ba4b9`;
    case "Magnus":
      return `${url}Magnus.png?alt=media&token=c3ce29f5-ca94-42c0-921e-1664ef6d4d77`;
    case "Papalatus":
      return `${url}Papalatus.png?alt=media&token=f9ab7a07-3c06-4444-aee4-04f5d7145a96`;
    case "Pierre":
      return `${url}Pierre.png?alt=media&token=15e8fc72-c867-42f7-8767-fcfd74ac172c`;
    case "Pink Bean":
      return `${url}Pink%20Bean.png?alt=media&token=8392111a-4731-4efd-bb86-693f06bce244`;
    case "Princess No":
      return `${url}Princess%20No.png?alt=media&token=8f67b98a-0b78-4296-820e-761a6f7c46d1`;
    case "Vellum":
      return `${url}Vellum.png?alt=media&token=055839d8-1b62-4ce4-89d5-834ceed1025c`;
    case "Verus Hilla":
      return `${url}Verus%20Hilla.png?alt=media&token=c1040b22-5db8-41c3-8fd8-b719a791ba9c`;
    case "Von Bon":
      return `${url}Von%20Bon.png?alt=media&token=2faa01f6-9bf2-4ee9-830a-c6be9d04a7a4`;
    case "Will":
      return `${url}Will.png?alt=media&token=c3f3da3c-4718-4c65-85fe-583e80ae6c1b`;
    case "Zakum":
      return `${url}Zakum.png?alt=media&token=04d2a9d2-9ad8-4e16-aa9d-e40dc675b486`;
    default:
      return "";
  }
};

export default bossesIcon;
