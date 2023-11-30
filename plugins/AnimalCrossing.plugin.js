/**
 * @name AnimalCrossing
 * @author Lynnux
 * @authorId 705306248538488947
 * @authorLink https://github.com/Dark-Lynn/
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 * @website https://github.com/LynnuxDev/Discord
 * @source https://github.com/LynnuxDev/Discord/tree/main/
 */
const targetThemeName = 'Animal Crossing'; // Replace with the name of the theme you're checking for

const checkTheme = () => {
    const allThemes = BdApi.Themes.getAll();
    const isThemeInstalled = allThemes.some(theme => theme.name === targetThemeName);

    if (isThemeInstalled) {
        console.log(`The "${targetThemeName}" theme is installed.`);
        const isThemeEnabled = BdApi.Themes.isEnabled(targetThemeName);
        if (isThemeEnabled) {
            console.log("Animal Crossing theme installed and running!");
        } else {
            BdApi.UI.showNotice("**Theme Enabled**! The Animal Crossing theme has been enabled.");
            BdApi.Themes.enable(targetThemeName);
        }
    } else {
        BdApi.UI.alert("Hello World", "Theme NOT installed!");
    }
};


module.exports = class Lynnux {
    start() {
        checkTheme();
    } 

    stop() {
        BdApi.Themes.disable(targetThemeName);
    }
}
