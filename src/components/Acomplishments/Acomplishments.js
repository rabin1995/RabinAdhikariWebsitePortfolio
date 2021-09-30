import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Open Source Projects'},
  { number: 2, text: 'Freelancing Projects', },
  { number: 4, text: 'Self Projects', },
  { number: 2, text: 'Udemy Java and REST APIs Certification', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Accomplishments</SectionTitle>
  <Boxes>
    {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
        </Box>
    ))}
  </Boxes>
  </Section>
);

export default Acomplishments;
