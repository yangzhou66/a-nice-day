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
	white-space  定义文字与文本直接空白符间距   nowrap (文本强制不换行)  inherit 继承父元素该值  pre 文本空白处被浏览器扣留 与"pre" 标签相似
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
   
   **盒模型一般被分为两种**
   1、w3c的标准和模型（常用）
   外盒element空间高度 =内容高度 +内距 + 边框 +外距
   内盒element空间高度=内容高度 +内距 + 边框（height为内容高度）
   2、ie6版本以下的盒模型
    外盒element空间高度 =内容高度  +外距
    内盒element空间高度=内容高度
	
	由上面可以看下，在ie6里面给元素加padding跟margin一样，都是向外延申
	
	**box-zizing 一个盒模型属性，定义盒模型尺寸解析方式**
	box-sizing :content-box |border-box |inherit
	默认值为 content-box  即让元素继续维持w3c的标准盒模型
	border-box  ：元素高度等于内容的高度，内容包括border padding
	
	通过测试得出定义一个元素内容宽度，设置为border-box,padding和border不会延申宽度
	只会向内压缩，作用显而易见，保证某块区域的宽度不变
	
	**内容溢出属性overflow**
	
	回想下如何使文字显示省略号
	text-overflow:ellipsis,
	overflow:hidden;
	white-space:nowrap
	
	overflow:visible|hidden |scroll |auto |no-display|no-content
	
	**css3自由缩放属性**
	
	resize 该属性用来改变元素的尺寸大小，增强用户体验
	
	resize : none | both | horizontal |vertical |inherit
	none:用户不能拖动元素改变尺寸
	both:用户可以拖动元素 ，同时修改宽度或高度
	horizontal:只能修改宽度
	vertical :只能该高度
	很有趣的属性
	
	
	**css3外轮廓**
	
	outline 属性 ：主要用于在元素周围绘制一条轮廓线
	
	可以跟模拟border，相似，用法一样 outline :10px solid #ccc
	
	但border属于盒模型一部分直接影响盒模型，outline华仔一个框上面，不会影响
	border可以单边设置
	
	
	##第八章css伸缩布局盒模型
	
	**布局模式**
	css2常用布局
	块布局：呈现文档的布局模式  block
	行内布局：呈现文本的布局模式 inline-block
	表格布局 ：用格子呈现2d数据的布局模式 table
	定位布局 ：能够直接定位元素的布局模式  abosulte
	
	css3新增flex
	比其他布局更具灵活性
	flexBox不是一个属性，二是一个模块，包含多个属性
	
	用过很多随手记记
	**常见属性**
	display：flex
	flex-direction 
	flex-wrap  超出外围显示方式 nowrap 禁止换行  wrap 
	flex-flow  为flex-direction 与flex-wrap 两属性集合
	justify-content
    align-items align-self	侧轴
	align-content
	
	**flex**
	flex:1 1 200px;
	flex-grow 扩展比率
	flex-shrink:收缩比率
	flex-basis:
	
	初始值 flex ：0 auto  == flex:0 1 auto 
	根据width与height属性决定元素尺寸
	
	**flex-order**
	order:谁排在最前面
	
	##css3多列布局
	
	column  :用的也太少了吧
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
   
   
   
   
 
 
 
 
 
 
 
 
 
 
 
 
 