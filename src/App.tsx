import { Suspense } from "react";
import Navbar from "./components/navbar/Navbar";
import { AppContextProvider } from "./context/AppContext";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <AppContextProvider>
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <AppRoutes />
      </Suspense>
    </AppContextProvider>
  );
}

export default App;
