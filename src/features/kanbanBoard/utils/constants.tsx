import {
  SparklesIcon,
  SunIcon,
  CheckCircleIcon,
  XMarkIcon,
  BacklogIcon,
  EllipsisHzIcon,
  TwoBarIcon,
  ThreeBarIcon,
  FourBarIcon,
  AlertIcon,
} from "../assets/icons";
import { APIData } from "../types";

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

export const PriorityMap = [
  "No Priority",
  "Low Priority",
  "Medium Priority",
  "High Priority",
  "Urgent",
];

export const getStatusIcon = (status: string): JSX.Element => {
  if (status === "Todo") {
    return <SunIcon />;
  } else if (status === "In progress") {
    return <SparklesIcon />;
  } else if (status === "Done") {
    return <CheckCircleIcon />;
  } else if (status === "Backlog") {
    return <BacklogIcon />;
  } else if (status === "Cancelled") {
    return <XMarkIcon />;
  } else {
    return <CheckCircleIcon />;
  }
};

export const getPriorityIcon = (priority: number): JSX.Element => {
  if (priority === 0) {
    return <EllipsisHzIcon />;
  } else if (priority === 1) {
    return <TwoBarIcon />;
  } else if (priority === 2) {
    return <ThreeBarIcon />;
  } else if (priority === 3) {
    return <FourBarIcon />;
  } else if (priority === 4) {
    return <AlertIcon />;
  } else {
    return <TwoBarIcon />;
  }
};

/**
   * This method returns the availability of the user
   * @param name 
   * @param data 
   * @returns 
   */
export const getAvailabilty = (name: string, data: APIData) => {
  const user = data.users.find((user) => user.name === name);
  return user?.available || false;
};
