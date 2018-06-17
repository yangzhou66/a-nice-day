## css选择器
**基础选择器**
1*{} 2 li{} 3.redbg{} 4.#redbg{} 5.allbg{},.redbg{}

**层次选择器**  

.div .c  选择.div包含的.c
.div>.c  选择.div子元素.c    
.div~.c   选择.div后同级所有.c元素
.div+.c  选择.div相邻的.c元素

 **动态伪类选择器**
一般熟悉的有:hover :vistied :active :link
分6种
 1、动态伪类选择器  （css中就存在，指的是:hover，：focus这种）
 2、目标伪类选择器
 3、ui状态伪类选择器  e:disabled{}  e :enable{}
 4、结构伪类选择器
div :first-child  div :last-child  获得第一个或最后一个子元素
div div:first-of-type, div div::nth-of-type(2n+1) ,div div::nth-of-type(1) 查找div下的第一个div元素
 5、否定伪类选择器  ；not(footer){}  除了某元素   之前用过 :not(input){user-select:none}
 6、语言伪类选择器  ：lang
 
 
 伪元素
 
 ::before   ::after  :before :after
 
 **属性选择器 **
 .demo a
 
 1.E[attr]属性选择              a[id]{background:yellow}  a链接带id全部变色
 2.E[attr==val]属性选择        a[id=first]{background:red}  a链接带id等于first全部变色
 3.E[attr~=val] 属性选择       a[title~=website]{background:red}  a链接设置了title 并且包含website属性值就会变色
 
 
 
 
 ## css边框
 
  border属性仅仅是盒模型基础属性之一
  
  border-image  border-radius  box-shadow  border-color
 
   知道border这些属性的用途就行
 
 ## css background
 
 background-color background-image background-repeat background-attachment
 background-position
 **background-origin**
 新增background-origin 用于决定背景图片定位的起点   //可以不考虑padding
  属性值三种
  padding-box 默认值从padding开始
  border-box
  content-box
  
  **background-clip**
   background-clip: boreder-box || padding-box ||content-box
   border-box:默认值，元素的背景图像从border区域向外裁剪，即元素边框之外的背景图片都要被裁剪掉
   
 **background-size**
 
   语法 background-size:auto ||<length>||<perentage>||cover||contain
   
   auto :默认值。保持原高度和宽度
   <length> 以px值改变背景图片大小
   <perentage> 以百分比(0-100)改变背景图片大小
   cover：将背景图片放大，适合整个容器
   contain:保持宽高比，是背景图片宽度或高度正好适应区域
   
   使用background属性可以是多张背景在一个容器上
   
   ##css3文本
   
   **关于文本的字体类型属性**
   font-family 
   font-style
   font-weight(100-900)
   font-size-adjust 定义是否强制对文本使用同一尺寸
   font-stretch  定义是否横向拉伸变形字体
   font-variant 定义是否大小写
   
   **关于文本类型**
   word-spacing  词与词间距5px
   letter-spacing  定义字符之间的间距  5px
   vertical-align   定义文本垂直对齐方式   middle  20% sub super bottom 
   text-decoration   文本修饰线
   text-indent 定义文本首行缩进
   text-align   定义文本水平对齐方式
   line-height   文本行高
   text-transform 定义文本大小写   
    text-shadow   文本阴影效果 
	white-space  定义文字与文本直接空白符间距   nowrap (文本强制不换行)  inherit 继承父元素该值  pre 文本空白处被浏览器扣留 与<pre> 标签相似
	direction  文本流入方向   ltr（默认值）   rtl(文本从右向左流入)
   
   **溢出文本效果**
    text-overflow :clip | ellipsis
	clip 不显示（...）直接剪切
	ellipsis  文本超出范围显示...
	一般该属性需要配合 white-space:nowrap (文本强制不换行) overflow:hidden 
	
	**word-wrap**
	不截断英文单词换行
	
	## css颜色
	
    ** opacity**
   opacity：1||inherit（继承）
   ** rgba**
   
    ## css3盒模型
   
   盒模型一般为 content padding margin border
   
   
   
   
   
 
 
 
 
 
 
 
 
 
 
 
 
 