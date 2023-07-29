import { useState } from 'react';
import { JazzyText } from './Typography';
import styled from 'styled-components';

const EmailContainer = styled.div`
  position: relative;
`;

const EmailText = styled(JazzyText)`
  cursor: pointer;
`;

const Notif = styled.div`
  position: absolute;
  transition: 1s;
  right: 0;
  bottom: -18px;
  background-color: black;
  color: white;
  padding: 1px;
  font-size: 10px;
`;

export const EmailLink = (): JSX.Element => {
  const [showCopyNotif, setShowCopyNotif] = useState(false);
  const emailAddress = 'tanya@innerloop.press';
  const onEmailClick = () => {
    navigator.clipboard.writeText(emailAddress);
    triggerNotification();
  };

  const triggerNotification = () => {
    if (!showCopyNotif) {
      setShowCopyNotif(true);

      setTimeout(() => {
        setShowCopyNotif(false);
      }, 2000);
    }
  };

  return (
    <EmailContainer>
      {showCopyNotif && <Notif>Copied!</Notif>}
      <EmailText onClick={onEmailClick} text={emailAddress} />
    </EmailContainer>
  );
};
