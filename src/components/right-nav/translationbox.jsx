import React, { useState, useEffect } from "react";
import { fetchTranslations } from "../utils/api";

export default function TranslationBox({ selectedLanguage }) {
    // State variables for user-entered text and translated text
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    // Function to handle translation
    const handleTranslate = async () => {
        try {
            // Call the translation function with user-entered text
            const translation = await fetchTranslations([inputText], selectedLanguage);
            // Update the translated text state with the result
            setOutputText(translation[inputText]);
            // Clear input text after translation
            setInputText("");
            // console.log(translation)
        } catch (error) {
            // Log an error if translation fails
            console.error("Error translating text:", error);
        }
    };

    // Function to handle pressing the enter key
    const handleKeyPress = (event) => {
        // Check if the pressed key is "Enter"
        if (event.key === "Enter") {
            // Call handleTranslate function to perform translation
            handleTranslate();
        }
    };

    // Effect to re-translate text when the selected language changes
    useEffect(() => {
        // Only re-translate if there's input text
        if (inputText) {
            handleTranslate();
        }
    }, [selectedLanguage]);

    return (
        <div className = "text-center">
            {/* Input field for user to enter text */}
            <input 
                type ="text" 
                className = "textInput"
                placeholder="Enter text to translate" 
                value={inputText} 
                onChange={(event) => setInputText(event.target.value)} 
                onKeyUp={handleKeyPress} // Handle enter key press               
            />
            {/* Button to trigger translation */}
            <button onClick={handleTranslate} className="btn btn-primary">Translate</button>
            {/* Display translated text */}
            <h1>{outputText}</h1>
        </div>
    );
}
