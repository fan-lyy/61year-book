var page=1;
function uppage(){
    if(page>1)
    {
        page--;
        flushpage();
    }
    else alert("这是第一页了！");
}
function downpage(){
    if(page<1)
    {   
        page++;
        flushpage();
    }
    else alert("这是最后一页了！");
}
function flushpage(){
    $("#hsize").fadeOut("slow");
    $("#image").attr("src","./img/"+page+".png");
    $("#hsize").fadeIn();
}
flushpage();