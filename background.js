chrome.tabs.query({}, (tabs) => {
    console.log("현재 열린 탭 개수:", tabs.length);
    tabs.forEach((tab) => {
        console.log(`탭 ID: ${tab.id}, URL: ${tab.url}, 제목: ${tab.title}`);
    });
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let activeTab = tabs[0];
    console.log(`현재 활성화된 탭: ${activeTab.title}, 순서: ${activeTab.index}`);
});

chrome.windows.getCurrent((window) => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
        let windowWidth = window.width;
        let estimatedTabWidth = windowWidth / tabs.length; // 평균적인 탭 너비 추정

        tabs.forEach((tab) => {
            let estimatedX = tab.index * estimatedTabWidth;
            console.log(`탭: ${tab.title}, 예상 X 좌표: ${estimatedX}px`);
        });
    });
});
