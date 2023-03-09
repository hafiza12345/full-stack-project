import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { Image } from "./Image";
import { P } from "./Typography";
import { useMediaQuery } from "react-responsive";
import { Select, Button } from "../Components/Buttons";
import { SearchInput } from "../Components/Inputs";
import { SwitchComp } from "../Components/Buttons";
import { InfoIcon } from "./Icons";
import Tooltip from "@mui/material/Tooltip";
interface WrapperProps {
  size?: string;
  color?: string;
  width?: string;
  height?: string;
  bg?: string;
  borderRadius?: string;
  border?: string;
  ms?: string;
  me?: string;
  mt?: string;
  mb?: string;
  family?: string;
}
const Wrapper = styled.div<WrapperProps>`
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  border: ${(props) => (props.border ? props.border : "")};
  margin-left: ${(props) => (props.ms ? props.ms : "")};
  margin-right: ${(props) => (props.me ? props.me : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  font-family: ${(props) => (props.family ? props.family : "")};
`;
const SpanWrapper = styled.span<WrapperProps>`
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  margin-left: ${(props) => (props.ms ? props.ms : "")};
  margin-right: ${(props) => (props.me ? props.me : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
`;
const LinkP = styled(P)`
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
`;
interface CardCompProps {
  name: string;
  src: string;
}
const CardComp = (props: CardCompProps) => {
  return (
    <Wrapper
      width="200px"
      height="100px"
      color="#012761"
      border="1px solid black"
      borderRadius="10px"
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ cursor: "pointer" }}
    >
      <P weight="700">{props.name}</P>
      <Image src={props.src} alt="Submit" width={75} height={55} />
    </Wrapper>
  );
};
interface SearchBarProps {
  switchState: any;
  setSwitchState: any;
  selectedOption: number;
  setSelectedOption: any;
  searchVal: string;
  setSearchVal: any;
  filterBySearch: any;
}
const SearchBar = (props: SearchBarProps) => {
  const isResponsive = useMediaQuery({ query: "(max-width: 487px)" });
  return (
    <>
      <Wrapper className="d-flex flex-row align-items-center justify-content-center">
      <Wrapper className="d-flex flex-row justify-content-center align-items-center me-2">
          <Wrapper
            bg="#D3D3D3"
            borderRadius="15px"
            height="35px"
            className="d-flex flex-row justify-content-between align-items-center p-1"
          >
            <Tooltip title="Click here to get antimicrobial peptides data from all natural and synthetic origins">
              <InfoIcon sx={{ color: "white" }} />
            </Tooltip>
            <Wrapper
              className="d-flex flex-row align-items-center justify-content-center"
              height="25px"
              bg="#D3D3D3"
              borderRadius="15px"
            >
              <SwitchComp
                switchState={props.switchState}
                setSwitchState={props.setSwitchState}
              />
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Select
          style={{ width: isResponsive ? "20%" : "auto", height: "35px" }}
          ps={isResponsive ? "0px" : "25px"}
          pe={isResponsive ? "0px" : "25px"}
          fontSize={isResponsive ? "16px" : "21px"}
          onClick={(e: any) => {
            console.log("This is selected Value ", e.target.value);
            props.setSelectedOption(e.target.value);
          }}
          name="bioMedical"
          id="bioMedical"
        >
           <option value={0}>AMPs Name</option>
          <option value={1}>GI No</option>
          <option value={2}>Accession No</option>
        </Select>
        <SearchInput
          width={isResponsive ? "150px" : "500px"}
          height="35px"
          className={isResponsive ? "ms-1 me-1" : "ms-2 me-0"}
          name="searchVal"
          value={props.searchVal}
          onChange={(e) => {
            props.setSearchVal(e.target.value);
          }}
        />
        <Button
        style={{ height: "35px" }}
        className={`d-flex flex-row align-items-center justify-content-center ${
          isResponsive ? "ms-0 me-0" : ""
                    }`}
          ps={isResponsive ? "10px" : "25px"}
          pe={isResponsive ? "10px" : "25px"}
          ms="7px"
          fontSize={isResponsive ? "16px" : "21px"}
          onClick={(e) => {
            console.log("This is search function");
            props.filterBySearch();
          }}
        >
          Search
        </Button>
      </Wrapper>
    </>
  );
};
export {
  Row,
  Col,
  Container,
  Wrapper,
  SpanWrapper,
  CardComp,
  SearchBar,
  LinkP,
};
