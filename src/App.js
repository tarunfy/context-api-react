import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContentProvider from "./context/AuthContext";
import BookContextProvider from "./context/BookContext";
import ThemeContextProvider from "./context/ThemeContext";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContentProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContentProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
