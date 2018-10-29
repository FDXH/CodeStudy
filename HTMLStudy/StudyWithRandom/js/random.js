var quote = [
    {
        "text":"真理惟一可靠的标准就是永远自相符合。",
        "author":"欧文"
    },
    {
        "text": "土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。",
        "author": "别林斯基"
    },
    {
        "text": "我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。",
        "author": "蒙田"
    },
    {
        "text": "时间是一切财富中最宝贵的财富。",
        "author": "德奥弗拉斯多"
    },
    {
        "text": "世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。",
        "author": "斯里兰卡"
    },
    {
        "text": "过放荡不羁的生活，容易得像顺水推舟，但是要结识良朋益友，却难如登天。",
        "author": "巴尔扎克"
    },
    {
        "text": "这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯。",
        "author": "歌德"
    },
    {
        "text": "相信谎言的人必将在真理之前毁灭。",
        "author": "赫尔巴特"
    },
    {
        "text": "爱情原如树叶一样，在人忽视里绿了，在忍耐里露出蓓蕾。",
        "author": "何其芳"
    },
    {
        "text": "如果你浪费了自己的年龄，那是挺可悲的。因为你的青春只能持续一点儿时间——很短的一点儿时间。",
        "author": "王尔德"
    },
]
var color = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function getquote(){
    var colorFlag;
    var quoteFlag;
    colorFlag = Math.floor(Math.random() * color.length);
    quoteFlag = Math.floor(Math.random() * quote.length);
    // $('body').animate({
    //     background : color[colorFlag],
    //     color : color[colorFlag]
    // },1000);
    // $('.button-new').animate({
    //     background : color[colorFlag]
    // },1000); 
    $('body').css({"background-color":color[colorFlag],"color":color[colorFlag]});
    $('.button-new').css("background-color",color[colorFlag]);

    $('.quote-text').animate({
        opacity:0
    },300,function(){
        $(this).animate({
            opacity:1
        },300)
        $('#text').html("“" + quote[quoteFlag].text + "”");
        console.log("lala");
    })
    $('.quote-author').animate({
        opacity:0
    },300,function(){
        $(this).animate({
            opacity:1
        },300)
        $('#author').html(quote[quoteFlag].author);
    })
}
$(document).ready(function () {
    $(".button-new").on('click', getquote);
});
