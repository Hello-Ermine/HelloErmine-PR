import anime from 'animejs';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Item, StyledDiv } from './style';

const translateX = '-140%';
const duration = 300;

const getDisplacement = (targetIdx, currentIdx) => {
  return targetIdx - currentIdx;
};

const getDirection = (targetIdx, currentIdx, size) => {
  const itemOnEachSide = Math.floor(size / 2);
  const ccwLastIdx = (currentIdx + itemOnEachSide) % size;
  let cwLastIdx = currentIdx - itemOnEachSide; // TODO: remove % size
  cwLastIdx += cwLastIdx < 0 ? size : 0;

  const ccwDistance = getShortestDistance(targetIdx, ccwLastIdx, size);
  const cwDistance = getShortestDistance(targetIdx, cwLastIdx, size);

  return ccwDistance < cwDistance ? 1 : -1;
};

const getMenuItemAnimeProps = (targets, rotate) => {
  return {
    targets,
    transformOrigin: '100% 50%',
    translateY: '-50%',
    rotate: `+=${rotate}deg`,
    translateX,
    easing: 'easeOutSine',
    duration,
  };
};

const getDistance = (targetIdx, currentIdx) => {
  return Math.abs(targetIdx - currentIdx);
};

const getShortestDistance = (targetIdx, currentIdx, size) => {
  // assuming the index started from 0
  const d = getDistance(targetIdx, currentIdx);
  return Math.min(d, size - d);
};

export const CircularMenu = ({
  children,
  angle = 60,
  onUpdateIndex = () => {},
  // onUpdateIndex = (index) => {},
}) => {
  const menuRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemCount = children.length;
  const itemAngle = (angle * 2) / itemCount;
  const [activeItemIndex, setActiveItemIndex] = useState(
    Math.floor(itemCount / 2)
  );

  useEffect(() => {
    const items = menuRef.current.childNodes;

    anime({
      targets: items,
      transformOrigin: '100% 50%',
      translateY: '-50%',
      rotate: (_, i) => {
        return itemAngle * -getDisplacement(i, activeItemIndex);
      },
      translateX,
      easing: 'linear',
      duration: 0,
      complete: () => {
        setIsMounted(true);
      },
    });
  }, []);

  const handleUpdateIndex = (event, index) => {
    if (isAnimating || index === activeItemIndex) {
      return;
    }

    const items = menuRef.current.childNodes;
    const eachSideItemCount = Math.floor(itemCount / 2);

    const direction = getDirection(index, activeItemIndex, itemCount);
    const distance = getShortestDistance(index, activeItemIndex, itemCount);

    const slot = 360 / itemAngle;
    const minRotate = distance * itemAngle * direction;
    const extraRotate = minRotate + (slot - itemCount) * itemAngle * direction;

    const extraStartIndex =
      (activeItemIndex + eachSideItemCount * -direction) % itemCount;
    const extraItems = Array(distance)
      .fill(0)
      .map((_, i) => {
        let idx = extraStartIndex + ((i * direction) % itemCount);
        idx += idx < 0 ? itemCount : 0;
        return items[idx];
      });

    const normalItems = (() => {
      const filtered = [];
      for (let el of items.values()) {
        if (extraItems.includes(el)) {
          continue;
        }
        filtered.push(el);
      }
      return filtered;
    })();

    setIsAnimating(true);
    anime(getMenuItemAnimeProps(normalItems, minRotate));
    anime({
      ...getMenuItemAnimeProps(extraItems, extraRotate),
      duration: duration * 0.8,
      easing: 'easeOutQuint',
    }).finished.then(() => {
      setIsAnimating(false);
    });

    setActiveItemIndex(index);
    onUpdateIndex(index);
  };

  return (
    <StyledDiv ref={menuRef}>
      {children.map((child, i) => {
        return (
          <Item
            key={i}
            data-index={i}
            show={isMounted}
            onClick={(e) => handleUpdateIndex(e, i)}
            className={i === activeItemIndex ? 'active' : ''}
          >
            {child}
          </Item>
        );
      })}
    </StyledDiv>
  );
};

CircularMenu.propTypes = {
  children: PropTypes.array,
  angle: PropTypes.number,
  onUpdateIndex: PropTypes.func,
};
