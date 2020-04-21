import React from 'react'
//Components
import Layout from '../components/layout/layout'
import { Wrapper, Title, Date } from '../components/common'

const Interests = () => (
    <Layout>
        <Wrapper>
            <Title to="/interests">Interests</Title>
            <Date>Last update 2020-04-21</Date>
            <div style={{fontSize: '0.8em'}}>
                <p>This section is a collection of links to resources I find interesting.</p>
                <p>Maybe It's just a place for me to add link to things I like o that I wanna remember to check every time I'm bored or wanna learn something new, maybe someone else finds interesting too.</p>
            </div>
        </Wrapper>
    </Layout>
)

export default Interests