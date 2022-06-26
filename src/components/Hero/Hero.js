import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey, I am Tirthak <br />
          This is my Personal Portfolio
        </SectionTitle>
        <SectionText>
        This portfolio website gives all details about my projects , wor and much more.
        </SectionText>
        <Button onClick= {() => window.location = 'https://github.com/TirthakBM?tab=repositories'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;