chrome.contextMenus.removeAll(function() {
    chrome.contextMenus.create({
        "id":"GetXPath",
        "title":"Get XPath",
        "contexts":["all"]
    });
});


let getXPath=(info, tab)=>{
    let msg={
        type:"getXPath"
    }
    chrome.tabs.sendMessage(tab.id,msg,()=>{
        console.log("message sent");
    })
    console.log(tab);
}

chrome.contextMenus.onClicked.addListener((info, tab)=>{
    getXPath(info, tab);
})