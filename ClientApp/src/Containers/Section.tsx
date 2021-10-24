import Container from './Container';
import { navbarHeight } from '../globals';
import { createUseStyles } from 'react-jss';
import { ReactChildren } from '../models';

type SectionProps = {
    id?: string,
    children: ReactChildren,
}

/**
 * A React component representing a container for a section of the app
 * 
 * Props:
 * * `id` an optional ID for the container (for example, to set up links to certain parts of the webpage)
 * * `children` any content to put inside the container
 */
const Section = (props: SectionProps) => {
    const styles = useStyles();

    return (
        <section id={props.id} className={styles.section}>
            <Container>
                {props.children}
            </Container>
        </section>
    );
}

/**
 * Creates the section's styles
 */
const useStyles = createUseStyles({
    section: {
        paddingTop: `${navbarHeight + 0.5}em`,
        '&:last-child': {
            paddingBottom: `${navbarHeight + 0.5}em`,
        }
    }
});

export default Section;