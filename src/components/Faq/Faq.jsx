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
            Who are we?
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
            We are a donut-focused team with professional backgrounds in
            engineering and art passionate about the economic and artistic
            liberation movement called web3.
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
            What is a Ghonie?
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
            According to scripture, the term Ghonie /gōˌnē/ refers to a member
            of an ancient, cosmic pastry tribe which sparked the interplanetary
            evolution that gave rise to modern day earthly donuts. Without
            Ghonies, Earth as we know it would exist perpetually in a state of
            demented and desparate hunger for culinary joy.
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
            How do I purchase a Ghonie?
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
            Interact with our tweets and on Discord to get on the whitelist. The
            whitelist and public mint will happen on our site. After those
            events, Ghonies will be available on secondary market platforms like
            opensea and looksrare.
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
            How is Ghonies different?
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
            Art: Our mid-century trash pop art style is not only timeless, but a
            fresh evolution in NFT art. We designed something that would be as
            enchanting in a living room as it is on the street or in a gallery,
            and of course as a profile picture.
            <br />
            <br />
            Revenue Sharing: 12 1/1 NFTs called ‘Dirty Dozen’ which carry an
            exclusive benefit - 1% of Ghonies NFT sales. This means that 12
            holders will each receive 1% of Ghonies NFT sales in perpetuity.
            It’s written into our contract. These tokens can only be earned
            through fate, effort, or chance. They are not for sale.
            <br />
            <br />
            Charity: We are committed to holding regular auctions and
            fundraisers to support No Kid Hungry
            <br />
            <br />
            IRL: Aside from our planned world recording breaking donut
            installation, we’ll be hosting exclusive events like gallery shows
            and parties in NYC and Miami
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
            What are NFT’s?
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
            Nft’s can be anything digital, from images to songs to videos or
            code. An NFT is the digital asset itself but also the assets history
            from its origin to your wallet, verified on the blockchain forever.
            It’s proof of ownership, provenance, and membership. Your provably
            unique NFT grants you privileged access to a community and its
            events, merch, drops and much more. This concept is in its infancy
            so the potential is limitless
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
            How do I keep my NFT safe?
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
            Ledger explains it better than we can:
            https://www.ledger.com/academy/how-to-secure-your-nfts
          </Typography>
        </AccordionDetails>
      </AccordionWrapper>
    </FaqWrapper>
  );
};

export default Faq;
