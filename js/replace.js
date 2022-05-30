var page=1;
function uppage(){
    if(page>1)page--;
    flushpage();
}
function downpage(){
    if(page<1)page++;
    flushpage();
}
function flushpage(){
    $("#hsize").fadeOut("slow");
    $("#image").attr("src","./img/"+page+".png");
    $("#hsize").fadeIn();
}
flushpage();