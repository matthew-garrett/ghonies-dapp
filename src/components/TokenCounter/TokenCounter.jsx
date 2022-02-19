import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {
  TokenCounterWrapper,
  PriceWrapper,
  QuantityWrapper,
  IconWrapper,
  TokenCount,
  ButtonWrapper,
} from "./TokenCounter.styled";

const TokenCounter = ({ setTokenCount, tokenCount }) => {
  const handleMinus = () => {
    if (tokenCount > 1) {
      setTokenCount(--tokenCount);
    }
  };
  const handlePlus = () => {
    if (tokenCount < 5) {
      setTokenCount(++tokenCount);
    }
  };
  return (
    <TokenCounterWrapper>
      <PriceWrapper>
        <h2>Price</h2>
        <div>0.02 ETH</div>
      </PriceWrapper>
      <QuantityWrapper>
        <h2>Select Quantity</h2>
        <IconWrapper>
          <ButtonWrapper>
            <RemoveCircleIcon onClick={() => handleMinus()}></RemoveCircleIcon>
          </ButtonWrapper>

          <TokenCount>{tokenCount}</TokenCount>

          <ButtonWrapper>
            <AddCircleIcon onClick={() => handlePlus()}></AddCircleIcon>
          </ButtonWrapper>
        </IconWrapper>
      </QuantityWrapper>
    </TokenCounterWrapper>
  );
};

export default TokenCounter;
