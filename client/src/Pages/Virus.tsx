import React, { useState, useEffect } from "react";
import { Spacer } from "../Components/Spacer";
import { SearchBar, Wrapper } from "../Components/Layout";
import PaginationComp from "../Components/Pagination/PaginationComp";

const Virus = () => {
  const [mount, setMount] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [searchVal, setSearchVal] = useState("");

  const [data, setData] = useState<any>();
  const [filteredList, setFilteredList] = useState(data ? data : null);

  const GettingData = async () => {
    const res = await fetch("http://localhost:5000/virus_database", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const dataMain = await res.json();

    // if (dataMain.message === "done") {
      setData(dataMain.data);
      console.log(dataMain.data);
      setMount(true);
      console.log("Data fetched successfully:", dataMain.data);
    // } else {
    //   setMount(false);
    // }
  };

  useEffect(() => {
    async function loadData() {
      await GettingData();
    }
    loadData();
    return () => {};
  }, []);

  const filterBySearch = () => {
    // Access input value
    const query = searchVal;
    // Create copy of item list
    var updatedList = [...data];
    // Include all elements which includes the search query

    updatedList = updatedList.filter((item) => {
      if (selectedOption == 2) {
        return (
          item.ref.Accession.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
      } else if (selectedOption == 1) {
        return item.ref.GI.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      } else {
        return item.protein_link_title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }
    });

    // Trigger render with updated values
    setFilteredList(updatedList);
  };
  return mount ? (
    <>
      <Spacer height="70px" />
      <SearchBar
        switchState={switchState}
        setSwitchState={setSwitchState}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        filterBySearch={filterBySearch}
      />
      <Wrapper className="d-flex flex-column justify-content-center align-items-center mt-5">
        <PaginationComp
          data={filteredList ? filteredList : data}
          pageName="virus"
          switchState={switchState}
          setSwitchState={setSwitchState}
        />
      </Wrapper>
    </>
  ) : (
    <>No Data</>
  );
};

export default Virus;
// import React, { useState, useEffect } from "react";
// import { Spacer } from "../Components/Spacer";
// import { SearchBar, Wrapper } from "../Components/Layout";
// import PaginationComp from "../Components/Pagination/PaginationComp";

// const Virus = () => {
//   const [mount, setMount] = useState(false);
//   const [data, setData] = useState([]);
//   const [filteredList, setFilteredList] = useState([]);
//   const [switchState, setSwitchState] = useState(false);


//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/virus_database");
//       const data = await response.json();
//       return { data };
//     } catch (error) {
//       console.error(error);
//       return { data: [] };
//     }
//   };
  
  
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return mount ? (
//     <>
//       <Spacer height="30px" />
//       {/* <SearchBar /> */}
//       <SearchBar
//   switchState={false}
//   setSwitchState={() => {}}
//   selectedOption={0}
//   setSelectedOption={() => {}}
//   searchVal=""
//   setSearchVal={() => {}}
//   filterBySearch={() => {}}
// />

//       <Wrapper
//         className="d-flex flex-column justify-content-center align-items-center mt-5"
//         width="100%"
//       >
//         <PaginationComp
//           data={filteredList ? filteredList : data}
//           pageName="virus"
//           switchState={switchState}
//           setSwitchState={setSwitchState}
          
//         />
//       </Wrapper>
//     </>
//   ) : (
//     <>Loading...</>
//   );
// };

// export default Virus;




// import  { useState, useEffect } from "react";
// import { Spacer } from "../Components/Spacer";
// import { SearchBar, Wrapper } from "../Components/Layout";
// import PaginationComp from "../Components/Pagination/PaginationComp";

// const Virus = () => {
//   const [mount, setMount] = useState(false);
//   const [switchState, setSwitchState] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(0);
//   const [searchVal, setSearchVal] = useState("");
//   const [data, setData] = useState<any>();
//   const [filteredList, setFilteredList] = useState<any>(null);
//   console.log("some funcs defined");

//   const GettingData = async () => {

//     const res = await fetch("http://localhost:5000/virus_database", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",

//       },
     
//     });
    
//     console.log("Got data");
//     const dataMain = await res.json();
//     console.log(dataMain);

//     // if (dataMain.message === "done") {
//       setData(dataMain.data);
//       setMount(true);
//       console.log("Data fetched successfully:", dataMain.data);
//     // } else {
//     //   setMount(false);
//     //   console.log("No data found:", dataMain.message);
//     // }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await GettingData();
//       console.log("Checking if data is being");
//     }
//     loadData();
//     return () => {};
//   }, [selectedOption]);
//   console.log("working perfectly");
//   const filterBySearch = () => {
//     // Access input value
//     const query = searchVal;
//     // Create copy of item list
//     var updatedList = [...data];
//     // Include all elements which includes the search query

//     updatedList = updatedList.filter((item) => {
//       if (selectedOption == 2) {
//         return (
//           item.ref.Accession.toLowerCase().indexOf(query.toLowerCase()) !== -1
//         );
//       } else if (selectedOption == 1) {
//         return item.ref.GI.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//       } else {
//         return item.protein_link_title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//       }
//     });

//     // Trigger render with updated values
//     setFilteredList(updatedList);
//   };
//   return mount ? (
    
//     <>
//       <Spacer height="70px" />
//       <SearchBar
//         switchState={switchState}
//         setSwitchState={setSwitchState}
//         selectedOption={selectedOption}
//         setSelectedOption={setSelectedOption}
//         searchVal={searchVal}
//         setSearchVal={setSearchVal}
//         filterBySearch={filterBySearch}
//       />
//       <Wrapper className="d-flex flex-column justify-content-center align-items-center mt-5">
//         <PaginationComp
//           data={filteredList ? filteredList : data}
//           pageName="virus"
//           switchState={switchState}
//           setSwitchState={setSwitchState}
          
//         />
//       </Wrapper>
//     </>
//   ) : (
//     <>No Data</>
//   );
  
// };
// export default Virus;

