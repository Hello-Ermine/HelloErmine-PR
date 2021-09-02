import styled from 'styled-components';

export const StyledDiv = styled.div`
  --circular-menu-size: min(28vh, 250px);
  --menu-item-width: calc(var(--circular-menu-size) * 0.47);
  --menu-item-height: calc(var(--circular-menu-size) * 0.2);
  width: 100%;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  /* transform: translateX(-50%); */

  &:before {
    content: '';
    width: var(--circular-menu-size);
    height: var(--circular-menu-size);
    top: 50%;
    right: 0;
    transform: translate(52%, -50%);
    position: absolute;
    border-radius: 50%;
    border: 12px solid rgba(255, 255, 255, 0.555);
    /* background: rgb(255, 0, 0); */
    -webkit-mask-image: linear-gradient(to right, white 10%, transparent 45%);
  }
`;

export const Item = styled.div`
  width: var(--menu-item-width);
  height: var(--menu-item-height);
  position: absolute;
  top: 50%;
  right: 0;
  transform-origin: 100% 50%;
  transform: translate(-120%, -50%);
  transition: .2s ease-out;
  z-index: 666;
  cursor: pointer;
  /* background: white; */
  direction: rtl;

  * {
    direction: ltr;
  }

  /* &.active {
    opacity: 1;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.5),
      0 0 100px rgba(255, 255, 255, 0.2);
  } */
`;
