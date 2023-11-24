// Function to update content based on selected language
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langData[key];
    });
}
// Function to fetch language data
async function fetchLanguageData(lang) {
    const response = await fetch(`language/${lang}.json`);
    const words = await response.json();
    console.log(words);
    return words;
}
// Function to change language
async function changeLanguage(lang) {
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
}