import React, { useEffect, useState } from "react";
import { fetchTranslations } from "../utils/api";
import PhraseCard from "./phrasecard";
import Logout from "../Logout/Logout";
import DropDown from "./dropdown";
import TranslationBox from "./TranslationBox";
import "./styles.css"

export default function RightNav() {
    // Define state variables using useState hook
    const [translatedTexts, setTranslatedTexts] = useState({});
    const [selectedLanguage, setSelectedLanguage] = useState("es");    

    // Array containing fixed texts to translate
    const phrase = [
        "Hello", 
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
                const translations = await fetchTranslations(phrase, selectedLanguage);
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
        <div className="translation-container">
            <h4 className="text-center">Helpful Phrases</h4>
            <DropDown onSelectLanguage={setSelectedLanguage} />
            <div className="card-container">
                {phrase.map((text, index) => (
                    <PhraseCard key={index} phrase={text} translation={translatedTexts[text]} />
                ))}
                <TranslationBox selectedLanguage={selectedLanguage} />
            </div>
        </div>
    );
}