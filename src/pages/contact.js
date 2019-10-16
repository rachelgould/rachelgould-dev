import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";

const ContactTitle = styled("h1")`
    margin-bottom: 1em;
`

const embedCode = `<div class="typeform-widget" data-url="https://rachelgould219290.typeform.com/to/MC4n7J" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=MC4n7J&utm_source=typeform.com-14848761-Free&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>`

const Contact = ({ title, meta }) => (
    <>
        <Helmet
            title={`Contact Me | RachelGould.dev`}
            titleTemplate={`%s | Contact Me | RachelGould.dev`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `Contact | RachelGould.dev`,
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
            <ContactTitle>
                {title}
            </ContactTitle>
            <div className="typeform-widget" data-url="https://rachelgould219290.typeform.com/to/MC4n7J" id="typef_orm" style={{width: 100 + '%', height: 500 + 'px'}}></div> {(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()}
        </Layout>
    </>
);

export default ({ data }) => {
    const title = data.prismic.allContacts.edges[0].node.title[0].text;
    const meta = data.site.siteMetadata;

    return (
        <Contact title={title} meta={meta}/>
    )
}

export const query = graphql`
    {
        prismic {
            allContacts {
                edges {
                    node {
                        title
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

