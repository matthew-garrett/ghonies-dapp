import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { GhonieData } from "./ghonieConfig.ts";
import {
  GhoniesWrapper,
  // ModalGhonie,
  TraitText,
  TraitContainer,
  ModalContent,
  DisplayGhonie,
} from "./GhonieViewer.styled";

export const GhonieModal = () => {
  const [open, setOpen] = React.useState(false);
  const [ghonieData, setGhonieData] = React.useState({});

  const handleOpen = (data) => {
    setOpen(true);
    setGhonieData(data);
  };
  const handleClose = () => {
    setOpen(false);
    setGhonieData({});
  };

  return (
    <>
      <GhoniesWrapper>
        {GhonieData.map((data) => (
          <DisplayGhonie
            onClick={() => handleOpen(data)}
            key={data.id}
            src={data.image}
            type={data.type}
          ></DisplayGhonie>
        ))}
      </GhoniesWrapper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        disableScrollLock={true}
      >
        <Fade in={open}>
          <ModalContent onClick={handleClose}>
            {/* <ModalGhonie src={ghonieData?.image} /> */}
            <TraitContainer>
              {ghonieData.traits &&
                ghonieData?.traits.map((data) => (
                  <TraitText key={`${data.label}-${ghonieData.id}`}>
                    {data.label}: {data.value}
                  </TraitText>
                ))}
            </TraitContainer>
          </ModalContent>
        </Fade>
      </Modal>
    </>
  );
};

export default GhonieModal;
