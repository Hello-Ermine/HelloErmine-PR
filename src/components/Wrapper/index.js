import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { StyledDiv } from './style';

const Wrapper = forwardRef(function Wrapper({ children }, ref) {
  return <StyledDiv ref={ref}>{children}</StyledDiv>;
});

Wrapper.propTypes = {
  children: PropTypes.array,
};

export default Wrapper;
