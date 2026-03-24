import { useTheme, ThemeProvider } from "./context";

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

const Component = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h2>Theme Context: {theme}</h2>
      <button
        onClick={() => {
          if (theme === "dark") {
            setTheme("system");
            return;
          }
          setTheme("dark");
        }}
        className="btn btn-center"
      >
        Change Theme
      </button>
    </div>
  );
};

export default ParentComponent;
