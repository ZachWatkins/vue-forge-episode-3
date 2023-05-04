const choice = prompt('Would you like to generate a post for this page?');
if (choice === 'yes') {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        const frame = document.createElement('iframe');
        frame.src = `http://localhost:3000?extension=true&url=${url}`;
        frame.width = 300;
        frame.height = 500;
        document.body.appendChild(frame);
    });
} else {
    window.close();
}
