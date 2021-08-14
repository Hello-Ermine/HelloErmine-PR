import PropTypes from 'prop-types';
import { StyledDiv } from './style';

const Wrapper = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

Wrapper.propTypes = {
  children: PropTypes.array
};

export default Wrapper;
