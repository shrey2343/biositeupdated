import { createContext, useContext, useState, ReactNode } from 'react';

interface FormModalContextType {
  openFormModal: (triggerPdfDownload?: boolean) => void;
  closeFormModal: () => void;
  isFormModalOpen: boolean;
  shouldTriggerPdfDownload: boolean;
}

const FormModalContext = createContext<FormModalContextType | undefined>(undefined);

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [shouldTriggerPdfDownload, setShouldTriggerPdfDownload] = useState(false);

  const openFormModal = (triggerPdfDownload = false) => {
    setShouldTriggerPdfDownload(triggerPdfDownload);
    setIsFormModalOpen(true);
  };

  const closeFormModal = () => {
    setIsFormModalOpen(false);
    setShouldTriggerPdfDownload(false);
  };

  return (
    <FormModalContext.Provider value={{ openFormModal, closeFormModal, isFormModalOpen, shouldTriggerPdfDownload }}>
      {children}
    </FormModalContext.Provider>
  );
}

export function useFormModal() {
  const context = useContext(FormModalContext);
  if (context === undefined) {
    throw new Error('useFormModal must be used within a FormModalProvider');
  }
  return context;
}
