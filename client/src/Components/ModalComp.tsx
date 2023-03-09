import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Row, Col, Wrapper } from "./Layout";
import { P } from "./Typography";
import { CloseIcon } from "./Icons";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  paddingLeft: "30px",
  paddingRight: "30px",
  paddingTop: "10px",
  paddingBottom: "10px",
  outline: "none",
};
interface ModalCompProps {
  open: any;
  setOpen: any;
  data: any;
}
export default function ModalComp(props: ModalCompProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [aminoData, setAminoData] = useState<any>();
  useEffect(() => {}, []);
  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Wrapper className="d-flex flex-row justify-content-end mb-3">
              <CloseIcon
                style={{ fontSize: "31px", cursor: "pointer" }}
                onClick={handleClose}
              />
            </Wrapper>
            <Wrapper className="pt-5 pb-2 pe-5">
              {}
              <Wrapper className="d-flex flex-row justify-content-center align-items-center">
                {aminoData ? (
                  <>
                    <P size="31px" weight="500" className="me-5" lHeight="31px">
                      {aminoData?.name}:
                    </P>
                    <P size="31px" weight="500" lHeight="31px">
                      {aminoData?.val}
                    </P>
                  </>
                ) : null}
              </Wrapper>
            </Wrapper>
          </Box>
        </Modal>
      </div>
      <Modal
        open={props?.open > -1 ? true : false}
        onClose={() => {
          props.setOpen(-1);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Wrapper className="d-flex flex-row justify-content-end mb-3">
            <CloseIcon
              style={{ fontSize: "31px", cursor: "pointer" }}
              onClick={() => {
                props.setOpen(-1);
              }}
            />
          </Wrapper>
          {props?.open === 0 ? (
            <Row>
              {props?.data?.map((val: any, index: any) => {
                return (
                  <>
                    <Col md={4} lg={4} key={index} className="mb-2">
                      <Wrapper
                        className="d-flex flex-row justify-content-start align-items-center"
                        height="50px"
                        border="1px solid #012761"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setAminoData(val);
                          handleOpen();
                        }}
                      >
                        <Wrapper
                          bg="#FFC23B"
                          width="30px"
                          height="30px"
                          style={{ marginLeft: "-15px" }}
                        />
                        <P size="21px" weight="500" className="ms-3 mb-0">
                          {val?.name}:
                        </P>
                      </Wrapper>
                    </Col>
                  </>
                );
              })}
            </Row>
          ) : (
            <Wrapper className="pt-5 pb-2 pe-5">
              <Wrapper className="d-flex flex-row justify-content-center align-items-center">
                <P size="31px" weight="500" className="me-5" lHeight="31px">
                  {" "}
                  {props?.data?.name}:
                </P>
                <P size="18px" weight="400" lHeight="31px">
                  {props?.data?.val}
                </P>
              </Wrapper>
            </Wrapper>
          )}
        </Box>
      </Modal>
    </div>
  );
}