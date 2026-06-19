import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, defaultValue?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'mr',
  setLanguage: () => {},
  t: (key) => key,
});

import { landingTranslations } from './LandingTranslations';

const translations = {
  en: {
    ...landingTranslations.en,
    'app.title': 'Kanta Charitable Trust',
    'nav.registration': 'Registration',
    'nav.directory': 'Children Directory',
    'form.title': 'Child Application Form',
    'form.subtitle': 'Fill out personal details and assign initial help items.',
    'section.personal': 'Personal Details',
    'section.personal.desc': 'Basic information about the child.',
    'label.firstName': 'First name',
    'label.lastName': 'Last name',
    'label.dob': 'Date of birth',
    'label.gender': 'Gender',
    'gender.male': 'Male',
    'gender.female': 'Female',
    'gender.other': 'Other',
    'section.contact': 'Contact & Guardian',
    'section.contact.desc': 'Who to contact and where they reside.',
    'label.guardianName': 'Guardian name',
    'label.contactNumber': 'Contact number',
    'label.address': 'Full Address',
    'section.additional': 'Additional Info',
    'section.additional.desc': 'Educational background and medical notes.',
    'label.educationLevel': 'Education level',
    'label.medicalConditions': 'Medical conditions',
    'section.help': 'Initial Help',
    'section.help.desc': 'Assign help categories right away.',
    'msg.noHelp': 'No help added yet.',
    'label.item': 'Item',
    'label.quantity': 'Quantity',
    'label.date': 'Date',
    'btn.addHelp': 'Add help',
    'btn.submit': 'Complete Form',
    'btn.submitting': 'Processing...',
    'msg.success': 'Form submitted successfully.',
    'msg.errorSubmit': 'Failed to submit form.',
    'msg.errorNetwork': 'Network error occurred while submitting.',
    'btn.additionalInfo': 'Additional Info',
    'btn.hideAdditionalInfo': 'Hide Additional Info',
    'section.extended': 'Extended Details',
    'section.extended.desc': 'Other basic information.',
    
    // Placeholders
    'ph.firstName': 'Enter first name',
    'ph.lastName': 'Enter last name',
    'ph.guardianName': 'Enter guardian name',
    'ph.contactNumber': 'Enter contact number',
    'ph.address': 'Enter full address',
    'ph.educationLevel': 'Enter education level',
    'ph.medicalConditions': 'Enter medical conditions',
    'ph.item': 'Enter item name'
  },
  mr: {
    ...landingTranslations.mr,
    'app.title': 'कांता चॅरिटेबल ट्रस्ट',
    'nav.registration': 'नोंदणी',
    'nav.directory': 'मुलांची यादी',
    'form.title': 'मूल नोंदणी अर्ज',
    'form.subtitle': 'वैयक्तिक माहिती भरा आणि सुरुवातीची मदत नेमा.',
    'section.personal': 'वैयक्तिक माहिती',
    'section.personal.desc': 'मुलाची प्राथमिक माहिती.',
    'label.firstName': 'पहिले नाव',
    'label.lastName': 'आडनाव',
    'label.dob': 'जन्मतारीख',
    'label.gender': 'लिंग',
    'gender.male': 'पुरुष',
    'gender.female': 'स्त्री',
    'gender.other': 'इतर',
    'section.contact': 'संपर्क आणि पालक',
    'section.contact.desc': 'कोणाशी संपर्क साधावा आणि ते कुठे राहतात.',
    'label.guardianName': 'पालकाचे नाव',
    'label.contactNumber': 'संपर्क क्रमांक',
    'label.address': 'संपूर्ण पत्ता',
    'section.additional': 'अतिरिक्त माहिती',
    'section.additional.desc': 'शैक्षणिक पार्श्वभूमी आणि वैद्यकीय नोंदी.',
    'label.educationLevel': 'शिक्षणाची पातळी',
    'label.medicalConditions': 'वैद्यकीय समस्या',
    'section.help': 'सुरुवातीची मदत',
    'section.help.desc': 'लगेच मदतीचे प्रकार नेमा.',
    'msg.noHelp': 'अद्याप कोणतीही मदत जोडलेली नाही.',
    'label.item': 'वस्तूचे नाव',
    'label.quantity': 'प्रमाण',
    'label.date': 'तारीख',
    'btn.addHelp': 'मदत जोडा',
    'btn.submit': 'अर्ज पूर्ण करा',
    'btn.submitting': 'प्रक्रिया करत आहे...',
    'msg.success': 'अर्ज यशस्वीरित्या जमा झाला.',
    'msg.errorSubmit': 'अर्ज जमा करण्यात त्रुटी.',
    'msg.errorNetwork': 'नेटवर्क त्रुटी आली.',
    'btn.additionalInfo': 'अतिरिक्त माहिती',
    'btn.hideAdditionalInfo': 'अतिरिक्त माहिती लपवा',
    'section.extended': 'विस्तारित माहिती',
    'section.extended.desc': 'इतर मूलभूत माहिती.',
    
    // Placeholders
    'ph.firstName': 'पहिले नाव टाका',
    'ph.lastName': 'आडनाव टाका',
    'ph.guardianName': 'पालकाचे नाव टाका',
    'ph.contactNumber': 'संपर्क क्रमांक टाका',
    'ph.address': 'संपूर्ण पत्ता टाका',
    'ph.educationLevel': 'शिक्षणाची पातळी टाका',
    'ph.medicalConditions': 'वैद्यकीय समस्या टाका',
    'ph.item': 'वस्तूचे नाव टाका'
  },
  hi: {
    ...landingTranslations.hi,
    'app.title': 'कांता चैरिटेबल ट्रस्ट',
    'nav.registration': 'पंजीकरण',
    'nav.directory': 'बच्चों की सूची',
    'form.title': 'बाल आवेदन पत्र',
    'form.subtitle': 'व्यक्तिगत विवरण भरें और प्रारंभिक सहायता निर्दिष्ट करें।',
    'section.personal': 'व्यक्तिगत विवरण',
    'section.personal.desc': 'बच्चे के बारे में बुनियादी जानकारी।',
    'label.firstName': 'पहला नाम',
    'label.lastName': 'अंतिम नाम',
    'label.dob': 'जन्म तिथि',
    'label.gender': 'लिंग',
    'gender.male': 'पुरुष',
    'gender.female': 'महिला',
    'gender.other': 'अन्य',
    'section.contact': 'संपर्क और अभिभावक',
    'section.contact.desc': 'किससे संपर्क करें और वे कहां रहते हैं।',
    'label.guardianName': 'अभिभावक का नाम',
    'label.contactNumber': 'संपर्क नंबर',
    'label.address': 'पूरा पता',
    'section.additional': 'अतिरिक्त जानकारी',
    'section.additional.desc': 'शैक्षिक पृष्ठभूमि और चिकित्सा नोट्स।',
    'label.educationLevel': 'शिक्षा का स्तर',
    'label.medicalConditions': 'चिकित्सा स्थिति',
    'section.help': 'प्रारंभिक सहायता',
    'section.help.desc': 'तुरंत सहायता श्रेणियां निर्दिष्ट करें।',
    'msg.noHelp': 'अभी तक कोई सहायता नहीं जोड़ी गई।',
    'label.item': 'वस्तु का नाम',
    'label.quantity': 'मात्रा',
    'label.date': 'दिनांक',
    'btn.addHelp': 'सहायता जोड़ें',
    'btn.submit': 'फॉर्म पूरा करें',
    'btn.submitting': 'प्रक्रिया चल रही है...',
    'msg.success': 'फॉर्म सफलतापूर्वक जमा किया गया।',
    'msg.errorSubmit': 'फॉर्म जमा करने में विफल।',
    'msg.errorNetwork': 'नेटवर्क त्रुटि हुई।',
    'btn.additionalInfo': 'अतिरिक्त जानकारी',
    'btn.hideAdditionalInfo': 'अतिरिक्त जानकारी छिपाएं',
    'section.extended': 'विस्तृत जानकारी',
    'section.extended.desc': 'अन्य बुनियादी जानकारी।',

    // Placeholders
    'ph.firstName': 'पहला नाम दर्ज करें',
    'ph.lastName': 'अंतिम नाम दर्ज करें',
    'ph.guardianName': 'अभिभावक का नाम दर्ज करें',
    'ph.contactNumber': 'संपर्क नंबर दर्ज करें',
    'ph.address': 'पूरा पता दर्ज करें',
    'ph.educationLevel': 'शिक्षा का स्तर दर्ज करें',
    'ph.medicalConditions': 'चिकित्सा स्थिति दर्ज करें',
    'ph.item': 'वस्तु का नाम दर्ज करें'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(() => {
    return sessionStorage.getItem('appLanguage') || 'mr';
  });

  React.useEffect(() => {
    sessionStorage.setItem('appLanguage', language);
  }, [language]);

  const t = (key) => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
