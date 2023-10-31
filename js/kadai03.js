document.addEventListener("mousemove",function() {
    console.dir(event)

    //クライアント座標
    //client-x
    document.querySelector("#client-x").value
    =
    event.clientX;

    //client-Y
    document.querySelector("#client-y").value
    =
    event.clientY;

    //スクリーン座標
    // #screen-x
    document.querySelector("#screen-x").value = event.screenX;

    // #screen-y
    document.querySelector("#screen-y").value = event.screenY;

    //グローバル座標
    //global-x
    document.querySelector("#global-x").value = document.documentElement.scrollLeft+clientX;


    // #global-y
    document.querySelector("#global-y").value = document.documentElement.scrollTop+event.clientY;
})