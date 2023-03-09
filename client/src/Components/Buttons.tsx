
import style from "styled-components";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Wrapper } from "./Layout";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
interface SelectProps {
  ps?: string;
  pe?: string;
  ms?: string;
  me?: string;
  fontSize?: string;
}
// const Button = styled.div<SelectProps>`
const Button = style.div<SelectProps>`
  background: #012761;
  color: white;
  padding-left: ${(props) => (props.ps ? props.ps : "25px")};
  padding-right: ${(props) => (props.pe ? props.pe : "25px")};
  margin-left: ${(props) => (props.ms ? props.ms : "25px")};
  margin-right: ${(props) => (props.me ? props.me : "25px")};
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "21px")};
  border-radius: 15px;
  cursor: pointer;
`;

const Select = style.select<SelectProps>`
  background: white;
  color: black;
  padding-left: ${(props) => (props.ps ? props.ps : "25px")};
  padding-right: ${(props) => (props.pe ? props.pe : "25px")};
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "21px")};
  border-radius: 10px;
`;
const PinkSwitch = styled(Switch)(({ theme }) => ({
  color: "yellow",
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#012761",
    // "&:hover": {
    //   backgroundColor: alpha("yellow", theme.palette.action.hoverOpacity),
    // },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#012761",
  },
}));

const label = { inputProps: { "aria-label": "Switch" } };
interface SwitchProps {
  switchState: any;
  setSwitchState: any;
}
const SwitchComp = (props: SwitchProps) => {
  return (
    <>
      <PinkSwitch
        {...label}
        defaultChecked
        onClick={(e: any) => {
          props.setSwitchState(e.target.checked);
        }}
      />
    </>
  );
};
export { Button, Select, SwitchComp };
