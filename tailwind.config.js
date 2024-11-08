// import { createThemes } from "tw-colors";
import themeDarkRed   from "./src/styles/themes/dark-red";
import themeLightRed  from "./src/styles/themes/light-red";
import themeLightBlue from "./src/styles/themes/light-blue";
import themeDarkBlue  from "./src/styles/themes/dark-blue";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{html,js}"
  ],
	darkMode: ['class', "class"], // false or "class" or "media"
  theme: {
	extend: {
		screens: {
			'tam-1' : '430px',
			'tam-2' : '640px',
			'tam-3' : '768px',
			'tam-4' : '1024px'
		},
		backgroundImage: {
			quarto: "url('/bgcama.jpg')"
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
	},
  	extends: {
		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsla(var(--popover))',
  				foreground: 'hsla(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [
		require("tailwindcss-animate"),
		require("tailwindcss-themer")({
			defaultTheme: {
				extend: {
					colors: themeDarkBlue
				}
			},
			themes: [
				{	
					name: "light-red",
					extend: {
						colors: themeLightRed
					}
				},
				{
					name: "dark-red",
					extend: {
						colors: themeDarkRed
					}
				},		
				{
					name: "light-blue",
					extend: {
						colors: themeLightBlue
					}
				},
				{
					name: "dark-blue",
					extend: {
						colors: themeDarkBlue
					}
				},

			]
		})
  ]
}