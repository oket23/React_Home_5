# Vite + React + Tailwind

## What This Project Does

This is a React application that renders two interactive components:

- **Task 1:** A "Timer" component. It allows users to start, pause, and reset a time counter. The display dynamically shows hours, minutes, and seconds.
- **Task 2:** A "User List" component. It asynchronously fetches a list of users from an external API (`jsonplaceholder.typicode.com`) and displays each user as a separate `UserCard`. It also correctly handles loading and error states.


## Project Technologies

- **Bundler / Dev Tool:** [Vite](https://vitejs.dev/)
- **Language:** TypeScript
- **Framework:** React 19
- **Styling:** TailwindCSS (configured with `@tailwindcss/vite`)
- **Data Fetching:** Custom `useFetch` hook
- **Linter:** ESLint (configured for TypeScript, React Hooks, and React Refresh)

## Key Project Strengths

This project is built following professional standards and best practices:

### Clean Component Architecture
- `Timer` and `UserList` are **smart components** (containers) that manage state (e.g., `pause`, `reset`) and logic (e.g., calling the `useFetch` hook).
- `TimerDisplay` and `UserCard` are **dumb (presentational) components**. They only receive props and render UI, making them easy to test and reuse.

### Robust State Management
- `Timer` uses `useState` to cleanly manage the `pause` and `reset` states, passing them to its child component.
- `TimerDisplay` demonstrates an excellent pattern by managing its own internal state (`totalSeconds`) and using `useEffect` to synchronize this state with the `isPause` and `isReset` props.

### Professional Data Fetching
- The project does not use `fetch` directly in the component. Instead, it encapsulates the logic in a custom `useFetch` hook—a best practice for abstraction and reusability.
- The `useFetch` hook correctly manages all necessary states: `data`, `isLoading`, and `error`.
- The `useFetch` hook and `UserList` component implement `AbortController` logic to cancel requests. This prevents memory leaks and state updates if the component is unmounted before the request completes.

### Strong Type Safety
- All components have clearly defined TypeScript props (e.g., `TimerDisplayProps`).
- Data fetched from the API uses a dedicated `User` type from the `src/types/User.ts` file, ensuring reliability across the application.

### Modern Tooling
- Built with a modern stack: **Vite + React 19 + TypeScript**.
- Uses the new "flat" **ESLint** config format (`eslint.config.js`), configured for TypeScript and React.

---

## How to Run the Project

Follow these steps to set up and run the project locally:

### Clone the repository
```bash
git clone <your-repository-url>
cd react_app # Or your project's root directory
```

### Install dependencies
Make sure you have Node.js (v18 or higher) installed.
Then run:
```bash
npm install
```

### Start the development server
```bash
npm run dev
```
Once it’s running, open your browser and visit the local URL provided in your terminal (usually http://localhost:5173/).
