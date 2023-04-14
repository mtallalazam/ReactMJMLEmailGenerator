import {
    Mjml,
    MjmlBody,
    MjmlSection,
    MjmlColumn,
  } from '@faire/mjml-react';
  import EmailHeader from '@/components/EmailHeader';

  export const generate = () => {
    return (
    <Mjml>
      <MjmlBody width={500}>
        <MjmlSection backgroundColor="#EFEFEF">
          <MjmlColumn>
            <EmailHeader
              socialImage="https://picsum.photos/600?random=6"
              title="Mjml React Test"
              href="https://mjml.io/"
            />
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
    )
  };