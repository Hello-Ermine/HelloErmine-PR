import anime from 'animejs';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Item, StyledDiv } from './style';

const translateX = '-120%';
const duration = 300;

const getDisplacement = (targetIdx, currentIdx) => {
  return targetIdx - currentIdx;
};

const modWrapAround = (n, m) => {
  return ((n % m) + m) % m;
};

const getDirection = (targetIdx, currentIdx, size) => {
  const itemOnEachSide = Math.floor(size / 2);
  const ccwLastIdx = modWrapAround(currentIdx + itemOnEachSide, size);
  const cwLastIdx = modWrapAround(currentIdx - itemOnEachSide, size);

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

const getShortestDistance = (targetIdx, currentIdx, size) => {
  const d = Math.abs(targetIdx - currentIdx);
  return Math.min(d, size - d);
};

const computeValues = (items, itemAngle) => {
  const itemsArr = [...items];
  const size = itemsArr.length;
  const itemOnEachSide = Math.floor(size / 2);
  const slots = 360 / itemAngle;

  const computed = new Array(size)
    .fill(0)
    .map((_, idx, arr) => {
      let temp = {};
      for (let targetIdx = 0; targetIdx < arr.length; targetIdx++) {
        if (idx === targetIdx) {
          continue;
        }
        const direction = getDirection(targetIdx, idx, size);
        const distance = getShortestDistance(targetIdx, idx, size);
        const normalRotate = direction * itemAngle * distance;
        const extraRotate = normalRotate + (slots - size) * itemAngle * direction;
        const extraFirstIndex = modWrapAround(idx + itemOnEachSide * -direction, size);

        const extraIndicies = new Array(distance)
          .fill(0)
          .map((_, i) => {
            return modWrapAround(extraFirstIndex + i * direction, size);
          });

        const extraLastIndex = extraIndicies[extraIndicies.length - 1];

        const normalIndicies = new Array(size - distance)
          .fill(0)
          .map((_, i) => {
            return modWrapAround(extraLastIndex + ((i + 1) * direction), size);
          });

        const normalItems = itemsArr.filter((_, i) => normalIndicies.includes(i));
        const extraItems = itemsArr.filter((_, i) => extraIndicies.includes(i));

        temp[targetIdx] = {
          normalItems,
          extraItems,
          normalRotate,
          extraRotate,
        };
      }

      return temp;
    });

  return computed;
};

export const CircularMenu = ({
  children,
  angle = 60,
  startIndex,
  // eslint-disable-next-line no-unused-vars
  onUpdateIndex = (index = 0) => {},
}) => {
  const menuRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemCount = children.length;
  const itemAngle = (angle * 2) / itemCount;
  const [activeItemIndex, setActiveItemIndex] = useState(Math.floor(itemCount / 2));
  const [computedValues, setComputedValues] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [hasResolvedStartIndex, setHasResolvedStartIndex] = useState(startIndex == undefined || startIndex === activeItemIndex);

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

    return () => {
      setComputedValues(computeValues(items, itemAngle));
    };
  }, []);

  const handleUpdateIndex = (event, index) => {
    if (isAnimating || index === activeItemIndex) {
      return;
    }

    const {
      normalItems,
      extraItems,
      normalRotate,
      extraRotate,
    } = computedValues[activeItemIndex][index];

    setIsAnimating(true);
    anime(getMenuItemAnimeProps(normalItems, normalRotate));
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

  if (isMounted && !hasResolvedStartIndex) {
    setHasResolvedStartIndex(true);
    handleUpdateIndex(null, startIndex);
  }

  return (
    <StyledDiv ref={menuRef}>
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

CircularMenu.propTypes = {
  children: PropTypes.array,
  angle: PropTypes.string,
  startIndex: PropTypes.number,
  onUpdateIndex: PropTypes.func,
};
