import React from 'react'
import styled from 'styled-components'
// Content
import { RESUME } from '../content/utils'
// Components
import { CustomExternalLink } from '../components/common'

const Content = styled.div`
    width: 100%;
    display: flex;
    margin: auto;
    margin-top: 2%;
    margin-bottom: 5%;
    flex-direction: column;
    background-color: white;

    @media(min-width: 600px) {
        width: 90%;
        box-shadow:
            0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12);
    }
`

const Section = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media(min-width: 600px) {
        flex-wrap: nowrap;
    }
`

const Item = styled.div`
    margin: 0 2%;
`

const Contact = styled.p`
    font-size: 14px;
    margin: 3%;
`

const Title = styled.h1`
    font-size: 2em;
    text-decoration: none;
    color: #58b368;
`

const Subtitle = styled.h1`
    font-size: 1em;
    text-decoration: none;
    color: #58b368;
`

const Main = styled.div`
    margin: 0 5% 5% 5%;
`

const Resume = () => (
    <Content>
        <Main>
            <Section>
                <Item>
                    <Title>{RESUME.me.name}</Title>
                </Item>
            </Section>
            <Section>
                <Item>
                    <Contact>{RESUME.me.phone}</Contact>
                    <Contact>{RESUME.me.address}</Contact>
                    <Contact>{RESUME.me.email}</Contact>
                </Item>
                <Item>
                    <p>{RESUME.summary}</p>
                </Item>
            </Section>
            <Section>
                <Item>
                    <Subtitle>Experience</Subtitle>
                    {RESUME.experience.map(job => (
                        <Section style={{marginTop: 0}}>
                            <Item>
                                <h3>{job.place}</h3>
                                {job.job}<br/>
                                {job.time}
                            </Item>
                            <Item>
                                <ul>
                                    {job.responsabilities.map(task => (
                                        <li>{task}</li>
                                    ))}
                                </ul>
                            </Item>
                        </Section>
                    ))}
                </Item>
            </Section>
            <Section>
                <Item>
                    <Subtitle>Education</Subtitle>
                    {RESUME.education.map(edu => (
                        <Section style={{marginTop: 0}}>
                            <Item>
                                <h3>{edu.place}</h3>
                                {edu.time}
                            </Item>
                            <Item>
                                <p>{edu.degree}</p>
                            </Item>
                        </Section>
                    ))}
                </Item>
            </Section>
        </Main>
    </Content>
)

export default Resume