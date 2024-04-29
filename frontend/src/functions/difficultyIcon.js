export const difficultyIcon = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return "https://firebasestorage.googleapis.com/v0/b/maple-boss-tool.appspot.com/o/images%2Fdifficulty%2Feasy.png?alt=media&token=5d89222b-35cf-407a-9011-32c8adcee393";
    case "Normal":
      return "https://firebasestorage.googleapis.com/v0/b/maple-boss-tool.appspot.com/o/images%2Fdifficulty%2Fnormal.png?alt=media&token=04ee00b4-7720-4d59-9bb2-ae8b9515f9e2";
    case "Hard":
      return "https://firebasestorage.googleapis.com/v0/b/maple-boss-tool.appspot.com/o/images%2Fdifficulty%2Fhard.png?alt=media&token=e405ce5c-3d87-454d-a6e9-fa774d8b5c1c";
    case "Chaos":
      return "https://firebasestorage.googleapis.com/v0/b/maple-boss-tool.appspot.com/o/images%2Fdifficulty%2Fchaos.png?alt=media&token=ccaca15d-4445-41f1-9c17-0b5cc2ccbfdf";
    case "Extreme":
      return "https://firebasestorage.googleapis.com/v0/b/maple-boss-tool.appspot.com/o/images%2Fdifficulty%2Fextreme.png?alt=media&token=f926c2d4-2bce-45c9-93ed-32c5b0a8b046";
    default:
      return "";
  }
};
