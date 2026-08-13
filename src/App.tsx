import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import LandingPage from "./components/LandingPage";

function LanguageWrapper() {
  const { lang } = useParams<{ lang: string }>();

  if (lang !== "en" && lang !== "kh") {
    return <Navigate to="/en" replace />;
  }

  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/kh" replace />} />
        <Route path="/:lang" element={<LanguageWrapper />} />
        <Route path="/:lang/*" element={<LanguageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
