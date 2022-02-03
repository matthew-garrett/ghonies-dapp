import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "../CustomForm";
import { EmailWrapper, EmailLabel } from "./MailChimpWrapper.styled.js";

const MailChimpWrapper = () => {
  const postUrl = `https://ghonies.us5.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <EmailWrapper>
      <EmailLabel>Get on the list</EmailLabel>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </EmailWrapper>
  );
};

export default MailChimpWrapper;
