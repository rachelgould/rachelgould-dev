import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";

const ProjectCardContainer = styled("div")`
    display: grid;
    grid-template-columns: 3.6fr 3.6fr 3.6fr;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
    margin-bottom: 4em;
    transition: all 150ms ease-in-out;
    text-decoration: none;
    color: currentColor;

    @media(max-width:950px) {
        grid-template-columns: 3.8fr 3.8fr 3.8fr;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        grid-template-columns: 1fr;
    }

    @media(max-width:${dimensions.maxwidthMobile}px) {
        margin-bottom: 2em;
    }
`

const HoverGroup = styled("div")`
    &:hover {
      box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
      transition: all 150ms ease-in-out;

      .ProjectCardAction.data {
          color: ${colors.orange600};
      }

      .ProjectCardAction.marketing {
          color: ${colors.green600};
      }

      .ProjectCardAction.development {
          color: ${colors.purple600};
      }

      .ProjectCardAction {
          transition: all 150ms ease-in-out;

          span {
              transform: translateX(0px);
              opacity: 1;
              transition: transform 150ms ease-in-out;
          }
      }

      .ProjectCardContent::before {
          opacity: 0.02;
          transition: all 150ms ease-in-out;
      }

      .ProjectCardImageContainer::before {
          opacity: 0.2;
          transition: all 150ms ease-in-out;
      }

      .ProjectCardTitle.data {
          transition: all 150ms ease-in-out;
          color: ${colors.orange600};  
      }

      .ProjectCardTitle.development {
          transition: all 150ms ease-in-out;
          color: ${colors.purple600};  
      }
      .ProjectCardTitle.marketing {
          transition: all 150ms ease-in-out;
          color: ${colors.green600};  
      }
  }
`

const ProjectCardContent = styled("div")`
    background: white;
    padding: 4em 3em 2.25em 3em;
    position: relative;
    height: 100%;

    .data&:before {
      background: ${colors.orange600};
    }

    .marketing&:before {
      background: ${colors.green600};
    }

    .development&:before {
      background: ${colors.purple600};
    }

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    @media(max-width:950px) {
        padding: 3.25em 2.5em 2em 2.5em;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        grid-row: 2;
    }
`

const ProjectCardTitle = styled("h3")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
`

const ProjectCardBlurb = styled("div")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 5em;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 2.5em;
    }
`

const ProjectCardAction = styled("div")`
    font-weight: 600;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;
    position: absolute;
    bottom: 0;
    padding-bottom: 2em;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    }
`

const SkillsGrid = ({ onSelect, highlightedSkills }) => (
    <ProjectCardContainer>
      <HoverGroup>
          <ProjectCardContent className="ProjectCardContent data">
              <ProjectCardTitle className="ProjectCardTitle data">
                  Data
              </ProjectCardTitle>
              <ProjectCardBlurb>
                  <ul>
                    <li>Excel</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>Tableau</li>
                    <li>Google Analytics (Certified)</li>
                    <li>Google Tag Manager</li>
                  </ul>
              </ProjectCardBlurb>
              <ProjectCardAction className="ProjectCardAction data">
                  Highlight These <span>&#8594;</span>
              </ProjectCardAction>
          </ProjectCardContent>
        </HoverGroup>
        <HoverGroup>
          <ProjectCardContent className="ProjectCardContent development">
              <ProjectCardTitle className="ProjectCardTitle development">
                  Development
              </ProjectCardTitle>
              <ProjectCardBlurb>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML, CSS, SASS</li>
                    <li>AWS Lambda, S3, DynamoDB</li>
                    <li>Serverless</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Gatsby.js</li>
                    <li>Ruby on Rails</li>
                    <li>Git/GitHub</li>
                </ul>
              </ProjectCardBlurb>
              <ProjectCardAction className="ProjectCardAction development">
              Highlight These <span>&#8594;</span>
              </ProjectCardAction>
          </ProjectCardContent>
        </HoverGroup>
        <HoverGroup>
          <ProjectCardContent className="ProjectCardContent marketing">
              <ProjectCardTitle className="ProjectCardTitle marketing">
                  Marketing
              </ProjectCardTitle>
              <ProjectCardBlurb>
                <ul>
                    <li>Google, Bing, Facebook Advertising</li>
                    <li>Marketing Automation Strategy</li>
                    <li>Pardot, Salesforce</li>
                    <li>Ontraport</li>
                    <li>A/B Testing (VWO, Hotjar, Unbounce, Reactful)</li>
                    <li>SEO, Moz</li>
                </ul>
              </ProjectCardBlurb>
              <ProjectCardAction className="ProjectCardAction marketing">
              Highlight These <span>&#8594;</span>
              </ProjectCardAction>
          </ProjectCardContent>
        </HoverGroup>
    </ProjectCardContainer>
)

export default SkillsGrid;