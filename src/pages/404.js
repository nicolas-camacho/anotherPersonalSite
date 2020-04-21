import React from 'react'
import styled from 'styled-components'
//Components
import Layout from '../components/layout/layout'

const Wrapper = styled.div`
    font-size: 1.5em;
    text-align: center;
    margin: 5px;

    @media (mid-width: 600px) {
        margin: 0;
    }
`

const Code = styled.p`
    font-size: 1.7em;
    color: #58b368;
    font-weight: bold;
`

const NotFound = () => (
    <Layout>
        <Wrapper>
            <Code>404</Code>
            <p>Not Found</p>
            <p>Looks like the page you are trying to get doesn't exist or is under construction, please go back to home.</p>
        </Wrapper>
    </Layout>
)

export default NotFound