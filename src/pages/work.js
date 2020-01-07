import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";
import metaTruncate from "../utils/lazyMetaDescrip";

const WorkTitle = styled("h1")`
    margin-bottom: 1em;
`

const metaDescription = metaTruncate(
  "View Rachel's online portfolio. From bulk-editing WooCommerce orders with the Python API to a recipe organizer single-page app."
)

const Work = ({ projects, meta }) => {
  const makeEntryCards = (entries) => {
    let sortedEntries = entries.sort((a, b) => (a.node.end_date > b.node.end_date) ? 1 : -1)

    return sortedEntries.map((project, i) => (
      <ProjectCard
          key={i}
          category={project.node.project_category}
          title={project.node.project_title}
          description={project.node.project_preview_description}
          thumbnail={project.node.project_preview_thumbnail}
          uid={project.node._meta.uid}
      />
    ))
  }
  return (
    <>
        <Helmet
            title={`Projects | RachelGould.dev`}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: `Projects | RachelGould.dev`,
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
            <WorkTitle>
                Projects
            </WorkTitle>
            <>
                {makeEntryCards(projects)}
            </>
        </Layout>
    </>
  );
}

export default ({ data }) => {
    const projects = data.prismic.allProjects.edges;
    const meta = data.site.siteMetadata;
    if (!projects) return null;

    return (
        <Work projects={projects} meta={meta}/>
    )
}

Work.propTypes = {
    projects: PropTypes.array.isRequired,
};

export const query = graphql`
    {
        prismic {
            allProjects {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
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

