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
import {
  useWhiteListPrice,
  usePublicPrice,
  useWhiteListMintActive,
  useTotalSupply,
  useMaxSupply,
} from "../../redux/selectors";

const TokenCounter = ({ setTokenCount, tokenCount }) => {
  const whiteListMintActive = useWhiteListMintActive();
  const whiteListPrice = useWhiteListPrice();
  const publicPrice = usePublicPrice();
  const totalSupply = useTotalSupply();
  const maxSupply = useMaxSupply();

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

  const price = whiteListMintActive ? whiteListPrice : publicPrice;

  return (
    <TokenCounterWrapper>
      <PriceWrapper>
        <h2>Total Minted</h2>
        <div>{`${totalSupply} / ${maxSupply}`}</div>
      </PriceWrapper>
      <PriceWrapper>
        <h2>Price</h2>
        <div>{`${price} ETH`}</div>
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
