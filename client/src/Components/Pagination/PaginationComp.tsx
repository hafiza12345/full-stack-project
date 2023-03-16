import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Wrapper, LinkP } from "../Layout";
import { P } from "../Typography";
import { useNavigate } from "react-router-dom";
interface PaginationProps {
  data: any;
  pageName: string;
  switchState: boolean;
  setSwitchState: any;
}
const PaginationComp = (props: PaginationProps) => {
  const router = useNavigate();
  const [mount, setMount] = useState(false);
  const [count, setCount] = useState(0);
  const [_DATA, set_DATA] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  let [page, setPage] = useState(1);
  const PER_PAGE = 20;

  function currentData(currentPage: any, itemsPerPage: any = PER_PAGE) {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return props.data.slice(begin, end);
  }

  function jump(page: any) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, count));
  }
  const handleChange = (e: any, p: any) => {
    setPage(p);
    jump(p);
  };
  useEffect(() => {
    const temp1 = Math.ceil(props.data?.length / PER_PAGE);
    temp1 ? setCount(temp1) : null;
    setMount(true);
  }, [props.data]);
  return props.data ? (
    <>
      <Stack spacing={2} className="mb-5">
        <Pagination
          count={count}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
          onChange={handleChange}
        />
      </Stack>
      <Wrapper style={{ maxWidth: "550px" }}>
        {props.switchState ? (
          <>
            <P>This is something else data...</P>
          </>
        ) : (
          <>
            {" "}
            <Wrapper className="ps-4">
              <P weight="500" color="#012761">
                Page {page} to {PER_PAGE} of {count}
              </P>
              {currentData(currentPage).map((val: any, index: any) => {
                return (
                  <>
                    <div key={index} className="mt-4">
                      <Wrapper className="d-flex flex-row">
                        <P
                          className="mb-0 pe-4"
                          weight="700"
                          size="20px"
                          color="#012761"
                        >
                          {index + page * PER_PAGE - 19}.
                        </P>
                        <Wrapper className="d-flex flex-column">
                          <LinkP
                            weight="500"
                            size="20px"
                            className="mb-1"
                            color="#012761"
                            // onClick={() => {
                            //   router(
                            //     `/${props.pageName}/${index + page * PER_PAGE - 19}`,
                            //     {
                            //       state: val.data,
                            //     }
                            //   );
                            // }}
                          >
                            {val.protein_link_title}
                          </LinkP>
                          <P weight="500" className="mb-0">
                            {val.protein_aa}
                          </P>
                          <Wrapper className="d-flex flex-row align-items-center">
                            <P size="12px" className="mb-1 me-2">
                              Accession: {val.accession_number}
                            </P>
                            <P size="12px" className="mb-1">
                              GI: {val.accession_number}
                            </P>
                          </Wrapper>
                          <Wrapper className="d-flex flex-row">
                            <LinkP
                              className="mb-0"
                              td="underline"
                              size="12px"
                              onClick={() => {
                                router(
                                  `/${props.pageName}/${val.link1}/${
                                    index + page * PER_PAGE - 19
                                  }`,
                                  {
                                    state: {
                                      name: "link1",
                                      data: val.link1Data,
                                    },
                                  }
                                );
                              }}
                            >
                              {val.link1}
                            </LinkP>
                            <LinkP
                              className="ms-3 mb-0"
                              td="underline"
                              size="12px"
                              onClick={() => {
                                router(
                                  `/${props.pageName}/${val.link2}/${
                                    index + page * PER_PAGE - 19
                                  }`,
                                  {
                                    state: {
                                      name: "link2",
                                      data: val.link2Data,
                                    },
                                  }
                                );
                              }}
                            >
                              {val.link2}
                            </LinkP>
                            <LinkP
                              className="ms-3 mb-0"
                              td="underline"
                              size="12px"
                              onClick={() => {
                                router(
                                  `/${props.pageName}/${val.link3}/${
                                    index + page * PER_PAGE - 19
                                  }`,
                                  {
                                    state: {
                                      name: "link3",
                                      data: val.link3Data,
                                    },
                                  }
                                );
                              }}
                            >
                              {val.link3}
                            </LinkP>
                          </Wrapper>
                        </Wrapper>
                      </Wrapper>
                    </div>
                  </>
                );
              })}
            </Wrapper>
          </>
        )}
      </Wrapper>
      <Stack spacing={2} className="mt-5">
        <Pagination
          count={count}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
          onChange={handleChange}
        />
      </Stack>
    </>
  ) : (
    <></>
  );
};

export default PaginationComp;