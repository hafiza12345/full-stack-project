import React, { useState, useEffect } from "react";
import { Wrapper, Row, Col } from "../Components/Layout";
import { P } from "../Components/Typography";
import { useLocation } from "react-router";
import { Spacer } from "../Components/Spacer";
import { Image } from "../Components/Image";
import ModalComp from "../Components/ModalComp";
const LinkOpen = () => {
  const location = useLocation();
  const { state } = location;
  const { name, data } = state;
  const [mount, setMount] = useState(false);
  const [open, setOpen] = useState(-1);
  const [showValModal, setShowValModal] = useState(null);
  useEffect(() => {
    if (!name || !data) {
      setMount(false);
    } else {
      setMount(true);
    }
  }, [mount]);
  return mount ? (
    <>
      <Wrapper className="mt-5 mb-5 ms-5 me-5">
        {name === "link1" ? (
          <>
            <Wrapper>
              <Spacer height="30px" />
              <Row
                style={{
                  width: "auto",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Col md={3} lg={3} className="mb-2">
                  <ModalComp
                    open={open}
                    setOpen={setOpen}
                    data={showValModal}
                  />
                  <Wrapper
                    className="d-flex flex-row justify-content-start align-items-center"
                    style={{ cursor: "pointer" }}
                    border="1px solid #012761"
                    height="50px"
                    onClick={() => {
                      setOpen(0);
                      setShowValModal(data?.aminoAcid?.data);
                    }}
                  >
                    <Wrapper
                      bg="#FFC23B"
                      width="30px"
                      height="30px"
                      style={{ marginLeft: "-15px" }}
                    />
                    <P size="21px" weight="500" className="ms-3 mb-0">
                      {data?.aminoAcid?.name}:
                    </P>
                  </Wrapper>
                </Col>

                {/* 
                {data.aminoAcid.data.map((val: any, index: any) => {
                  return (
                    <>
                      <Col md={6} lg={6} xs={6} key={index}>
                        <Wrapper
                          width="70%"
                          className="d-flex flex-row justify-content-between ms-5"
                        >
                          <P>{val.name}</P>
                          <P>{val.val}</P>
                        </Wrapper>
                      </Col>
                    </>
                  );
                })} */}

                {data?.remainData?.map((val: any, index: any) => {
                  return (
                    <>
                      <Col md={3} lg={3} key={index} className="mb-2">
                        <Wrapper
                          className="d-flex flex-row justify-content-start align-items-center"
                          height="50px"
                          border="1px solid #012761"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setOpen(index + 1);
                            setShowValModal(val);
                          }}
                          // style={{
                          //   width: "65%",
                          // }}
                        >
                          <Wrapper
                            bg="#FFC23B"
                            width="30px"
                            height="30px"
                            style={{ marginLeft: "-15px" }}
                          />
                          <P size="21px" weight="500" className="ms-3 mb-0">
                            {val.name}:
                          </P>
                          {/* <Wrapper width="20%">
                            <P className="ms-5" size="16px">
                              {val.val}
                            </P>
                          </Wrapper> */}
                        </Wrapper>
                      </Col>
                    </>
                  );
                })}
              </Row>
              <Spacer height="10px" />
            </Wrapper>
          </>
        ) : null}

        {name === "link2" ? (
          <>
            <Wrapper className="mt-5 mb-5 ms-5 me-5">
              <Spacer height="10vh" />
              <P size="21px" weight="600">
                {data?.fastaTab?.title}
              </P>
              <P tt="underline" color="gray">
                {data?.fastaTab?.link}
              </P>
              <P>{data?.fastaTab?.ref}</P>
            </Wrapper>
            <Spacer height="21vh" />
          </>
        ) : null}
        {name === "link3" ? (
          <>
            <Wrapper className="mt-5 mb-5 ms-0 me-5">
              <P td="underline" size="25px" weight="600">
                {data.name}:
              </P>
              <Image
                className="img-fluid ms-5"
                src={data?.struct?.img}
                alt="Structure"
                width={450}
                height={200}
              />
            </Wrapper>
          </>
        ) : null}
      </Wrapper>
    </>
  ) : (
    <>No Data Found...</>
  );
};

export default LinkOpen;






















// import React, { useState, useEffect } from "react";
// import { Wrapper, Row, Col } from "../Components/Layout";
// import { P } from "../Components/Typography";
// import { useLocation } from "react-router";
// import { Spacer } from "../Components/Spacer";
// import { Image } from "../Components/Image";
// import ModalComp from "../Components/ModalComp";
// const LinkOpen = () => {
//   const location = useLocation();
//   const { state } = location;
//   const { name, data } = state;
//   const [mount, setMount] = useState(false);
//   const [open, setOpen] = useState(-1);
//   const [showValModal, setShowValModal] = useState(null);
//   useEffect(() => {
//     if (!name || !data) {
//       setMount(false);
//     } else {
//       setMount(true);
//     }
//   }, [mount]);
//   return mount ? (
//     <>
//       <Wrapper className="mt-5 mb-5 ms-5 me-5">
//         {name === "link1" ? (
//           <>
//             <Wrapper>
//             <Spacer height="30px" />
//               <Row
//                 style={{
//                   width: "auto",
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//               >
//                 <Col md={3} lg={3} className="mb-2">
//                   <ModalComp
//                     open={open}
//                     setOpen={setOpen}
//                     data={showValModal}
//                   />
//                   <Wrapper
//                     className="d-flex flex-row justify-content-start align-items-center"
//                     style={{ cursor: "pointer" }}
//                     border="1px solid #012761"
//                     height="50px"
//                     onClick={() => {
//                       setOpen(0);
//                       setShowValModal(data?.aminoAcid?.data);
//                     }}
//                   >
//                     <Wrapper
//                       bg="#FFC23B"
//                       width="30px"
//                       height="30px"
//                       style={{ marginLeft: "-15px" }}
//                     />
//                     <P size="21px" weight="500" className="ms-3 mb-0">
//                       {data?.aminoAcid?.name}:
//                     </P>
//                   </Wrapper>
//                 </Col>


//                     </P>

//                       {/* 
//                 {data.aminoAcid.data.map((val: any, index: any) => {
//                   return (
//                     <>
//                       <Col md={6} lg={6} xs={6} key={index}>
//                         <Wrapper
//                           width="70%"
//                           className="d-flex flex-row justify-content-between ms-5"
//                         >
//                           <P>{val.name}</P>
//                           <P>{val.val}</P>
//                         </Wrapper>
//                       </Col>
//                     </>
//                   );
//                 })} */}

// {data?.remainData?.map((val: any, index: any) => {
//                   return (
//                     <>
//                       <Col md={3} lg={3} key={index} className="mb-2">
//                         <Wrapper
//                           className="d-flex flex-row justify-content-start align-items-center"
//                           height="50px"
//                           border="1px solid #012761"
//                           style={{ cursor: "pointer" }}
//                           onClick={() => {
//                             setOpen(index + 1);
//                             setShowValModal(val);
//                           }}
                         
//                         >
//                           <Wrapper
//                             bg="#FFC23B"
//                             width="30px"
//                             height="30px"
//                             style={{ marginLeft: "-15px" }}
//                           />
//                           <P size="21px" weight="500" className="ms-3 mb-0">
//                             {val.name}:
//                           </P>
                          
//                             {/* <P className="ms-5" size="16px">
//                               {val.val}
//                             </P> */}
//                           </Wrapper>
//                           </Col>
//                     </>
//                   );
//                 })}
//            </Row>
//               <Spacer height="10px" />
//             </Wrapper>
//           </>
//         ) : null}
//         {name === "link2" ? (
//           <>
            
//             <Wrapper className="mt-5 mb-5 ms-5 me-5">
//             <Spacer height="10vh" />
//               <P size="21px" weight="600">
//               {data?.fastaTab?.title}
//               </P>
//               <P tt="underline" color="gray">
//               {data?.fastaTab?.link}
//               </P>
//               <P>{data?.fastaTab?.ref}</P>
//             </Wrapper>
//             <Spacer height="21vh" />
//           </>
//         ) : null}
//         {name === "link3" ? (
//           <>
//             <Wrapper className="mt-5 mb-5 ms-0 me-5">
//               <P td="underline" size="25px" weight="600">
//                 {data.name}:
//               </P>
//               <Image
//                 className="img-fluid ms-5"
//                 src={data?.struct?.img}
//                 alt="Structure"
//                 width={450}
//                 height={200}
//               />
//             </Wrapper>
//           </>
//         ) : null}
//       </Wrapper>
//     </>
//   ) : (
//     <>No Data Found...</>
//   );
// };

// export default LinkOpen;
