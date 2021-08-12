import anime from 'animejs';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  --circular-menu-size: min(36vh, 36vw);
  --menu-item-width: calc(var(--circular-menu-size) / 2.5);
  --menu-item-height: calc(var(--circular-menu-size) / 6);
  width: 100vw;
  height: 100vh;
  position: absolute;
  /* overflow: hidden; */
  transform: translateX(-50%);

  &:before {
    content: '';
    width: var(--circular-menu-size);
    height: var(--circular-menu-size);
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    position: absolute;
    border-radius: 50%;
    border: 12px solid rgba(255, 255, 255, 0.555);
    /* background: rgb(255, 0, 0); */
    /* -webkit-mask-image: linear/-gradient(to right, white 10%, transparent 45%); */
  }
`;

const Item = styled.div`
  width: var(--menu-item-width);
  height: var(--menu-item-height);
  font-size: 2rem;
  border-radius: 12px;
  background: rgb(231, 231, 231);
  position: absolute;
  top: 50%;
  right: 0;
  transform-origin: 100% 50%;
  transform: translate(-170%, -50%);
  opacity: ${(props) => (props.show ? 0.4 : 0)};

  &.active {
    opacity: 1;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5),
      0 0 100px rgba(255, 255, 255, 0.3);
  }
`;

function getDisplacement(targetIdx, currentIdx) {
  return targetIdx - currentIdx;
}

function getDirection(targetIdx, currentIdx, size) {
  const itemOnEachSide = Math.floor(size / 2);
  const ccwLastIdx = (currentIdx + itemOnEachSide) % size;
  let cwLastIdx = currentIdx - itemOnEachSide; // TODO: remove % size
  cwLastIdx += cwLastIdx < 0 ? size : 0;

  const ccwDistance = getShortestDistance(targetIdx, ccwLastIdx, size);
  const cwDistance = getShortestDistance(targetIdx, cwLastIdx, size);

  return ccwDistance < cwDistance ? 1 : -1;
}

function getMenuItemAnimeProps(targets, rotate) {
  return {
    targets,
    transformOrigin: '100% 50%',
    translateY: '-50%',
    rotate: `+=${rotate}deg`,
    translateX: '-170%',
    easing: 'easeOutSine',
    duration: 500,
  };
}

function getDistance(targetIdx, currentIdx) {
  return Math.abs(targetIdx - currentIdx);
}

function getShortestDistance(targetIdx, currentIdx, size) {
  // assuming the index started from 0
  const d = getDistance(targetIdx, currentIdx);
  return Math.min(d, size - d);
}

export const CircularMenu = ({ angle = 60 }) => {
  const menuRef = useRef(null);
  // const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(2); // props.children.length / 2
  const [itemCount, setItemCount] = useState(5);

  useEffect(() => {
    const items = menuRef.current.childNodes;
    const maxAngle = angle;
    const minAngle = -maxAngle;
    const itemAngle = (maxAngle - minAngle) / itemCount;
    const tempActiveItemIndex = Math.floor(itemCount / 2);

    anime({
      targets: items,
      transformOrigin: '100% 50%',
      translateY: '-50%',
      rotate: (_, i) => {
        return itemAngle * -getDisplacement(i, tempActiveItemIndex);
      },
      translateX: '-170%',
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

    const maxAngle = 60; // props.angle
    const minAngle = -maxAngle;
    const itemAngle = (maxAngle - minAngle) / itemCount;

    const direction = getDirection(index, activeItemIndex, itemCount);
    const distance = getShortestDistance(index, activeItemIndex, itemCount);

    const items = menuRef.current.childNodes;
    const eachSideItemCount = Math.floor(itemCount / 2);

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

    const slot = 360 / itemAngle;
    const minRotate = distance * itemAngle * direction;
    const extraRotate = minRotate + (slot - itemCount) * itemAngle * direction;

    setIsAnimating(true);
    anime(getMenuItemAnimeProps(normalItems, minRotate));
    anime({
      ...getMenuItemAnimeProps(extraItems, extraRotate),
      delay: 30,
      duration: 320,
    }).finished.then(() => {
      setIsAnimating(false);
    });

    setActiveItemIndex(index);
  };

  // TODO: map over the actual items
  return (
    <StyledDiv ref={menuRef}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          return (
            <Item
              key={i}
              data-index={i}
              show={isMounted}
              onClick={(e) => handleUpdateIndex(e, i)}
              className={i === activeItemIndex ? `active` : ''}
            >
              {i}
            </Item>
          );
        })}
    </StyledDiv>
  );
};
