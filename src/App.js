import Header from "./Component/Layout/Header";
import MainContent from "./Component/Layout/MainContent";
import Footer from "./Component/Layout/Footer";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n";

function App() {
  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <Header />
        <MainContent />
        <Footer />
      </I18nextProvider>
    </div>
  );
}

export default App;
