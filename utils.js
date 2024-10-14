export function setTileMapSize(){
    let popUpHTML = `
        <div class="popupBox">
            <div class="closePopUp">&times;</div>
            <p>Hello</p>
        </div>
    `;
    let popUpDOM = document.createElement("div"); 
    popUpDOM.innerHTML = popUpHTML;
    popUpDOM.classList.add("popupTileMapSetSizeContainer");
    const closeButton = popUpDOM.querySelector(".closePopUp");
    closeButton.onclick = function() {
        document.body.removeChild(popUpDOM);
    };
    document.body.append(popUpDOM);
    
}