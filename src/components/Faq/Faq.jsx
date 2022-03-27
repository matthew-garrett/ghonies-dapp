import React from "react";
import faqLogo from "../../images/faq-cropped.svg";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  ImageHeader,
  FaqWrapper,
  AccordionWrapper,
  ExpandIcon,
} from "./Faq.styled";

const Faq = () => {
  return (
    <FaqWrapper id="faq">
      <ImageHeader src={faqLogo} alt="roadmap" />
      <AccordionWrapper>
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
            }}
          >
            Accordion 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </AccordionWrapper>
      <AccordionWrapper>
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
            }}
          >
            Accordion 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </AccordionWrapper>
      <AccordionWrapper>
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
            }}
          >
            Accordion 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </AccordionWrapper>
      <AccordionWrapper>
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
            }}
          >
            Accordion 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </AccordionWrapper>
    </FaqWrapper>
  );
};

export default Faq;
