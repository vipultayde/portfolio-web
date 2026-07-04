/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Custom colors to match the legacy theme if needed, 
                // but Tailwind's default palette is usually sufficient.
                // We can extend if we want specific hex values from the old site.
            },
        },
    },
    plugins: [],
    darkMode: 'class', // Enable class-based dark mode
}
