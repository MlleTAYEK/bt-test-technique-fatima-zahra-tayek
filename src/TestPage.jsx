import React from 'react';
import { Section, Container, Columns, Column, Hero,
    Title, Text, Image, Card, CardContent, Link } from '@trilogy-ds/react';

    
function TestPage(){
    return (
        <>
        <Section>
            <Hero backgroundColor = {'MAIN'}>
                <Container>
                    <Title level={2} inverted>Direction Digitale</Title>
                    <Text inverted> Test technique d'intégration avec Trilogy </Text>
                </Container>
            </Hero>
        </Section>

        <Section>
            <Container>
                <Columns>
                <Column>
                <Title level = {1}> Integration responsive</Title>
                <Text> Le but sera d'intégrer une page typique en React avec Trilogy.</Text>
                </Column>

                <Column>
                <Image alt="version mobile" src="/screen-mobile.png" height={500}/>
                </Column>
                </Columns>

            </Container>
        </Section>
    </>
    );

}

export default TestPage;
