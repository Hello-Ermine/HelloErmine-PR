import PropTypes from 'prop-types';
import { StyledDiv } from './style';

const Scene = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

Scene.propTypes = {
  children: PropTypes.object
};

export default Scene;
