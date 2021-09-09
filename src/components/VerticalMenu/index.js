/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Item, StyledDiv } from './style';

export const VerticalMenu = ({
  children,
  startIndex,
  active,
  // eslint-disable-next-line no-unused-vars
  onUpdateIndex = (index = 0) => {},
}) => {
  if (!active) {
    return null;
  }
  
  const itemCount = children.length;
  const [activeItemIndex, setActiveItemIndex] = useState(startIndex ?? Math.floor(itemCount / 2));

  const handleUpdateIndex = (event, index) => {
    if (index === activeItemIndex) {
      return;
    }

    setActiveItemIndex(index);
    onUpdateIndex(index);
  };

  return (
    <StyledDiv>
      {children.map((child, i) => {
        return (
          <Item
            key={i}
            data-index={i}
            onClick={(e) => handleUpdateIndex(e, i)}
          >
            {child}
          </Item>
        );
      })}
    </StyledDiv>
  );
};

VerticalMenu.propTypes = {
  children: PropTypes.array,
  startIndex: PropTypes.number,
  active: PropTypes.bool,
  onUpdateIndex: PropTypes.func,
};
