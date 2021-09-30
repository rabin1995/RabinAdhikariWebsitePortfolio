import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I am interested in various technologies in Software Development
       and have used in my various projects.
  </SectionText>
  <List>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.JS
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node.JS
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>UI-design</ListTitle>
        <ListParagraph>
          Experience with <br />
          Figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Technologies;
