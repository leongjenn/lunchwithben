import styled from "styled-components";
import { FaClipboardList, FaIdCard, FaAngleDown } from "react-icons/fa";

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2.5rem 2.5rem 2.5rem;
  line-height: 2;
  width: 250px;
`;

export const GroupedCard = styled.div`
  margin: 0 2.5rem 2.5rem 2.5rem;
  line-height: 3;
`;

export const ProductImg = styled.img`
  height: 250px;
  min-width: 250px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  text-align: center;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  box-shadow: 0px 5px #e9ba23;
`;

export const GroupedTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  box-shadow: 0px 5px #e9ba23;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  border-top: 20px solid transparent;
`;

export const ProductPrice = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 1rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const GroupOrdersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #150f0f;
`;

export const GroupOrdersIcon = styled(FaClipboardList)`
  margin-right: 0.9rem;
  font-size: 1.4rem;
  vertical-align: middle;

  &:hover {
    cursor: pointer;
  }
`;

export const CardIcon = styled(FaIdCard)`
  margin-right: 0.9rem;
  font-size: 1.4rem;
  vertical-align: middle;

  &:hover {
    cursor: pointer;
  }
`;

export const GroupOrdersButton = styled.button`
  font-size: 1.4rem;
  margin-top: 3.5rem;
  padding: 1rem 2.5rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;
  display: flex;

  &:hover {
    background: #5cd4f2;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }

  &:disabled {
    background: gray;
  }
`;

export const PageDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

export const ScrollToBottomContainer = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #ffc500;
  z-index: 1;
`;

export const ScrollToBottomIcon = styled(FaAngleDown)`
  width: 40%;
  height: 40%;
  color: #000;
  margin-top: 15px;
  margin-left: 15px;
  animation: scrollTop 0.5s alternate ease infinite;
`;
