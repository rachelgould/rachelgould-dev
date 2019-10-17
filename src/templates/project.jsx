import React from 'react';
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import colors from "styles/colors";
import { Link, graphql } from 'gatsby';
import { RichText } from "prismic-reactjs";
import Button from "components/_ui/Button";
import Layout from "components/Layout";

const ProjectHeroContainer = styled("div")`
    // background: ${colors.grey200};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    padding-top: 2.25em;
    margin-bottom: 3.5em;

    img {
        max-width: 600px;
    }
`

const ProjectTitle = styled("div") `
    max-width: 550px;
    margin: 0 auto;
    text-align: center;
`

const ButtonContainer = styled("div") `
    display: flex;
    justify-content: space-evenly;
`

const ProjectBody = styled("div")`
    max-width: 550px;
    margin: 0 auto;

    .block-img {
        margin-top: 3.5em;
        margin-bottom: 0.5em;

        img {
            width: 100%;
        }
    }

    .tech_stack {
        color: ${colors.grey800};
        text-transform: lowercase;
        font-variant: small-caps;
        font-weight: bold;
        text-align: center;
    }
`

const WorkLink = styled(Link)`
    margin-top: 3em;
    display: block;
    text-align: center;
`

const ExternalLink = styled("a")`
margin-top: 3em;
display: block;
text-align: center;
`


const Project = ({ project, meta }) => {
    return (
        <>
            <Helmet
                title={`${project.project_title[0].text} | RachelGould.dev`}
                titleTemplate={`%s | ${meta.title}`}
                meta={[
                    {
                        name: `description`,
                        content: meta.description,
                    },
                    {
                        property: `og:title`,
                        content: `${project.project_title[0].text} | RachelGould.dev`,
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
                {project.project_hero_image && (
                    <ProjectHeroContainer>
                        <img src={project.project_hero_image.url} alt="bees" />
                    </ProjectHeroContainer>
                )}
                <ProjectTitle>
                    {RichText.render(project.project_title)}
                </ProjectTitle>
                <ProjectBody>
                    {RichText.render(project.project_description)}
                    <ButtonContainer>
                      <ExternalLink href={project.view_more_link.url}>
                          <Button className="Button--primary">
                              Code on GitHub
                          </Button>
                      </ExternalLink>
                      <WorkLink to={"/work"}>
                          <Button className="Button--primary">
                              See Other Projects
                          </Button>
                      </WorkLink>
                    </ButtonContainer>
                </ProjectBody>
            </Layout>
        </>
    )
}

export default ({ data }) => {
    const projectContent = data.prismic.allProjects.edges[0].node;
    const meta = data.site.siteMetadata;
    return (
        <Project project={projectContent} meta={meta}/>
    )
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
};

export const query = graphql`
    query ProjectQuery($uid: String) {
        prismic {
            allProjects(uid: $uid) {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
                        project_hero_image
                        project_description
                        view_more_link {
                          ... on PRISMIC__ExternalLink {
                              _linkType
                              url
                          }
                        }
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