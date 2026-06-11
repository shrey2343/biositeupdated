import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PDF_URL = "/Bioinformatics_Interview_Bible_Final.pdf";

interface ZohoFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerPdfDownload?: boolean; // If true, downloads PDF after form submission
}

export default function ZohoFormModal({ isOpen, onClose, triggerPdfDownload = false }: ZohoFormModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  // Handle form submission
  useEffect(() => {
    const handleFormSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement;
      if (form.id === 'webform1324452000000694003') {
        e.preventDefault();
        
        // Submit form via AJAX
        const formData = new FormData(form);
        fetch(form.action, {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        }).then(() => {
          setIsSubmitted(true);
          
          // If this is for PDF download, trigger download after 1 second
          if (triggerPdfDownload) {
            setTimeout(() => {
              const link = document.createElement('a');
              link.href = PDF_URL;
              link.download = 'Bioinformatics_Interview_Bible_Final.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              
              // Close modal after download starts
              setTimeout(() => {
                onClose();
              }, 1000);
            }, 1000);
          } else {
            // Close after showing thank you message
            setTimeout(() => {
              onClose();
            }, 3000);
          }
        }).catch(err => {
          console.error('Form submission error:', err);
          // Still show success since form was submitted (no-cors doesn't return response)
          setIsSubmitted(true);
          if (triggerPdfDownload) {
            setTimeout(() => {
              const link = document.createElement('a');
              link.href = PDF_URL;
              link.download = 'Bioinformatics_Interview_Bible_Final.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              setTimeout(() => onClose(), 1000);
            }, 1000);
          } else {
            setTimeout(() => onClose(), 3000);
          }
        });
      }
    };

    if (isOpen) {
      document.addEventListener('submit', handleFormSubmit);
    }

    return () => {
      document.removeEventListener('submit', handleFormSubmit);
    };
  }, [isOpen, triggerPdfDownload, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-secondary hover:bg-secondary/80 rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>

              {isSubmitted ? (
                // Thank You Message
                <div className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h2 className="text-3xl font-extrabold text-foreground mb-4">Thank You!</h2>
                  <p className="text-lg text-muted-foreground mb-2">
                    Your submission has been received successfully.
                  </p>
                  {triggerPdfDownload && (
                    <p className="text-sm text-primary font-semibold">
                      Your download will begin shortly...
                    </p>
                  )}
                </div>
              ) : (
                // Zoho Form
                <div className="p-8 max-h-[80vh] overflow-y-auto">
                  <h2 className="text-2xl font-extrabold text-foreground mb-2 text-center">Get in Touch</h2>
                  <p className="text-muted-foreground text-center mb-6">Fill out the form below and we'll get back to you soon.</p>
                  
                  <div id='crmWebToEntityForm' className='zcwf_lblLeft crmWebToEntityForm' style={{ backgroundColor: 'white', color: 'black', maxWidth: '600px', margin: '0 auto' }}>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                    <meta httpEquiv='content-type' content='text/html;charset=UTF-8' />
                    
                    <form 
                      id='webform1324452000000694003' 
                      action='https://crm.zoho.in/crm/WebToContactForm' 
                      name='WebToContacts1324452000000694003' 
                      method='POST' 
                      acceptCharset='UTF-8'
                    >
                      <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='e5153e90ad8ee32a302278cf7d0ba096d540f3b56f7b821974e8b307024d9924' />
                      <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                      <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='876a8bb8166b7664ca5f471747c8a3ff2c738792e3ee8d48cf845a4015fa5e832cf87a573cee9acb429b3f8fa31f2a00' />
                      <input type='text' style={{ display: 'none' }} name='actionType' value='Q29udGFjdHM=' />
                      <input type='text' style={{ display: 'none' }} name='returnURL' value='null' />
                      
                      <style dangerouslySetInnerHTML={{ __html: `
                        .zcwf_lblLeft .zcwf_col_fld input[type=text],
                        .zcwf_lblLeft .zcwf_col_fld textarea,
                        .zcwf_lblLeft .zcwf_col_fld_slt {
                          width: 100% !important;
                          padding: 10px;
                          border: 1px solid #e2e8f0 !important;
                          border-radius: 8px;
                          font-size: 14px;
                          font-family: inherit;
                        }
                        .zcwf_lblLeft .zcwf_col_lab {
                          width: 100% !important;
                          margin-bottom: 6px;
                          font-weight: 600;
                          color: #1e293b;
                        }
                        .zcwf_lblLeft .zcwf_col_fld {
                          width: 100% !important;
                          margin-bottom: 4px;
                        }
                        .zcwf_lblLeft .zcwf_row {
                          margin: 0 0 20px 0;
                        }
                        .formsubmit.zcwf_button {
                          background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%) !important;
                          color: white !important;
                          padding: 12px 32px !important;
                          border-radius: 9999px !important;
                          font-weight: 600 !important;
                          border: none !important;
                          cursor: pointer !important;
                          font-size: 14px !important;
                          transition: all 0.3s !important;
                        }
                        .formsubmit.zcwf_button:hover {
                          opacity: 0.9 !important;
                          transform: translateY(-1px) !important;
                        }
                        .zcwf_button[type=reset] {
                          display: none !important;
                        }
                        textarea {
                          min-height: 100px !important;
                          resize: vertical !important;
                        }
                      ` }} />

                      <div className='zcwf_row'>
                        <div className='zcwf_col_lab'>
                          <label htmlFor='Last_Name'>Name <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className='zcwf_col_fld'>
                          <input type='text' id='Last_Name' name='Last Name' maxLength={80} required />
                        </div>
                      </div>

                      <div className='zcwf_row'>
                        <div className='zcwf_col_lab'>
                          <label htmlFor='Email'>Email</label>
                        </div>
                        <div className='zcwf_col_fld'>
                          <input type='email' id='Email' name='Email' maxLength={100} />
                        </div>
                      </div>

                      <div className='zcwf_row'>
                        <div className='zcwf_col_lab'>
                          <label htmlFor='Title'>Country</label>
                        </div>
                        <div className='zcwf_col_fld'>
                          <input type='text' id='Title' name='Title' maxLength={100} />
                        </div>
                      </div>

                      <div className='zcwf_row'>
                        <div className='zcwf_col_lab'>
                          <label htmlFor='Phone'>WhatsApp Number</label>
                        </div>
                        <div className='zcwf_col_fld'>
                          <input type='text' id='Phone' name='Phone' maxLength={50} />
                        </div>
                      </div>

                      <div className='zcwf_row'>
                        <div className='zcwf_col_lab'>
                          <label htmlFor='CONTACTCF12'>I am a</label>
                        </div>
                        <div className='zcwf_col_fld'>
                          <select className='zcwf_col_fld_slt' id='CONTACTCF12' name='CONTACTCF12'>
                            <option value='-None-'>-None-</option>
                            <option value="UG / Bachelor's Student">UG / Bachelor's Student</option>
                            <option value="PG / Master's Student">PG / Master's Student</option>
                            <option value='PhD Scholar / Research Scholar'>PhD Scholar / Research Scholar</option>
                            <option value='Professor / Principal Investigator'>Professor / Principal Investigator</option>
                            <option value='R&D Professional / Scientist'>R&D Professional / Scientist</option>
                            <option value='Postdoc / Research Associate'>Postdoc / Research Associate</option>
                            <option value='Biotech Startup Founder / Team'>Biotech Startup Founder / Team</option>
                            <option value='Government / Ministry Official'>Government / Ministry Official</option>
                            <option value='NGO / Think Tank Professional'>NGO / Think Tank Professional</option>
                          </select>
                        </div>
                      </div>

                      <div className='zcwf_row'>
                        <div className='zcwf_col_lab'>
                          <label htmlFor='CONTACTCF10'>I'm interested in…</label>
                        </div>
                        <div className='zcwf_col_fld'>
                          <select className='zcwf_col_fld_slt' id='CONTACTCF10' name='CONTACTCF10'>
                            <option value='-None-'>-None-</option>
                            <option value='NGS Data Analysis for Bioinformatics'>NGS Data Analysis for Bioinformatics</option>
                            <option value='Genomics & Transcriptomics (RNA-Seq / DNA-Seq)'>Genomics & Transcriptomics (RNA-Seq / DNA-Seq)</option>
                            <option value='Biotechnology & Omics Technologies'>Biotechnology & Omics Technologies</option>
                            <option value='Microbial Genomics & Metagenomics'>Microbial Genomics & Metagenomics</option>
                            <option value='Molecular Biology with NGS Applications'>Molecular Biology with NGS Applications</option>
                            <option value='Agricultural Genomics & Plant Bioinformatics'>Agricultural Genomics & Plant Bioinformatics</option>
                            <option value='Zoology & Animal Genomics'>Zoology & Animal Genomics</option>
                            <option value='Botany & Plant Omics Analysis'>Botany & Plant Omics Analysis</option>
                            <option value='Biochemistry & Systems Biology'>Biochemistry & Systems Biology</option>
                            <option value='Genetic Engineering & CRISPR Data Analysis'>Genetic Engineering & CRISPR Data Analysis</option>
                            <option value='B.Pharma & Pharmaceutical Bioinformatics'>B.Pharma & Pharmaceutical Bioinformatics</option>
                            <option value='M.Pharma & Advanced Drug Discovery Informatics'>M.Pharma & Advanced Drug Discovery Informatics</option>
                            <option value='Life Sciences Research using AI & Bioinformatics'>Life Sciences Research using AI & Bioinformatics</option>
                            <option value='Research Paper / Manuscript Support'>Research Paper / Manuscript Support</option>
                            <option value='Dissertation / Thesis Support'>Dissertation / Thesis Support</option>
                            <option value='Bioinformatics Training (Linux / R / Python / NGS)'>Bioinformatics Training (Linux / R / Python / NGS)</option>
                            <option value='Not sure — I need guidance'>Not sure — I need guidance</option>
                          </select>
                        </div>
                      </div>

                      <div className='zcwf_row'>
                        <div className='zcwf_col_lab'>
                          <label htmlFor='Description'>Anything specific we should know?</label>
                        </div>
                        <div className='zcwf_col_fld'>
                          <textarea id='Description' name='Description'></textarea>
                        </div>
                      </div>

                      <input type='text' style={{ display: 'none' }} name='aG9uZXlwb3Q' value='' />

                      <div className='zcwf_row' style={{ textAlign: 'center', marginTop: '30px' }}>
                        <input type='submit' className='formsubmit zcwf_button' value='Submit' />
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
