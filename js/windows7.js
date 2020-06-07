
let totalSticky = 1;
$("document").ready(function () {


    // Make the DIV element draggable:
    dragElement(document.getElementsByClassName("mydivCont")[0]);
   

    let startIcon = document.getElementById("start-icon");
    startIcon.addEventListener("click", function () {
        $("#start-container").toggle("fast");
    })

    let stickyIcon = document.getElementById("sticky");
    stickyIcon.addEventListener("click", function(){
        let sticky = document.getElementsByClassName("mydivCont")[0];
        if (window.getComputedStyle(sticky).display === "none") {
            sticky.style.display = "";
        }
    })

    setDate();
    setInterval(function () {
        setDate();
    }, 60000);
})

function setDate() {
    let date = new Date();
    document.getElementById("dateyr").innerText= date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    document.getElementById("datehr").innerText= formatAMPM(date);
}


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}


//Hide start if click is outdise
$(document).mouseup(function (e) {
    var container = $("#start-container");
    var startCont = $("#start-icon");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0 && !startCont.is(e.target)) {
        container.hide("fast");
    }
});

function hideSticky(elmnt) {
    if(totalSticky != 1){
        elmnt.parentElement.parentElement.parentElement.remove();
        totalSticky--;
    }
    else{
        elmnt.parentElement.parentElement.parentElement.style.display = "none";
    }   
}

function showSticky() { 
    totalSticky++;
    let el = $($(".mydivCont")[0]).clone();
    el.css("top", "0");
    el.find("textarea").text("");
    $( "#main-window" ).append( el);
    dragElement(el[ 0 ]);
}

function dragElement(elmnt) {
   
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (elmnt.children[0].children[0]) {
        // if present, the header is where you move the DIV from:

        elmnt.children[0].children[0].onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
