# Password Generator App

This project is a simple Password Generator built with React.  
It is designed as a learning exercise to understand and practice the following React hooks:

- `useState`
- `useEffect`
- `useRef`
- `useCallback`

## Purpose

The main goal of this project is to help you learn how to manage state, handle side effects, reference DOM elements, and optimize functions in React using hooks.

## Features

- Generate a random password based on user-selected options:
  - Adjustable password length (4–16)
  - Option to include numbers
  - Option to include special characters
- Copy generated password to clipboard
- Responsive and clean UI using Tailwind CSS

## Learning Focus

- **`useState`**: Manage password options and generated password state.
- **`useEffect`**: Automatically generate a new password when options change.
- **`useRef`**: Reference the password input for clipboard operations.
- **`useCallback`**: Optimize the password generation function to avoid unnecessary re-renders.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```

3. **Open your browser:**  
   Go to [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## License

This project
