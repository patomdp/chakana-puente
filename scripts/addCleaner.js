const scriptTag = '<script src="scripts/cleaner.js"></script>\n';

// Function to add script tag
const addScriptTag = (content) => {
    if (!content.includes(scriptTag)) {
        return content.replace('</body>', `${scriptTag}</body>`);
    }
    return content;
};

