import styled from "styled-components";

const SeparatorComponent = styled.hr`
  border-color: #f0eeee;
  border-top: 0;
  margin: ${({ withMargin }) => withMargin ? '1.2rem auto' : '0' } ;
`;

const Separator = (props) => {
  return <SeparatorComponent {...props} />;
};

export default Separator;
