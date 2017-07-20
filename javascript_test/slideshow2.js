//スライド
var imgs = [new Image(),new Image(),new Image()];
imgs[0].src = "0719/1.jpg";
imgs[1].src = "0719/2.jpg";
imgs[2].src = "0719/3.jpg";
 
var img_start_pos = 1000;
var img_end_pos = -360;
var img_left = img_start_pos;
var img_top = 0;
var move_amount = 2;
var move_speed = 15;
 
var src_cnt = 0;
 
function move_image(){
    document.getElementById("img1").style.top = img_top + "px";
    document.getElementById("img1").style.left = img_left + "px";
 
    if(img_end_pos-img_start_pos > 0){
        img_left += move_amount;
        if(img_left > img_end_pos){
            img_left = img_start_pos;
            subfunc();
        }
    }else{
        img_left -= move_amount;
        if(img_left < img_end_pos){
            img_left = img_start_pos;
            subfunc();
        }
    }
 
    document.getElementById("img1").style.visibility="visible";
    document.getElementById("img1").style.position="relative";
    document.getElementById("img1").style.width="200px";
    document.getElementById("img1").style.height="100px";
    document.getElementById("img1").style.zindex="3";
 
    setTimeout("move_image()",move_speed);
}
 
function subfunc()
{
    if(document.getElementById("img1").src == imgs[imgs.length-1].src){
        src_cnt = 0;
    }else{
        src_cnt = src_cnt+1;
    }
    document.getElementById("img1").src = imgs[src_cnt].src;
}
