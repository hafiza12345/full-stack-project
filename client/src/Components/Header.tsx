import React, { useState, useEffect } from "react";
import { Wrapper, SpanWrapper } from "./Layout";
import { useNavigate } from "react-router-dom";
import { Image } from "./Image";
import { P } from "./Typography";
import { headerLinks } from "../utils/importantData";
import { useMediaQuery } from "react-responsive";
import Drawer from "./Drawer";
import styled from "styled-components";
const CardWrapper = styled(SpanWrapper)``;

const Header = () => {
  const isResponsive = useMediaQuery({ query: "(max-width: 487px)" });
  const [mount, setMount] = useState(false);
  const router = useNavigate();
  const [link, showLink] = useState(0);
  useEffect(() => {
    setMount(true);
  }, []);
  return mount ? (
    <>
      {isResponsive ? (
        <>
          <Wrapper
            // color="#012761"
            color="#FFC23B"
            className="d-flex flex-row justify-content-end align-items-center"
          >
            <Drawer />
          </Wrapper>
        </>
      ) : (
        <Wrapper
          color="#012761"
          className="d-flex flex-row justify-content-end align-items-center p-2"
        >
          {headerLinks.map((val, index) => {
            return (
              <>
                <CardWrapper
                  mb="0px"
                  mt="7px"
                  ms="25px"
                  me="25px"
                  key={index}
                  onClick={() => {
                    showLink(index);
                    router(`/${index === 0 ? "" : val.name.toLowerCase()}`, {
                      state: index + 1,
                    });
                  }}
                >
                  <P
                    weight="900"
                    size="22px"
                    className="mb-0 d-flex flex-row align-items-center"
                    style={{
                      height: "20px",
                      cursor: "pointer",
                      borderBottom: index === link ? "2px solid black" : "",
                    }}
                    color="#012761"
                  >
                    {val.name}
                  </P>
                </CardWrapper>
              </>
            );
          })}
        </Wrapper>
      )}

      <Wrapper className="text-end" bg="#012761">
        <Wrapper className="d-flex flex-column align-items-center mt-2">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={isResponsive ? 250 : 350}
            height={isResponsive ? 80 : 100}
          />
          <P
            className="mb-2"
            size={isResponsive ? "16px" : "21px"}
            color="#FFC23B"
            weight="450"
            tt="uppercase"
          >
            A real time database of antimicrobial peptides
          </P>
        </Wrapper>
      </Wrapper>
    </>
  ) : (
    <></>
  );
};

export default Header;
