import React, { useState } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import ResumeCard from "components/ResumeCard";
import SkillsGrid from "components/SkillsGrid";

const ResumeTitle = styled("h1")`
    margin-bottom: 1em;
`

const Resume = ({ entries, education, meta, highlightSkills, highlightedSkills }) => (
    <>
        <Helmet
            title={`Resume | RachelGould.dev`}
            titleTemplate={`%s | Resume | RachelGould.dev`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `Resume | RachelGould.dev`,
                },
                {
                    property: `og:description`,
                    content: meta.description,
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
                    content: meta.description,
                },
            ].concat(meta)}
        />
        <Layout>
            <ResumeTitle>
                Highlighted Skills
            </ResumeTitle>
            <SkillsGrid onSelect={highlightSkills} highlightedSkills={highlightedSkills} />
            <ResumeTitle>
                Work Experience
            </ResumeTitle>
            <>
                {entries.map((entry, i) => (
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
                ))}
            </>
            <ResumeTitle>
                Education
            </ResumeTitle>
            <>
                {education.map((entry, i) => (
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
                ))}
            </>
        </Layout>
    </>
);

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
                description
                author
            }
        }
    }
`

