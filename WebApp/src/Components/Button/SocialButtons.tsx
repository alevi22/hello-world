import { socialTabs } from "../../Data/navigationData";
import IconButton from "./IconButton";
import IconButtonGroup from "./IconButtonGroup";

type SocialButtonProps = {
    style?: React.CSSProperties;
    backgroundColor?: string;
    textColor?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
};

/**
 * A group of social buttons
 */
const SocialButtons = (props: SocialButtonProps) => {
    return (
        <IconButtonGroup style={props.style}>
            {socialTabs.map((socialTab) => {
                return (
                    <IconButton
                        iconName={socialTab.iconName}
                        iconPrefix={socialTab.iconPrefix}
                        backgroundColor={props.backgroundColor}
                        textColor={props.textColor}
                        hoverBackgroundColor={
                            socialTab.colorPrimary || props.hoverBackgroundColor
                        }
                        hoverTextColor={
                            socialTab.colorSecondary || props.hoverTextColor
                        }
                        href={socialTab.href}
                        key={[socialTab.iconPrefix, socialTab.iconName].join(
                            " "
                        )}
                        title={socialTab.label}
                        aria-label={socialTab.label}
                    />
                );
            })}
        </IconButtonGroup>
    );
};

export default SocialButtons;