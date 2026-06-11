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

  // Handle form submission with fetch POST (no-cors)
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Honeypot check
    if (formData.get('aG9uZXlwb3Q')) {
      console.log('Bot detected');
      return;
    }
    
    try {
      await fetch('https://crm.zoho.in/crm/WebToContactForm', {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
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
    } catch (err) {
      console.error('Form submission error:', err);
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
    }
  };

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
                      onSubmit={handleFormSubmit}
                    >
                      {/* Updated security tokens from fresh Zoho form */}
                      <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='acc71d316a506e773ef155fb4a98c991c40fd358b5c801a94c7a3176a4ce397f' />
                      <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                      <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='50b6fb7ad571e37b1ee065945563d5894d15fbe9f593d5e1b1d4ab9685e1303d1dbcf132b2e01384c3c8ba9318cd11e0' />
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
                          <input 
                            type='text' 
                            id='Last_Name' 
                            name='Last Name' 
                            maxLength={80} 
                            aria-required='true' 
                            aria-label='Last Name'
                            required 
                          />
                        </div>
                      </div>

                      <div className='zcwf_row'>
                        <div className='zcwf_col_lab'>
                          <label htmlFor='Email'>Email</label>
                        </div>
                        <div className='zcwf_col_fld'>
                          <input 
                            type='text' 
                            id='Email' 
                            name='Email' 
                            maxLength={100}
                            autoComplete='false'
                            aria-required='false'
                            aria-label='Email'
                          />
                        </div>
                      </div>

                      <div className='zcwf_row'>
                        <div className='zcwf_col_lab'>
                          <label htmlFor='Title'>Country</label>
                        </div>
                        <div className='zcwf_col_fld'>
                          <input 
                            type='text' 
                            id='Title' 
                            name='Title' 
                            maxLength={100}
                            aria-required='false'
                            aria-label='Title'
                          />
                        </div>
                      </div>

                      <div className='zcwf_row'>
                        <div className='zcwf_col_lab'>
                          <label htmlFor='Phone'>WhatsApp Number</label>
                        </div>
                        <div className='zcwf_col_fld'>
                          <input 
                            type='text' 
                            id='Phone' 
                            name='Phone' 
                            maxLength={50}
                            aria-required='false'
                            aria-label='Phone'
                          />
                        </div>
                      </div>

                      <div className='zcwf_row'>
                        <div className='zcwf_col_lab'>
                          <label htmlFor='CONTACTCF12'>I am a</label>
                        </div>
                        <div className='zcwf_col_fld'>
                          <select 
                            className='zcwf_col_fld_slt' 
                            id='CONTACTCF12' 
                            name='CONTACTCF12'
                            role='combobox'
                            aria-expanded='false'
                            aria-haspopup='listbox'
                            aria-required='false'
                            aria-label='CONTACTCF12'
                          >
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
                          <select 
                            className='zcwf_col_fld_slt' 
                            id='CONTACTCF10' 
                            name='CONTACTCF10'
                            role='combobox'
                            aria-expanded='false'
                            aria-haspopup='listbox'
                            aria-required='false'
                            aria-label='CONTACTCF10'
                          >
                            <option value='-None-'>-None-</option>
                            <option value='NGS Data Analysis for Bioinformatics'>NGS Data Analysis for Bioinformatics</option>
                            <option value='Genomics &amp; Transcriptomics (RNA-Seq / DNA-Seq)'>Genomics &amp; Transcriptomics (RNA-Seq / DNA-Seq)</option>
                            <option value='Biotechnology &amp; Omics Technologies'>Biotechnology &amp; Omics Technologies</option>
                            <option value='Microbial Genomics &amp; Metagenomics'>Microbial Genomics &amp; Metagenomics</option>
                            <option value='Molecular Biology with NGS Applications'>Molecular Biology with NGS Applications</option>
                            <option value='Agricultural Genomics &amp; Plant Bioinformatics'>Agricultural Genomics &amp; Plant Bioinformatics</option>
                            <option value='Zoology &amp; Animal Genomics'>Zoology &amp; Animal Genomics</option>
                            <option value='Botany &amp; Plant Omics Analysis'>Botany &amp; Plant Omics Analysis</option>
                            <option value='Biochemistry &amp; Systems Biology'>Biochemistry &amp; Systems Biology</option>
                            <option value='Genetic Engineering &amp; CRISPR Data Analysis'>Genetic Engineering &amp; CRISPR Data Analysis</option>
                            <option value='B.Pharma &amp; Pharmaceutical Bioinformatics'>B.Pharma &amp; Pharmaceutical Bioinformatics</option>
                            <option value='M.Pharma &amp; Advanced Drug Discovery Informatics'>M.Pharma &amp; Advanced Drug Discovery Informatics</option>
                            <option value='Life Sciences Research using AI &amp; Bioinformatics'>Life Sciences Research using AI &amp; Bioinformatics</option>
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
                          <textarea 
                            id='Description' 
                            name='Description'
                            aria-multiline='true'
                            aria-required='false'
                            aria-label='Description'
                          ></textarea>
                        </div>
                      </div>

                      {/* Honeypot field - bot protection */}
                      <input 
                        type='text' 
                        style={{ display: 'none' }} 
                        name='aG9uZXlwb3Q' 
                        defaultValue='' 
                        autoComplete='off'
                        tabIndex={-1}
                      />

                      <div className='zcwf_row' style={{ textAlign: 'center', marginTop: '30px' }}>
                        <input 
                          type='submit' 
                          id='formsubmit'
                          className='formsubmit zcwf_button' 
                          value='Submit'
                          role='button'
                          aria-label='Submit'
                          title='Submit'
                        />
                      </div>
                    </form>
                    
                    {/* Zoho validation and tracking scripts */}
                    <script dangerouslySetInnerHTML={{ __html: `
                      function addAriaSelected1324452000000694003(){
                        var optionElem = event.target;
                        var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
                        if (previousSelectedOption) {
                          previousSelectedOption.removeAttribute('aria-selected');
                        }
                        optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
                      }
                      
                      function validateEmail1324452000000694003(){
                        var form = document.forms['WebToContacts1324452000000694003'];
                        var emailFld = form.querySelectorAll('[ftype=email]');
                        var i;
                        for(i = 0; i < emailFld.length; i++) {
                          var emailVal = emailFld[i].value;
                          if((emailVal.replace(/^\\s+|\\s+$/g, '')).length != 0) {
                            var atpos = emailVal.indexOf('@');
                            var dotpos = emailVal.lastIndexOf('.');
                            if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                              alert('Please enter a valid email address.');
                              emailFld[i].focus();
                              return false;
                            }
                          }
                        }
                        return true;
                      }
                      
                      function checkMandatory1324452000000694003(isAjax){
                        var mndFileds = new Array('Last Name');
                        var fldLangVal = new Array('Name');
                        for(i = 0; i < mndFileds.length; i++) {
                          var fieldObj = document.forms['WebToContacts1324452000000694003'][mndFileds[i]];
                          if(fieldObj) {
                            if(((fieldObj.value).replace(/^\\s+|\\s+$/g, '')).length == 0) {
                              if(fieldObj.type == 'file') {
                                alert('Please select a file to upload.');
                                fieldObj.focus();
                                return false;
                              }
                              alert(fldLangVal[i] + ' cannot be empty.');
                              fieldObj.focus();
                              return false;
                            } else if(fieldObj.nodeName == 'SELECT') {
                              if(fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                                alert(fldLangVal[i] + ' cannot be none.');
                                fieldObj.focus();
                                return false;
                              }
                            } else if(fieldObj.type == 'checkbox') {
                              if(fieldObj.checked == false) {
                                alert('Please accept ' + fldLangVal[i]);
                                fieldObj.focus();
                                return false;
                              }
                            }
                            try {
                              if(fieldObj.name == 'Last Name') {
                                name = fieldObj.value;
                              }
                            } catch(e) {}
                          }
                        }
                        if(!validateEmail1324452000000694003()) {
                          return false;
                        }
                        var urlparams = new URLSearchParams(window.location.search);
                        if(urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
                          var webform = document.getElementById('webform1324452000000694003');
                          var service = urlparams.get('service');
                          var smarturlfield = document.createElement('input');
                          smarturlfield.setAttribute('type', 'hidden');
                          smarturlfield.setAttribute('value', service);
                          smarturlfield.setAttribute('name', 'service');
                          webform.appendChild(smarturlfield);
                        }
                        document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
                        return true;
                      }
                    ` }} />
                    
                    {/* Analytics tracking */}
                    <script 
                      id='wf_anal' 
                      src='https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=5389518a22626e919d4e342c73fdc7413e148f5ec07ee4e6bab3973c3fcd8f2c5ac9f7cc4f35bff618ed8181afc38037gid066c17af1414e6b10cf60d7838570feee321960521e37eedad3a4b8f6b05eab5giddc1e98dada0f77f225abb2740e114124ff48d6f2de12163428e45dc917e57ebfgid0a9d85af502d8529eebb580c8568f59698e6eeb31f305025675149ceaa5784fd&tw=e89eaf69156cdf131994a77d0b897f4f9131081bc7a33fcdddfc836045f00a12'
                    />
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
