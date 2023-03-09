
import styled from "styled-components";
const Input = styled.input`
  width: 550px;
  height: 37px;
  padding: 10px;
  border: none;
  border-radius: 10px;
`;
interface SearchInput {
  width?: string;
}
const SearchInput = styled.input`
  width: ${(props) => (props.width ? props.width : "500px")};
  height: ${(props) => (props.height ? props.height : "37px")};
  border-radius: 10px;
  color: #012761;
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
`;
export { Input, SearchInput };
