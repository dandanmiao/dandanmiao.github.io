
  // click img
let allImg =  document.querySelectorAll('img');

allImg.forEach(i=>{
    i.addEventListener("click", function () {
        imgShow(i);
    })
});

function imgShow(_this) {
    let bigImg =  document.querySelector('#bigimg');
    let innerDiv = document.querySelector('#innerdiv');
    let outerDiv = document.querySelector('#outerdiv');

    var src = _this.currentSrc;//获取当前点击的pimg元素中的src属性
    var windowW = window.innerWidth;//获取当前窗口宽度
    var windowH = window.innerHeight;//获取当前窗口高度
    var realWidth = _this.naturalWidth;//获取图片真实宽度
    var realHeight = _this.naturalHeight;//获取图片真实高度
    var imgWidth, imgHeight;
    var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放

    if (realHeight > windowH * scale) {//判断图片高度
        imgHeight = windowH * scale;//如大于窗口高度，图片高度进行缩放
        imgWidth = imgHeight / realHeight * realWidth;//等比例缩放宽度
        if (imgWidth > windowW * scale) {//如宽度扔大于窗口宽度
            imgWidth = windowW * scale;//再对宽度进行缩放
        }
    } else if (realWidth > windowW * scale) {//如图片高度合适，判断图片宽度
        imgWidth = windowW * scale;//如大于窗口宽度，图片宽度进行缩放
        imgHeight = imgWidth / realWidth * realHeight;//等比例缩放高度
    } else {//如果图片真实高度和宽度都符合要求，高宽不变
        imgWidth = realWidth;
        imgHeight = realHeight;
    }


    bigImg.setAttribute("width", imgWidth);//以最终的宽度对图片缩放
    bigImg.setAttribute("height", imgHeight);//以最终的宽度对图片缩放
    bigImg.setAttribute("src", _this.src);//以最终的宽度对图片缩放

    let w = (windowW - imgWidth) / 2;//计算图片与窗口左边距
    let h = (windowH - imgHeight) / 2;//计算图片与窗口上边距
    innerDiv.style.top = h+"px"//设置#innerdiv的top和left属性
    innerDiv.style.left = w+"px"//设置#innerdiv的top和left属性
    outerDiv.style.display = "";//淡入显示#outerdiv及.pimg

    outerDiv.addEventListener("click", function () {
       outerDiv.style.display = "none";
    })
};