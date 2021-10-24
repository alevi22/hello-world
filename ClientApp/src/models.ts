import React from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

/**
 * Types of all possible React `children` props
 */
export type ReactChildren = React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];

/**
 * Template for the data of a navigation bar tab
 */
export type NavbarTab = {
    label: string,
    href: string,
    openWithNewTab?: boolean,
};

/**
 * Template for the data of an icon tab or button
 */
export type IconTab = NavbarTab & {
    iconName: IconName,
    iconPrefix?: IconPrefix,
    colorPrimary?: string,
    colorSecondary?: string,
};

/**
 * Template for education data
 */
export type EducationData = {
    id: number,
    school: string,
    location: string,
    degree: string,
    majors?: string[],
    minors?: string[],
    startDate: string,
    endDate?: string,
    classes: string[],
    additionalInfo?: { heading: string, text: string }[],
    photo: string,
    logo: string,
    logoAlt?: string,
    color?: string,
};

/**
 * Template for experience data
 */
export type ExperienceData = {
    id: number,
    jobTitle: string,
    companyName: string,
    startDate: string,
    endDate?: string,
    location: string,
    companyDescription: string,
    responsibilities: string[],
    technologies?: string[],
    companyWebsite: string,
    photo: string,
    logo: string,
    logoAlt?: string,
    color?: string,
};

/**
 * Template for portfolio data
 */
export type PortfolioData = {
    id: number,
    title: string,
    description: string,
    responsibilities: string[],
    technologies?: string[],
    website?: string,
    codeWebsite?: string,
    logo: string,
    logoAlt?: string,
    photo?: string,
    color?: string,
};