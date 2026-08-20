tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "background": "#131313",
                "on-background": "#e5e2e1",
                "primary": "#7df4ff",
                "primary-dim": "#00dbe9",
                "on-primary": "#002022",
                "on-surface": "#e5e2e1",
                "on-surface-alt": "#b9cacb",
                "outline-alt": "#3b494b",
                "surface-highest": "#353534",
                "surface-low": "#1c1b1b",
                "surface-lowest": "#0e0e0e"
            },
            "spacing": {
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
