import React from 'react'
//Components
import Layout from '../components/layout/layout'
import SectionList from '../components/sectionList'
import { Wrapper, Title, Date, CustomInternalLink } from '../components/common'
import { ITEMS } from '../content/utils'

const { channels, subreddits, repositories } = ITEMS

const Interests = () => (
    <Layout>
        <Wrapper>
            <Title to="/interests">Interests</Title>
            <Date>Last update 2020-04-21</Date>
            <div style={{fontSize: '0.8em'}}>
                <p>This section is a collection of links to resources I find interesting.</p>
                <p>Maybe It's just a place for me to add link to things I like o that I wanna remember to check every time I'm bored or wanna learn something new, maybe someone else finds interesting too.</p>
                <div>
                    <ul>
                        <li><CustomInternalLink to="/interests#channels">YouTube Channels</CustomInternalLink></li>
                        <li><CustomInternalLink to="/interests#subreddits">Subreddits</CustomInternalLink></li>
                        <li><CustomInternalLink to="/interests#repositories">Repositories</CustomInternalLink></li>
                    </ul>
                </div>
                <SectionList id="channels" title="YouTube Channels" items={channels} />
                <SectionList id="subreddits" title="Subreddits" items={subreddits} />
                <SectionList id="repositories" title="Repositories" items={repositories} />
            </div>
        </Wrapper>
    </Layout>
)

export default Interests