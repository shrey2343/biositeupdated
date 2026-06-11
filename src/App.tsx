import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import BioAILab from "./pages/BioAILab";
import BioCodeMastery from "./pages/BioCodeMastery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { FormModalProvider, useFormModal } from "./contexts/FormModalContext";
import ZohoFormModal from "./components/ZohoFormModal";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const { isFormModalOpen, closeFormModal, shouldTriggerPdfDownload } = useFormModal();
  
  return (
    <>
      <ScrollToTop />
      <ZohoFormModal 
        isOpen={isFormModalOpen} 
        onClose={closeFormModal} 
        triggerPdfDownload={shouldTriggerPdfDownload}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training/bioai-lab" element={<BioAILab />} />
        <Route path="/training/biocode-mastery" element={<BioCodeMastery />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <FormModalProvider>
      <AppContent />
    </FormModalProvider>
  );
}
