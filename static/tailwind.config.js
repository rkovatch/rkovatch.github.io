tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "background": "#131313",
                "error": "#ffb4ab",
                "error-container": "#93000a",
                "inverse-on-surface": "#313030",
                "inverse-primary": "#006970",
                "inverse-surface": "#e5e2e1",
                "on-background": "#e5e2e1",
                "on-error": "#690005",
                "on-error-container": "#ffdad6",
                "on-primary": "#00363a",
                "on-primary-container": "#006970",
                "on-primary-fixed": "#002022",
                "on-primary-fixed-variant": "#004f54",
                "on-secondary": "#5e1700",
                "on-secondary-container": "#521300",
                "on-secondary-fixed": "#3a0b00",
                "on-secondary-fixed-variant": "#852400",
                "on-surface": "#e5e2e1",
                "on-surface-variant": "#b9cacb",
                "on-tertiary": "#303031",
                "on-tertiary-container": "#5f5e5f",
                "on-tertiary-fixed": "#1b1b1c",
                "on-tertiary-fixed-variant": "#474647",
                "outline": "#849495",
                "outline-variant": "#3b494b",
                "primary": "#dbfcff",
                "primary-container": "#00f0ff",
                "primary-fixed": "#7df4ff",
                "primary-fixed-dim": "#00dbe9",
                "secondary": "#ffb59e",
                "secondary-container": "#ff571a",
                "secondary-fixed": "#ffdbd0",
                "secondary-fixed-dim": "#ffb59e",
                "surface": "#131313",
                "surface-bright": "#3a3939",
                "surface-container": "#201f1f",
                "surface-container-high": "#2a2a2a",
                "surface-container-highest": "#353534",
                "surface-container-low": "#1c1b1b",
                "surface-container-lowest": "#0e0e0e",
                "surface-dim": "#131313",
                "surface-tint": "#00dbe9",
                "surface-variant": "#353534",
                "tertiary": "#f8f5f6",
                "tertiary-container": "#dcd9da",
                "tertiary-fixed": "#e5e2e3",
                "tertiary-fixed-dim": "#c8c6c7"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "unit": "4px",
                "gutter": "16px",
                "margin-mobile": "16px",
                "margin-desktop": "32px",
                "container-max": "1440px"
            },
            "fontFamily": {
                "display-lg": ["Hanken Grotesk"],
                "label-caps": ["JetBrains Mono"],
                "headline-md": ["Hanken Grotesk"],
                "body-sm": ["Geist"],
                "body-lg": ["Geist"],
                "code-sm": ["JetBrains Mono"]
            },
            "fontSize": {
                "display-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "0.05em", "fontWeight": "700" }],
                "label-caps": ["12px", { "lineHeight": "1", "letterSpacing": "0.15em", "fontWeight": "700" }],
                "headline-md": ["24px", { "lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "600" }],
                "body-sm": ["14px", { "lineHeight": "1.5", "letterSpacing": "0em", "fontWeight": "400" }],
                "body-lg": ["16px", { "lineHeight": "1.6", "letterSpacing": "0em", "fontWeight": "400" }],
                "code-sm": ["10px", { "lineHeight": "1.4", "letterSpacing": "0.02em", "fontWeight": "500" }]
            }
        }
    }
}