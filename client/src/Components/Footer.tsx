import React from "react";
import { Wrapper } from "./Layout";
import { Spacer } from "./Spacer";
import { P } from "./Typography";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const Footer = () => {
  const isResponsive = useMediaQuery({ query: "(max-width: 487px)" });
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <Spacer height={isResponsive ? "20px" : "20px"} />

      <Wrapper
        className="d-flex flex-column justify-content-center align-items-center ps-2 pe-2"
        style={{
          position: path === "/" ? "fixed" : "static",
          bottom: path === "/" ? 0 : "",
        }}
        bg="#012761"
        width="100%"
        height="80px"
      >
        <P
          size="18px"
          className="mb-1 pt-1 text-center"
          color="#FFC23B"
          weight="400"
        >
          Copyright &copy;2023: Microbial Genomics and Bioinformatics (MGBio), Integrative Biology Laboratory (IBG), ASAB, NUST, Islamabad.
        </P>
        <P
          className="mb-0 text-center"
          color="#FFC23B"
          weight="500"
          size={isResponsive ? "14px" : "16px"}
        >
          https://mgbio.asab.nust.edu.pk/
        </P>
      </Wrapper>
    </>
  );
};

export default Footer;
