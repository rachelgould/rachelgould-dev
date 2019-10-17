import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import ResumeCard from "components/ResumeCard";

const ResumeTitle = styled("h1")`
    margin-bottom: 1em;
`

const Resume = ({ entries, meta }) => (
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
                Resume
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
                    />
                ))}
            </>
        </Layout>
    </>
);

export default ({ data }) => {
    const resumeEntries = data.prismic.allResumes.edges;
    const meta = data.site.siteMetadata;
    if (!resumeEntries) return null;

    return (
        <Resume entries={resumeEntries} meta={meta}/>
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
