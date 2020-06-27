let targetElem=null;
let receiver=(message, sender, sendResponse)=>{
    if(message.type==="getXPath"){
        // console.log(message);
        parseDom();
    }
    
};

chrome.runtime.onMessage.addListener(receiver);


window.addEventListener('DOMContentLoaded', (event) => {
    init();
});


function init(){
    document.addEventListener("mousedown", (event)=>{
        targetElem=event.target;
    }, false);
}

function parseDom(){
    console.log(targetElem);
}