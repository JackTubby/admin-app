// Setup to get all the colours and the typography of the site. (Light & Dark Mode)

import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// Colour design tokens

// Pass in mode which will be a light or dark mode
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
            grey: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414"
            },
            primary: {
                100: "#d0d1d5",
                200: "#a1a4ab",
                300: "#727681",
                400: "#434957",
                500: "#141b2d",
                600: "#101624",
                700: "#0c101b",
                800: "#080b12",
                900: "#040509"
            },
            greenAccent: {
                100: "#dbf5ee",
                200: "#b7ebde",
                300: "#94e2cd",
                400: "#70d8bd",
                500: "#4cceac",
                600: "#3da58a",
                700: "#2e7c67",
                800: "#1e5245",
                900: "#0f2922"
            },
            redAccent: {
                100: "#f8dcdb",
                200: "#f1b9b7",
                300: "#e99592",
                400: "#e2726e",
                500: "#db4f4a",
                600: "#af3f3b",
                700: "#832f2c",
                800: "#58201e",
                900: "#2c100f"
            },
            indigoAccent: {
                100: "#e1e2fe",
                200: "#c3c6fd",
                300: "#a4a9fc",
                400: "#868dfb",
                500: "#6870fa",
                600: "#535ac8",
                700: "#3e4396",
                800: "#2a2d64",
                900: "#151632"
            },
        } : {
            grey: {
                100: "#141414",
                200: "#292929",
                300: "#3d3d3d",
                400: "#525252",
                500: "#666666",
                600: "#858585",
                700: "#a3a3a3",
                800: "#c2c2c2",
                900: "#e0e0e0",
            },
            primary: {
                100: "#040509",
                200: "#080b12",
                300: "#0c101b",
                400: "#f2f0f0",
                500: "#141b2d",
                600: "#434957",
                700: "#727681",
                800: "#a1a4ab",
                900: "#d0d1d5",
            },
            greenAccent: {
                100: "#0f2922",
                200: "#1e5245",
                300: "#2e7c67",
                400: "#3da58a",
                500: "#4cceac",
                600: "#70d8bd",
                700: "#94e2cd",
                800: "#b7ebde",
                900: "#dbf5ee",
            },
            redAccent: {
                100: "#2c100f",
                200: "#58201e",
                300: "#832f2c",
                400: "#af3f3b",
                500: "#db4f4a",
                600: "#e2726e",
                700: "#e99592",
                800: "#f1b9b7",
                900: "#f8dcdb",
            },
            indigoAccent: {
                100: "#151632",
                200: "#2a2d64",
                300: "#3e4396",
                400: "#535ac8",
                500: "#6870fa",
                600: "#868dfb",
                700: "#a4a9fc",
                800: "#c3c6fd",
                900: "#e1e2fe",
            },
        }),
});

// Colours are setup above so now we setup material UI to use those colours

// Mui theme settings
export const themeSettings = (mode) => {
    // return whatever colours (tokens) depending on the mode
    const colours = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                   primary: {
                    main: colours.primary[500],
                   },
                   secondary: {
                    main:colours.greenAccent[500],
                    },
                    neutral: {
                        dark: colours.grey[700],
                        main: colours.grey[500],
                        light: colours.grey[100],
                    },
                    background: {
                        default: colours.primary[500],
                    }
                } : {
                    primary: {
                        main: colours.primary[100],
                       },
                       secondary: {
                        main:colours.greenAccent[500],
                        },
                        neutral: {
                            dark: colours.grey[700],
                            main: colours.grey[500],
                            light: colours.grey[100],
                        },
                        background: {
                            default: "#fcfcfc",
                        }
                })
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

// Context for colour mode
// This is a func that will allow us to provide it throughout the app so we have a trigger for this
export const ColourModeContext = createContext({
    toggleColourMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colourMode = useMemo(
        () => ({
          toggleColourMode: () =>
            setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
      );
    // Create the theme for material UI and we are passing in the mode into our theme settings we created
    // Which gives us an obj of the proper format depending on the light or dark mode
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    // Reaturn theme and colourMode for us to use
    return [theme, colourMode]
}

// ?
// By doing all this it allows us to create a context that we can have easy access to the condition of wether its dark or light and allow
// us to use a function to change modes, this function will then be applied to our light and dark mode icon on our page
