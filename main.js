var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;
block_image_width = 350;
block_image_height = 430;
var block_image_object= "";

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({ top:block_y, left:block_x });
        canvas.add(block_image_object); });
    }

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '82') {
        new_image('https://i.pinimg.com/474x/6a/57/b1/6a57b10ad50ea179e5d5a22a257c4e8b--simpsons-cartoon-los-simpsons.jpg');
        console.log("r");
    }
    if(keyPressed == '71') {
        block_x = 200;
        new_image('https://i.pinimg.com/originals/1b/91/9c/1b919c91436df3805d4e0ac51e7100ca.png');
        console.log("g");
    }
    if(keyPressed == '89') {
        block_x =350;
        new_image('https://i.pinimg.com/564x/b1/6a/8d/b16a8ddf49dcf4e2f40166ece3da2648--simpsons-cartoon-los-simpsons.jpg');
        console.log("y");
    }
    if(keyPressed == '80') {
        block_x = 600;
        new_image('https://i.pinimg.com/originals/53/bd/df/53bddf40e29e9ff2abd8aa610081eb45.png');
        console.log("p");
    }
    if(keyPressed == '66') {
        block_x = 700;
        new_image('https://i.pinimg.com/736x/a8/10/69/a81069902f31e375b1b1effd37cd55de--simpsons-cartoon-los-simpsons.jpg');
        console.log("b");
    }
}