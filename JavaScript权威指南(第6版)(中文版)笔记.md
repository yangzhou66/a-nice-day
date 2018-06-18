      #javascript权威指南第6版阅读笔记
	  
	  ## 语言基础知识
	  
	  
	  ```只发现一个不熟悉的
	  var count =0;
	  count*=3   //自乘3 等于 count =count*3
	  ```
	  ## 一部分、 语言核心
	 + 区分大小写
	 + 忽视空格和换行
	 + 分号可选
	 
	 #第三章 类型值变量
	 
	  + 数据类型分成两类
	  原始类型：null undefined） str num bool obj
	  对象类型：数组，函数 date 正则表达 Error 
	  
	  ###函数如果用来初始化一个新建的对象（new）,可以称之为构造函数（constructor），
	  每个构造函数定义的class对象也可以看作对象类型的子类型
	  
	  +用于自己的内存管理，自动回收垃圾
	  
	  +同样也可以分为可变类型和不可变类型（null undefined不可更改）
	  
	  ##3.1数字
	  
	  +不区分整数和浮点数，都是由64位浮点格式表示数字
	  +一个数字出现在javascript一般为数字直接量，支持多个格式的数字直接量
	  + 负号（-）是一元求反运算符，可以直接得出数字直接量复制，不属于数字直接量语法部分
	  
	  ##3.11整形直接量
	  + 一般数字序列表示一个十进制整数  0 3 1000
	  + 数字直接量也可以表示十六进制 0xff 0xcafe911
	  
	  ## 3.12浮点型直接量
	  
	  + 可以使用指数计数法表示浮点型直接量   6.02e23 //6.02*10二十次放
	  
	  ## 3.13算术运算
	  
	  
	  + 一般：+ - * / %
	  + 还有复杂运算通过Math对象实现，常用
	   - Math.PI  //圆周率
	   - Math.random  //生成0到1 的随机数
	   - Math.round(.6)  // 1.0 四舍五入
	   
	  + 此外 js定义了全局变量 Infinity和NaN 表示正无穷大和非数字值
	  
	  ### NaN与任何值不相等，包括自身
	  
	  ## 3.14 二进制浮点数和四舍五入错误
	  
	  + 由于js采用的浮点数表示法是一种二进制表示法，可以精确地表示分数 ，但不能精确的表示
	  类似0.1这样的简单数组
	  ### 做分数运算的时候注意下（未来可能支持十进制数字类型避免此类问题）
	  
	  ## 3.15日期和时间
	  
	  ### 时间记住几个方法就行 
	  + getFullYear(不是getYear)
	  + getMonth(从0开始计数，得加1得到当前月分)
	  + getDate()  //获得当前天数，从1开始计数
	  + getDay   //得到当前星期几  0代表星期天
	  + getHours()
	  + getUTCHours
	  
	  ## 3.2 文本
	  
	  ### 字符串是一组右16位值组成的不可变的有序序列, 每个字符通常来自Unicode字符集
	  一个字符有16为内码表示
	  ```
	  var p ='π' //π由16位内码表示 0x03c0
	  var e='e';  //e由17位内码表示 0x1d452(chrome运行length还是1，书上写2)
	  p.length  //=>1
	  ```
      ## 3.2.2 转义字符	

      + \0 \b \t \n(换行)
	  
	  
	  ## 3.23 字符串的使用
	  + 连接 + 长度 .length
	  
	  > 基本方法 （记牢）
	  ```
	  var s="hello, world"
	  s.charAt(0) //=>h
      s.charAt(s.length-1) //=>d
	  s.substring(1,4)  //=>ell
	  s.slice(1,4) //=> ell（arrayObject.slice(start,end)不是length，）
	  s.slice(-3)   //=>rld
	  s.indexOf("1")   //=>2
	  s.lastIndexOf("1") //=>10
	  s.indexOf("l",3)     //=>3(字符l在位置3之后首次出现的位置，不是第三次出现的位置)
	  s.split("，")       //=>[hello,world]
	  s.replace("h","H")  //=>'Hello, world'
	  s.toUpperCase()   //=>"HELLO, WORLD" 大写 
      ```	  
	  
	   ##模式匹配  RegExp
	   
	   ###与date类似
	   
	   ## 3.3布尔值
	   ### 布尔值 true false
	   
	   ## 3.4null和undefined
	   ###都是用来描述控制，null表示对象的定义但没有值,undefined表示未定义；
	   
	   ## 3.5 全局对象
	   + 全局属性  undefined NaN Infinity 
	   + 全局函数 isNaN() parseInt() (之前看es6时，好像改为Number下面的方法)
	   + 构造函数  Date() String() Array()
	   + 全局对象  Math Json
	   
	   
	   
	   
	 

	   
	  
	  
	  
	  
	  
	  
	  
	  