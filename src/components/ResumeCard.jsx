import React from "react";
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import PropTypes from "prop-types";
import moment from "moment";

const ResumeCardContainer = styled("div")`
    display: grid;
    grid-template-columns: 4fr 7fr;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
    margin-bottom: 4em;
    transition: all 150ms ease-in-out;
    text-decoration: none;
    color: currentColor;

    @media(max-width:950px) {
        grid-template-columns: 4.5fr 7fr;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        grid-template-columns: 1fr;
    }

    @media(max-width:${dimensions.maxwidthMobile}px) {
        margin-bottom: 2em;
    }

    &:hover {
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
        transition: all 150ms ease-in-out;

        .ResumeCardAction {
            color: ${colors.blue500};
            transition: all 150ms ease-in-out;

            span {
                transform: translateX(0px);
                opacity: 1;
                transition: transform 150ms ease-in-out;
            }
        }

        .ResumeCardContent::before {
            opacity: 0.02;
            transition: all 150ms ease-in-out;
        }

        .ResumeCardDescripContainer::before {
            opacity: 0.2;
            transition: all 150ms ease-in-out;
        }
    }
`

const ResumeCardContent = styled("div")`
    background: white;
    padding: 4em 3em 2.25em 3em;
    position: relative;

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${colors.blue500};
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

const ResumeCardCategory = styled("h6")`
    font-weight: 600;
    color: ${colors.grey600};
`

const ResumeCardTitle = styled("h3")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
`

const ResumeCardBlurb = styled("div")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 5em;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 2.5em;
    }
`

const ResumeCardAction = styled("div")`
    font-weight: 600;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    }
`

const ResumeCardDescripContainer = styled("div")`
    background: ${colors.grey200};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-left: 2em;
    padding-right: 2em;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        padding-top: 3em;
        padding-bottom: 3em;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${colors.blue500};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    img {
        max-width: 400px;
        width: 100%;
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);

        @media(max-width:${dimensions.maxwidthTablet}px) {
            max-width: 300px;
        }
    }
`

const startAndEndDates = (startDate, endDate) => {
  let start = moment(startDate);
  let end = moment(endDate);
  if (end > moment.now()) {
    return (
      start.format('MMM YYYY') + ' - current'
    )
  } else {
    return (
      start.format('MMM YYYY') + ' - ' + end.format('MMM YYYY')
    )
  }
}

const ResumeCard = ({ title, company, description, startDate, endDate, uid}) => (
    <ResumeCardContainer>
        <ResumeCardContent className="ResumeCardContent">
            <ResumeCardCategory>
                {company[0].text}
            </ResumeCardCategory>
            <ResumeCardTitle>
                {title[0].text}
            </ResumeCardTitle>
            <ResumeCardBlurb>
                {startAndEndDates(startDate, endDate)}
            </ResumeCardBlurb>
        </ResumeCardContent>
        <ResumeCardDescripContainer className="ResumeCardDescripContainer">
            {RichText.render(description)}
        </ResumeCardDescripContainer>
    </ResumeCardContainer>
)

export default ResumeCard;

ResumeCard.propTypes = {
    title: PropTypes.array.isRequired,
    company: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired
}