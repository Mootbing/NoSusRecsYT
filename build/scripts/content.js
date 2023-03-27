/* global chrome, location */

const run = () => {
    const url = location.href.replace("https://", "").replace("http://", "").replace("www.", "");

    console.log("EXT checking url: " + url)

    if (url === "youtube.com/" || url === "youtube.com") {
        console.log("EXT running")
        const element = document.createElement("div");
        element.style.position = "fixed";
        element.style.top = "0";
        element.style.left = "0";
        element.style.width = "100%";
        element.style.height = "100%";
        element.style.backgroundColor = "rgb(0, 0, 0)";
        // element.style.backdropFilter = "blur(100px)";
        element.style.zIndex = "100000000";
        element.style.paddingTop = "25px";

        const h1 = document.createElement("p");
        const textNode = document.createTextNode('MyTube');
        h1.appendChild(textNode);
        
        h1.style.fontSize = "150px";
        h1.style.fontFamily = "Arial";
        h1.style.textAlign = "center";
        h1.style.color = "#fff";

        const p = document.createElement("p");
        const textNode2 = document.createTextNode('Minimalizing the homepage to avoid recommendation distractions.');
        p.appendChild(textNode2);

        p.style.textAlign = "center";
        p.style.color = "#fff";
        p.style.fontSize = "14px";
        p.style.textAlign = "center";
        p.style.fontFamily = "Arial";

        const btns = document.createElement("button");
        const continueTextNode = document.createTextNode("Proceed To Recommended");
        btns.appendChild(continueTextNode);
        
        btns.style.textAlign = "center";
        // btns.style.width = "100%";
        btns.style.backgroundColor = "transparent";
        btns.style.border = "none";
        btns.style.color = "#777";
        btns.style.top = "10px";
        btns.style.left = "20px";
        btns.style.position = "absolute";

        btns.onclick = () => {
            element.remove();
        };

        // <div style="flex-direction: row">
        // <input style="border: none; background-color: #252525; border-top-left-radius: 25px; border-bottom-left-radius: 25px; padding: 25px; padding-top: 27px; width: 50%; color: #fff"/>
        // <button style="margin-left: -7px; border: none; border-top-right-radius: 25px; border-bottom-right-radius: 25px; padding: 25px; background-color: #404040; color: #fff">🔍</button>
        // </div>

        const div = document.createElement("center");
        div.style.flexDirection = "row";
        div.style.marginTop = "50px";

        const input = document.createElement("input");
        input.style.border = "none";
        input.style.backgroundColor = "#252525";
        input.style.borderTopLeftRadius = "25px";
        input.style.borderBottomLeftRadius = "25px";
        input.style.padding = "25px";
        input.style.paddingTop = "27px";
        input.style.width = "50%";
        input.style.color = "#fff";
        input.onkeydown = (e) => {
            if (e.key === "Enter") {
                const searchQuery = input.value;
                location.href = `https://www.youtube.com/results?search_query=${searchQuery}`;
            }
        }

        const searchBtn = document.createElement("button");
        searchBtn.style.marginLeft = "-7px";
        searchBtn.style.border = "none";
        searchBtn.style.borderTopRightRadius = "25px";
        searchBtn.style.borderBottomRightRadius = "25px";
        searchBtn.style.padding = "25px";
        searchBtn.style.backgroundColor = "#404040";
        searchBtn.style.color = "#fff";
        searchBtn.onclick = () => {
            const searchQuery = input.value;
            location.href = `https://www.youtube.com/results?search_query=${searchQuery}`;
        }

        const searchIcon = document.createTextNode("🔍");
        searchBtn.appendChild(searchIcon);
        
        div.appendChild(input);
        div.appendChild(searchBtn);

        document.body.appendChild(element);
        element.appendChild(h1);    
        element.appendChild(p);
        element.appendChild(div);
        element.appendChild(btns);
    }

    if (url.includes("youtube.com") && url.includes("/shorts/"))
    {
        location.href = "https://youtube.com/watch?v=" + url.substring(url.indexOf("/shorts/") + 8);
    }
}

chrome.runtime.onMessage.addListener(run);
run();