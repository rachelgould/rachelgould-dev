import React, { useState } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Layout from "components/Layout";
import ResumeCard from "components/ResumeCard";
import SkillsGrid from "components/SkillsGrid";
import metaTruncate from "../utils/lazyMetaDescrip";

const ResumeTitle = styled("h1")`
    margin-bottom: 1em;
`

const ResumeTitleWithCaption = styled("h1")`
    margin-bottom: 0em;
`

const ResumeTitleCaption = styled("p")`
    margin-bottom: 2.5em;
    color: ${colors.grey700}
`

const metaDescription = metaTruncate(
  "Rachel Gould is a digital marketer, web developer and data analyst in Vancouver BC. View her online resume."
)

const Resume = ({ entries, education, meta, highlightSkills, highlightedSkills }) => {
  const makeEntryCards = (entries) => {
      let sortedEntries = entries.sort((a, b) => (a.node.end_date > b.node.end_date) ? -1 : 1)

      return sortedEntries.map((entry, i) => (
        <ResumeCard
            key={i}
            title={entry.node.job_title}
            company={entry.node.company_name}
            description={entry.node.job_description}
            startDate={entry.node.start_date}
            endDate={entry.node.end_date}
            uid={entry.node._meta.uid}
            highlightSkills={highlightedSkills}
        />
    ))
  }

  return(
    <>
        <Helmet
            title={`Resume | RachelGould.dev`}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: `Resume | RachelGould.dev`,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: meta.author,
                },
                {
                    name: `twitter:title`,
                    content: meta.title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        />
        <Layout>
            <ResumeTitleWithCaption>
                Highlighted Skills
            </ResumeTitleWithCaption>
            <ResumeTitleCaption>
                Click the skills below to highlight relevant experience on my resume.
            </ResumeTitleCaption>
            <SkillsGrid onSelect={highlightSkills} highlightedSkills={highlightedSkills} />
            <ResumeTitle>
                Work Experience
            </ResumeTitle>
            <>
                {makeEntryCards(entries)}
            </>
            <ResumeTitle>
                Education
            </ResumeTitle>
            <>
                {makeEntryCards(education)}
            </>
        </Layout>
    </>
  )
};

export default ({ data }) => {
    const resumeEntries = data.prismic.allResumes.edges;
    const educationEntries = data.prismic.allEducations.edges;
    const meta = data.site.siteMetadata;
    if (!resumeEntries) return null;

    const [activeSkills, setActiveSkills] = useState({
      data: false,
      development: false,
      marketing: false
    })

    const highlightSkills = (skills) => {
      console.log('setting skills to this: ', skills)
      setActiveSkills(skills);
    }

    return (
        <Resume entries={resumeEntries} education={educationEntries} meta={meta} highlightSkills={highlightSkills} highlightedSkills={activeSkills}/>
    )
}

Resume.propTypes = {
  entries: PropTypes.array.isRequired,
};

export const query = graphql`
    {
        prismic {
            allResumes {
                edges {
                    node {
                        job_title
                        company_name
                        job_description
                        start_date
                        end_date
                        _meta {
                            uid
                        }
                    }
                }
            }
            allEducations {
                edges {
                    node {
                        job_title
                        company_name
                        job_description
                        start_date
                        end_date
                        _meta {
                            uid
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
                author
            }
        }
    }
`

