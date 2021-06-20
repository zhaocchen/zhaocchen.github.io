---
title: 拖拽盒子
---

#### 实现1 mousedown+mousemove+mouseup
📢 box样式`position: absolute; `时， 设置left/top才生效
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .body {
            padding: 0;
            margin: 0;
            height: 100vh;
            width: 100%;
        }
        .box{
            position: absolute;
            top: 0;
            left: 0;
            width: 300px; 
            height:300px; 
            background:red
        }
    </style>
</head>
<body>
    <div id="box" class="box"></div>
    <script>
        const box = document.getElementById("box");
        let draging = false;
        // let disX, disY;

        box.onmousedown = function(event) {
            // console.log(box.offsetLeft)
            let disX = event.clientX - box.offsetLeft;
            let disY = event.clientY - box.offsetTop;
            draging = true;
            box.onmousemove = function(event) {
                if (draging) {
                    box.style.left = `${event.clientX - disX}px`;
                    box.style.top = `${event.clientY - disY}px`;
                    console.log(box.style.left);
                }
            }
        }
        
        box.onmouseup = function(event) {
            console.log('up')
            draging = false;
        }
    </script>
</body>
</html>
```
#### 实现2


📢 设置 `draggable="true"` 
拖拽目标：

- dragstart
- drag
- dragend



释放目标：

- dragenter
- dragover
- dragleave
- drop



[https://www.runoob.com/try/try.php?filename=tryjsref_ondrag_all](https://www.runoob.com/try/try.php?filename=tryjsref_ondrag_all)





