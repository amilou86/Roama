import React, { useEffect, useState } from "react";
import { fetchTranslations } from "../utils/api";
import PhraseCard from "./phrasecard";
import Logout from "../Logout/Logout";

export default function RightNav() {
  // Define state variable to store translated texts
  const [translatedTexts, setTranslatedTexts] = useState({});

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

  // Fetch translations when the component mounts
  useEffect(() => {
    // Function to fetch translations
    const fetchData = async () => {
      try {
        // Fetch translations using fetchTranslations function
        const translations = await fetchTranslations(fixedTexts);
        // Update state with translated texts
        setTranslatedTexts(translations);
      } catch (error) {
        // Log error if fetching translations fails
        console.error("Error fetching translations:", error);
      }
    };

    // Call fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  // Render translated texts as PhraseCard components
  return (
    <div className="translation-container">
      <h2>Translation</h2>
      <h4>Here are some helpful phrases:</h4>
      <div className="card-container">
        {fixedTexts.map((text, index) => (
          <PhraseCard key={index} phrase={text} translation={translatedTexts[text]} />
        ))}
      </div>
    </div>
  );
}