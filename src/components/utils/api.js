import { API_KEY } from './keyConfig';

// Function to fetch translations for each phrase
export async function fetchTranslations(phrase, selectedLanguage) {

    const url = 'https://swift-translate.p.rapidapi.com/translate';

    // Object to store translated texts
    const translatedTextsCopy = {};

    // Loop through each phrase
    for (const text of phrase) {
        // Options for the fetch request
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'swift-translate.p.rapidapi.com'
            },
            body: JSON.stringify({
                text: text,
                sourceLang: 'en',
                targetLang: selectedLanguage // Use the selected language as the target language for translation
            })
        };

        try {

            // Fetch translation from the API
            const response = await fetch(url, options);

            const result = await response.json();

            // Store translated text in the copied object
            translatedTextsCopy[text] = result.translatedText;
        } catch (error) {
            // Log Error Message
            console.error("Error:", error.message);
        }
    }

    return translatedTextsCopy;
}