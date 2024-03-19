// import Phrases from "../../components/utils/phrases.json";
import React, { useEffect, useState } from "react";
import { fetchTranslations } from "../utils/api";
import PhraseCard from "./phrasecard";
import DropDown from "./dropdown"


export default function RightNav() {
  // Define state variables using useState hook
  const [translatedTexts, setTranslatedTexts] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("es"); // Default to Spanish

  // Array containing fixed texts to translate
  const fixedTexts = [
    "Hello", 
    "My Name is", 
    "Where is the bathroom?", 
    "Thank You", 
    "Yes", 
    "No", 
    "How much is this?", 
    "Goodbye"
  ];

  // Fetch translations when the component mounts or when selected language changes
  useEffect(() => {
    // Function to fetch translations
    const fetchData = async () => {
      try {
        // Fetch translations using fetchTranslations function
        const translations = await fetchTranslations(fixedTexts, selectedLanguage);
        // Update state with translated texts
        setTranslatedTexts(translations);
      } catch (error) {
        // Log error if fetching translations fails
        console.error("Error fetching translations:", error);
      }
    };

    // Call fetchData function when the component mounts
    fetchData();
  }, [selectedLanguage]); // Fetch translations when selected language changes

  // Render translated texts as PhraseCard components
  return (
    <div>
      <div className="translation-container">
        <h2>Translation</h2>
        <h4>Here are some helpful phrases:</h4>
        <div className="card-container">
          {Phrases.map((phraseObj) => (
            <div className="card mb-3" key={phraseObj.id}>
              <div className="card-body">
                <h5 className="card-title">{phraseObj.phrase}</h5>
                {/* code to translate text */}
              </div>
            </div>
          ))}
        </div>
    <div className="translation-container">
      <h4 className="text-center">Helpful Phrases</h4>
      <DropDown onSelectLanguage={setSelectedLanguage} />
      <div className="card-container">
        {fixedTexts.map((text, index) => (
          <PhraseCard key={index} phrase={text} translation={translatedTexts[text]} />
        ))}
      </div>
    </div>
  </div>
 </div>
  );
}