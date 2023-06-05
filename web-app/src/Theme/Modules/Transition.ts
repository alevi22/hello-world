import { CSSProperties } from "react";

/** The default CSS transition time for elements in the application (in milliseconds) */
export const transitionDuration = 250;

/**
 * Constructs the default CSS transition for elements in the application
 *
 * @param properties CSS properties to apply the transition to (`all` by default)
 * @returns the CSS transition for the given properties
 */
export const transition = (...properties: CssPropertyName[]) => {
    const cssProperties = [...properties];
    if (cssProperties.length === 0) {
        cssProperties.push("all");
    }

    return cssProperties
        .map((property) => {
            // Convert property to kebab case
            const propertyCssCase = property
                .replace(/([A-Z])/g, "-$1")
                .replace(/[\s_]+/g, "-")
                .toLowerCase();

            return `${propertyCssCase} ${transitionDuration ?? 0}ms ease 0ms`;
        })
        .join(", ");
};

type CssPropertyName = keyof CSSProperties;
