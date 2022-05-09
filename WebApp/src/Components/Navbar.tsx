import { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { navbarHeight, screenSizes } from "../globals";
import { AppTheme } from "../theme";
import IconButton from "./Button/IconButton";
import Link from "./Link";
import Logo from "./Logo/Logo";
import { navbarTabs, socialTabs } from "../Data/navigationData";
import { CSSTransition } from "react-transition-group";
import {
    faBars,
    faClose,
    faMoon,
    faSun,
} from "@fortawesome/free-solid-svg-icons";

type NavbarProps = {
    toggleTheme?: () => void;
};

/**
 * A React component for the website's navigation bar
 *
 * Props:
 * * `toggleTheme` a function to change the application theme between light and dark modes
 */
const Navbar = (props: NavbarProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ ...props, theme });

    /*
     * Keep track of whether the navigation bar menu (shown on small screens instead
     * of the full navigation bar) is open (true) or closed (false). Initially, it is closed.
     */
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Create the display for the navigation bar tabs
    const tabs = (
        <>
            {navbarTabs.map((tab) => {
                return (
                    <Link
                        href={tab.href}
                        key={tab.label}
                        openWithNewTab={tab.openWithNewTab}
                    >
                        {tab.label}
                    </Link>
                );
            })}

            {socialTabs
                .filter((socialTab) => socialTab.label !== "Email")
                .map((iconTab) => {
                    return (
                        <IconButton
                            isTransparent
                            hoverTextColor={theme.colors.accentNavigation}
                            icon={iconTab.icon}
                            href={iconTab.href}
                            openWithNewTab
                            aria-label={iconTab.label}
                            title={iconTab.label}
                            key={iconTab.label}
                        />
                    );
                })}

            {props.toggleTheme && (
                <IconButton
                    isTransparent
                    hoverTextColor={theme.colors.accentNavigation}
                    icon={theme.type === "light" ? faMoon : faSun}
                    onClick={props.toggleTheme}
                    aria-label={`Change to ${
                        theme.type === "light" ? "dark" : "light"
                    } theme`}
                    title={`Change to ${
                        theme.type === "light" ? "dark" : "light"
                    } theme`}
                />
            )}
        </>
    );

    // Display the navigation bar
    return (
        <nav className={styles.nav}>
            <div className={styles.navbar}>
                <Logo
                    href="#top"
                    onClick={() => setMenuOpen(false)}
                    hoverColor={theme.colors.accentNavigation}
                />

                <IconButton
                    isTransparent
                    hoverTextColor={theme.colors.accentNavigation}
                    icon={isMenuOpen ? faClose : faBars}
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    className={styles.menuButton}
                    aria-label={`${isMenuOpen ? "Close" : "Open"} Menu`}
                    title={`${isMenuOpen ? "Close" : "Open"} Menu`}
                />

                <div className={styles.tabs}>{tabs}</div>
            </div>

            <CSSTransition
                in={isMenuOpen}
                timeout={theme.transitionTime}
                classNames={{
                    enter: styles.menuEnter,
                    enterActive: styles.menuEnterActive,
                    exit: styles.menuExit,
                    exitActive: styles.menuExitActive,
                }}
                unmountOnExit
            >
                <div className={styles.menu} onClick={() => setMenuOpen(false)}>
                    {tabs}
                </div>
            </CSSTransition>
        </nav>
    );
};

const menuWidth = "80vw";

const useStyles = createUseStyles<
    | "nav"
    | "navbar"
    | "tabs"
    | "menu"
    | "menuEnter"
    | "menuEnterActive"
    | "menuExit"
    | "menuExitActive"
    | "menuButton",
    NavbarProps,
    AppTheme
>({
    nav: {
        // Style each link in the navbar
        "& a": {
            textDecoration: "none",

            "@media (hover: hover) and (pointer: fine)": {
                "&:hover": {
                    color: (data) => data.theme.colors.accentNavigation,
                },
            },

            "&:focus-visible": {
                color: (data) => data.theme.colors.accentNavigation,
            },
        },
    },

    navbar: (data) => ({
        padding: "1rem 2.5rem",
        top: 0,
        width: "100%",
        height: `${navbarHeight}em`,
        position: "fixed",
        zIndex: 10,
        backgroundColor: data.theme.colors.backgroundNavigation,
        color: data.theme.colors.textNavigation,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
        gap: "1rem",
        overflow: "hidden",
    }),

    tabs: {
        display: "flex",
        gap: "1.5rem",
        flexWrap: "wrap",
        alignItems: "center",
        width: "auto",
        height: "auto",
        overflow: "hidden",

        // On small screens, hide the tabs
        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            display: "none",
        },
    },

    menu: {
        // Only show the menu on small screens
        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            display: "flex",
            position: "fixed",
            right: 0,
            width: menuWidth,
            height: `calc(100% - ${navbarHeight}rem)`,
            zIndex: 9,
            padding: "8rem 2.5rem",
            backgroundColor: (data) =>
                data.theme.colors.backgroundNavigationMenu,
            color: (data) => data.theme.colors.textNavigation,
            gap: "1rem",
            flexDirection: "column",
            alignItems: "flex-end", // right align
            justifyContent: "space-evenly",
        },
    },

    menuEnter: {
        opacity: 0,
        width: 0,
    },

    menuEnterActive: {
        opacity: 1,
        width: menuWidth,
        transition: (data) => data.theme.transition,
    },

    menuExit: {
        opacity: 1,
        width: menuWidth,
    },

    menuExitActive: {
        opacity: 0,
        width: 0,
        transition: (data) => data.theme.transition,
    },

    menuButton: {
        display: ["none", "!important"],
        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            display: ["block", "!important"],
        },
    },
});

export default Navbar;
