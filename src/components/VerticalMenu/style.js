import styled from 'styled-components';
import { downSizes } from '../../constants/breakpoints';

export const StyledDiv = styled.div`
  height: 100vh;
  position: absolute;
  right: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :before {
    content: '';
    top: 50%;
    left: 50%;
    height: 80vh;
    width: 6px;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.555);;
    position: absolute;
    mask-image: linear-gradient(transparent 00%, white 40%, white 60%, transparent 100%);
    z-index: 665;
  }

  @media ${downSizes.xs} {
    :before {
      height: max(48vh, 460px);
      width: 2px;
    }
  }
`;

export const Item = styled.div`
  transition: .2s ease-out;
  z-index: 666;
  cursor: pointer;
  margin-top: 4%;
  transform: translateX(4%);

  :first-child {
    margin-top: 28%;
  }

  @media ${downSizes.xs} {
    margin-top: 0;
  }
`;
