import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: uppercase;
  border: 1px solid black;
  border-radius: 4px;
  margin: 10px;
  padding: 5px;

  :hover {
    color: orangered;
  }
`;

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="14" />
      {children}
    </StyledLink>
  );
};

export default BackLink;
