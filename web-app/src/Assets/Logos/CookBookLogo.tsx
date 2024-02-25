import { useTheme } from "@emotion/react";

const CookBookLogo = ({
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  const theme = useTheme();
  const fill = theme.type === "light" ? "#6176A9" : "#9698CF";
  const stroke = "#ffffff";

  return (
    <svg
      {...props}
      width={width}
      height={height ?? (width ? undefined : "1em")}
      viewBox="0 0 188 36"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <circle cx="18" cy="18" r="18" fill={fill} />
      <path
        d="M44.98 18.2C44.98 16.2773 45.4093 14.56 46.268 13.048C47.1453 11.5173 48.3307 10.332 49.824 9.492C51.336 8.63333 53.0253 8.204 54.892 8.204C57.076 8.204 58.9893 8.764 60.632 9.884C62.2747 11.004 63.4227 12.5533 64.076 14.532H59.568C59.12 13.5987 58.4853 12.8987 57.664 12.432C56.8613 11.9653 55.928 11.732 54.864 11.732C53.7253 11.732 52.708 12.0027 51.812 12.544C50.9347 13.0667 50.244 13.8133 49.74 14.784C49.2547 15.7547 49.012 16.8933 49.012 18.2C49.012 19.488 49.2547 20.6267 49.74 21.616C50.244 22.5867 50.9347 23.3427 51.812 23.884C52.708 24.4067 53.7253 24.668 54.864 24.668C55.928 24.668 56.8613 24.4347 57.664 23.968C58.4853 23.4827 59.12 22.7733 59.568 21.84H64.076C63.4227 23.8373 62.2747 25.396 60.632 26.516C59.008 27.6173 57.0947 28.168 54.892 28.168C53.0253 28.168 51.336 27.748 49.824 26.908C48.3307 26.0493 47.1453 24.864 46.268 23.352C45.4093 21.84 44.98 20.1227 44.98 18.2Z"
        fill={fill}
      />
      <path
        d="M74.3122 28.252C72.8189 28.252 71.4749 27.9253 70.2802 27.272C69.0855 26.6 68.1429 25.6573 67.4522 24.444C66.7802 23.2307 66.4442 21.8307 66.4442 20.244C66.4442 18.6573 66.7895 17.2573 67.4802 16.044C68.1895 14.8307 69.1509 13.8973 70.3642 13.244C71.5775 12.572 72.9309 12.236 74.4242 12.236C75.9175 12.236 77.2709 12.572 78.4842 13.244C79.6975 13.8973 80.6495 14.8307 81.3402 16.044C82.0495 17.2573 82.4042 18.6573 82.4042 20.244C82.4042 21.8307 82.0402 23.2307 81.3122 24.444C80.6029 25.6573 79.6322 26.6 78.4002 27.272C77.1869 27.9253 75.8242 28.252 74.3122 28.252ZM74.3122 24.836C75.0215 24.836 75.6842 24.668 76.3002 24.332C76.9349 23.9773 77.4389 23.4547 77.8122 22.764C78.1855 22.0733 78.3722 21.2333 78.3722 20.244C78.3722 18.7693 77.9802 17.64 77.1962 16.856C76.4309 16.0533 75.4882 15.652 74.3682 15.652C73.2482 15.652 72.3055 16.0533 71.5402 16.856C70.7935 17.64 70.4202 18.7693 70.4202 20.244C70.4202 21.7187 70.7842 22.8573 71.5122 23.66C72.2589 24.444 73.1922 24.836 74.3122 24.836Z"
        fill={fill}
      />
      <path
        d="M92.1677 28.252C90.6743 28.252 89.3303 27.9253 88.1357 27.272C86.941 26.6 85.9983 25.6573 85.3077 24.444C84.6357 23.2307 84.2997 21.8307 84.2997 20.244C84.2997 18.6573 84.645 17.2573 85.3357 16.044C86.045 14.8307 87.0063 13.8973 88.2197 13.244C89.433 12.572 90.7863 12.236 92.2797 12.236C93.773 12.236 95.1263 12.572 96.3397 13.244C97.553 13.8973 98.505 14.8307 99.1957 16.044C99.905 17.2573 100.26 18.6573 100.26 20.244C100.26 21.8307 99.8957 23.2307 99.1677 24.444C98.4583 25.6573 97.4877 26.6 96.2557 27.272C95.0423 27.9253 93.6797 28.252 92.1677 28.252ZM92.1677 24.836C92.877 24.836 93.5397 24.668 94.1557 24.332C94.7903 23.9773 95.2943 23.4547 95.6677 22.764C96.041 22.0733 96.2277 21.2333 96.2277 20.244C96.2277 18.7693 95.8357 17.64 95.0517 16.856C94.2863 16.0533 93.3437 15.652 92.2237 15.652C91.1037 15.652 90.161 16.0533 89.3957 16.856C88.649 17.64 88.2757 18.7693 88.2757 20.244C88.2757 21.7187 88.6397 22.8573 89.3677 23.66C90.1143 24.444 91.0477 24.836 92.1677 24.836Z"
        fill={fill}
      />
      <path
        d="M112.319 28L107.055 21.392V28H103.135V7.28H107.055V19.068L112.263 12.488H117.359L110.527 20.272L117.415 28H112.319Z"
        fill={fill}
      />
      <path
        d="M130.575 17.976C131.676 18.1813 132.581 18.732 133.291 19.628C134 20.524 134.355 21.5507 134.355 22.708C134.355 23.7533 134.093 24.6773 133.571 25.48C133.067 26.264 132.329 26.88 131.359 27.328C130.388 27.776 129.24 28 127.915 28H119.487V8.456H127.551C128.876 8.456 130.015 8.67067 130.967 9.1C131.937 9.52933 132.665 10.1267 133.151 10.892C133.655 11.6573 133.907 12.5253 133.907 13.496C133.907 14.6347 133.599 15.5867 132.983 16.352C132.385 17.1173 131.583 17.6587 130.575 17.976ZM123.407 16.52H126.991C127.924 16.52 128.643 16.3147 129.147 15.904C129.651 15.4747 129.903 14.868 129.903 14.084C129.903 13.3 129.651 12.6933 129.147 12.264C128.643 11.8347 127.924 11.62 126.991 11.62H123.407V16.52ZM127.355 24.808C128.307 24.808 129.044 24.584 129.567 24.136C130.108 23.688 130.379 23.0533 130.379 22.232C130.379 21.392 130.099 20.7387 129.539 20.272C128.979 19.7867 128.223 19.544 127.271 19.544H123.407V24.808H127.355Z"
        fill={fill}
      />
      <path
        d="M144.367 28.252C142.874 28.252 141.53 27.9253 140.335 27.272C139.14 26.6 138.198 25.6573 137.507 24.444C136.835 23.2307 136.499 21.8307 136.499 20.244C136.499 18.6573 136.844 17.2573 137.535 16.044C138.244 14.8307 139.206 13.8973 140.419 13.244C141.632 12.572 142.986 12.236 144.479 12.236C145.972 12.236 147.326 12.572 148.539 13.244C149.752 13.8973 150.704 14.8307 151.395 16.044C152.104 17.2573 152.459 18.6573 152.459 20.244C152.459 21.8307 152.095 23.2307 151.367 24.444C150.658 25.6573 149.687 26.6 148.455 27.272C147.242 27.9253 145.879 28.252 144.367 28.252ZM144.367 24.836C145.076 24.836 145.739 24.668 146.355 24.332C146.99 23.9773 147.494 23.4547 147.867 22.764C148.24 22.0733 148.427 21.2333 148.427 20.244C148.427 18.7693 148.035 17.64 147.251 16.856C146.486 16.0533 145.543 15.652 144.423 15.652C143.303 15.652 142.36 16.0533 141.595 16.856C140.848 17.64 140.475 18.7693 140.475 20.244C140.475 21.7187 140.839 22.8573 141.567 23.66C142.314 24.444 143.247 24.836 144.367 24.836Z"
        fill={fill}
      />
      <path
        d="M162.222 28.252C160.729 28.252 159.385 27.9253 158.19 27.272C156.996 26.6 156.053 25.6573 155.362 24.444C154.69 23.2307 154.354 21.8307 154.354 20.244C154.354 18.6573 154.7 17.2573 155.39 16.044C156.1 14.8307 157.061 13.8973 158.274 13.244C159.488 12.572 160.841 12.236 162.334 12.236C163.828 12.236 165.181 12.572 166.394 13.244C167.608 13.8973 168.56 14.8307 169.25 16.044C169.96 17.2573 170.314 18.6573 170.314 20.244C170.314 21.8307 169.95 23.2307 169.222 24.444C168.513 25.6573 167.542 26.6 166.31 27.272C165.097 27.9253 163.734 28.252 162.222 28.252ZM162.222 24.836C162.932 24.836 163.594 24.668 164.21 24.332C164.845 23.9773 165.349 23.4547 165.722 22.764C166.096 22.0733 166.282 21.2333 166.282 20.244C166.282 18.7693 165.89 17.64 165.106 16.856C164.341 16.0533 163.398 15.652 162.278 15.652C161.158 15.652 160.216 16.0533 159.45 16.856C158.704 17.64 158.33 18.7693 158.33 20.244C158.33 21.7187 158.694 22.8573 159.422 23.66C160.169 24.444 161.102 24.836 162.222 24.836Z"
        fill={fill}
      />
      <path
        d="M182.374 28L177.11 21.392V28H173.19V7.28H177.11V19.068L182.318 12.488H187.414L180.582 20.272L187.47 28H182.374Z"
        fill={fill}
      />
      <path
        d="M17 23V19M12 23H24V27H12V23ZM20.5 23V16V23Z"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18.5V23H24V18.5C24 18.5 26.5 17 26.5 14.5C26.5 12 24.5 11 22 11C22 10 20.5 8 18 8C15.5 8 14 10 14 11C12 11 9.5 12 9.5 14.5C9.5 17 12 18.5 12 18.5Z"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CookBookLogo;