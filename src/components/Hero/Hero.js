import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
        </SectionTitle>
        <SectionText>
        This is my personal website. I have included my Introduction, my achievements, education details, projects, and my aim in this personal website.
      </SectionText>
      <Button onClick={props.handleClick}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;