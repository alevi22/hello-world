import experienceData from "./data";
import { Card, Chip, ChipGroup, Link } from "Components";
import { getPreferredFormatOption } from "Utils";
import { Section, SimpleGrid } from "Containers";
import { separator } from "Global";
import { useTheme } from "@emotion/react";

/**
 * "Experience" section
 */
const Experience = () => {
  const theme = useTheme();

  return (
    <Section id="experience">
      <h2>Experience</h2>

      <SimpleGrid
        numColumns={{ large: 2, medium: 2, small: 1 }}
        // priority={experienceData.length % 2 !== 0}
      >
        {experienceData.map((experience) => {
          return (
            <Card
              logoSrc={getPreferredFormatOption(experience.logo, theme.type)}
              logoAlt={`${experience.organization} Logo`}
              imgSrc={experience.photo}
              color={getPreferredFormatOption(experience.color, theme.type)}
              key={experience.id}
            >
              <h3>{experience.title}</h3>

              <p>
                <b>
                  <Link href={experience.href} openWithNewTab>
                    {experience.organization}
                  </Link>
                </b>
                {[
                  "",
                  experience.location,
                  `${experience.startDate} to ${
                    experience.endDate ?? "Present"
                  }`,
                ].join(separator)}
              </p>

              {experience.responsibilities.length > 0 && (
                <ul>
                  {experience.responsibilities.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              )}

              {experience.technologies &&
                experience.technologies.length > 0 && (
                  <>
                    <h4>Technologies</h4>

                    <ChipGroup>
                      {experience.technologies.map((technology) => (
                        <Chip key={technology}>{technology}</Chip>
                      ))}
                    </ChipGroup>
                  </>
                )}
            </Card>
          );
        })}
      </SimpleGrid>
    </Section>
  );
};

export default Experience;
