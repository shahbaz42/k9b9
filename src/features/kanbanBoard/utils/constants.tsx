export const getColorForCharacter = (character: string) => {
  const colourMapForProfileBackground = {
    A: "#FFC542",
    B: "#FF5C93",
    C: "#4ADEDE",
    D: "#4D79FF",
    E: "#A85EFF",
    F: "#FF5C93",
    G: "#FFC542",
    H: "#4ADEDE",
    I: "#4D79FF",
    J: "#A85EFF",
    K: "#FFC542",
    L: "#FF5C93",
    M: "#4ADEDE",
    N: "#4D79FF",
    O: "#A85EFF",
    P: "#FF5C93",
    Q: "#FFC542",
    R: "#4ADEDE",
    S: "#4D79FF",
    T: "#A85EFF",
    U: "#FFC542",
    V: "#FF5C93",
    W: "#4ADEDE",
    X: "#4D79FF",
    Y: "#A85EFF",
    Z: "#FFC542",
  };
  return colourMapForProfileBackground[
    character.toUpperCase() as keyof typeof colourMapForProfileBackground
  ];
};
