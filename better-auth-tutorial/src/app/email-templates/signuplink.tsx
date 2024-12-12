import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface EmailTemplateProps {
  userName: string,
  senderEmail: string;
  url: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  userName, senderEmail, url,
}) => (
    <Html>
      <Head />
      <Preview>Hello {userName}, you signed up</Preview>
      <Tailwind>
        <Body className="bg-slate-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md max-w-screen">
              <Heading className="leading-tight"> 
                Welcome {userName}, thanks for signing up ;)
              </Heading>
              <Text className="whitespace-normal overflow-hidden text-overflow-ellipsis">That&apos;s the Signup Link:< br/>
              <Link href={url} >{url}</Link>
              </Text>
              <Hr />
              <Text>The sender&apos;s email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
);
