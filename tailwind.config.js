/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "us-letter": "51rem", // 8.5 x 11 inches
        a4: "49.7rem", // 8.27 x 11.69 inches
      },
      height: {
        "us-letter": "66rem", // 8.5 x 11 inches
        a4: "70rem", // 8.27 x 11.69 inches
      },
      colors: {
        primary: "#020B26",
        secondary: "#274659",
        tritary: "#2B4C8C",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
// /* Color Theme Swatches in Hex */
// .Tridal®-Logo-&-Identity-1-hex { color: #020B26; }
// .Tridal®-Logo-&-Identity-2-hex { color: #071826; }
// .Tridal®-Logo-&-Identity-3-hex { color: #142F40; }
// .Tridal®-Logo-&-Identity-4-hex { color: #274659; }
// .Tridal®-Logo-&-Identity-5-hex { color: #F2F2F2; }

// /* Color Theme Swatches in RGBA */
// .Tridal®-Logo-&-Identity-1-rgba { color: rgba(1, 10, 38, 1); }
// .Tridal®-Logo-&-Identity-2-rgba { color: rgba(7, 23, 38, 1); }
// .Tridal®-Logo-&-Identity-3-rgba { color: rgba(19, 46, 63, 1); }
// .Tridal®-Logo-&-Identity-4-rgba { color: rgba(39, 70, 89, 1); }
// .Tridal®-Logo-&-Identity-5-rgba { color: rgba(242, 242, 242, 1); }

// /* Color Theme Swatches in HSLA */
// .Tridal®-Logo-&-Identity-1-hsla { color: hsla(225, 90, 7, 1); }
// .Tridal®-Logo-&-Identity-2-hsla { color: hsla(208, 68, 8, 1); }
// .Tridal®-Logo-&-Identity-3-hsla { color: hsla(202, 52, 16, 1); }
// .Tridal®-Logo-&-Identity-4-hsla { color: hsla(202, 38, 25, 1); }
// .Tridal®-Logo-&-Identity-5-hsla { color: hsla(0, 0, 95, 1); }
