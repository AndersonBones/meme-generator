var canvas = document.querySelector(".my-canvas");
canvas.width = 450;
canvas.height = 370;
ctx = canvas.getContext('2d');

var text_meme = document.querySelector('.text-meme');

var top_text = document.querySelector('#top-text');
var bottom_text = document.querySelector("#bottom-text");

var Top_tex = '';
var Bottom_text = 'HUMMM...';

var Top_textSize = document.querySelector('#top_text-Size');
var Bottom_textSize = document.querySelector('#bottom_text-Size');
var Toptext_Size_result = document.querySelector("#top_text-SizeResult");
var Bottomtext_Size_result = document.querySelector("#bottom_text-SizeResult");
var textSizeTop = 30;
var textSizeBottom = 30;

var color_text_element = document.querySelector('.color-text');
var bg_list = ['#FF9800', '#ffffff', '#000000', '#e91e63', '#FFEB3B'];
var Color = '#FFFFFF';

// set color buttons
let index = 0;
for(var btn of color_text_element.children){
    btn.style.backgroundColor = bg_list[index];
    btn.dataset.color = bg_list[index];
    index+=1;
}

var img = document.createElement("img");
img.src = 'https://i.memeful.com/media/post/Wdn7mNw_700wa_0.gif';

var img_file = document.querySelector("#file-image");
var image_address = document.querySelector("#image-address");


const link = document.createElement('a');
link.download = 'My_meme.png';
link.href = canvas.toDataURL();

top_text.oninput = function(ev){
    Top_tex = this.value;
    Draw();
}

bottom_text.oninput = function(ev){
    Bottom_text = this.value;
    Draw()
}

Top_textSize.oninput = function(){
    Toptext_Size_result.innerText = `Top text: ${this.value}`;
    textSizeTop = parseInt(this.value)
    Draw();
}

Bottom_textSize.oninput = function(){
    Bottomtext_Size_result.innerText = `Bottom text: ${this.value}`;
    textSizeBottom = parseInt(this.value)
    Draw();
}

function Set_color_text(){
    Color = this.dataset.color;
    Draw(); 
}
for(var btn of color_text_element.children){
    btn.addEventListener("click", Set_color_text)
}


img.onload = function(){
    Draw();
}
image_address.oninput = function(ev) {
    img.src = this.value;
};

img_file.onchange = function(){
    var reader = new FileReader();
    
    reader.onloadend = function(ev) {
        img.src = reader.result;
    };
    
    if(img_file){
        reader.readAsDataURL(img_file.files[0]);
    }
    else{
        img.src = '#';
    }
}

function Draw_top_text(){
    ctx.fillStyle = Color;
    ctx.textAlign = "center";
    ctx.font = `${textSizeTop}px Impact`;
    ctx.fillText(Top_tex.toUpperCase(), canvas.width/2, canvas.height-(canvas.height-textSizeTop)); 
    console.log(canvas.height-textSizeTop)  
}

function Draw_bottom_text(){
    ctx.fillStyle = Color;
    ctx.textAlign = "center";
    ctx.font = `${textSizeBottom}px Impact`;
    ctx.fillText(Bottom_text.toUpperCase(), canvas.width/2, canvas.height-10);  
}

function Draw_image(){
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
function Draw(){
    ctx = canvas.getContext('2d');

    Draw_image();
    Draw_top_text();
    Draw_bottom_text();
}

function Download_meme(){
    link.click();
    link.delete;
}