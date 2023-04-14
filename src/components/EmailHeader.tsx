import {
    MjmlText,
    MjmlImage,
    MjmlDivider
} from '@faire/mjml-react';

type propTypes = {
    socialImage: string;
    title: string;
    href: string;
};

const EmailHeader = ({ socialImage, title, href } : propTypes) => {
    return (
      <>
        <MjmlImage href={href} src={socialImage} />
        <MjmlText fontSize="21px">
          <a href={href} target='_blank'>{title}</a>
        </MjmlText>
        <MjmlDivider />
      </>
    );
}

export default EmailHeader;