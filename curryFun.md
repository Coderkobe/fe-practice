### 函数柯里化Curring

	// 柯里化是将多参函数转化成一系列的单参函数
	var add = (a, b) => a + b;
	add(1 + 2);

	//柯里化函数
	var add = a => b => a + b;
	var add1 = add(1);
	add1(2);

### 组合函数 compose

	//组合函数就是将多个函数组合成一个函数
	var compose = (fn1, fn2) => (arg) => fn1(fn2(arg));
 
	var a = arg => arg + 'a';
	var b = arg => arg + 'b';
 
	var c = compose(a, b); // 将a,b函数进行组合
	c('c');  // => cba
	
### 数组常用的五个方法(indexOf、forEach、map、filter、reduce)
1、indexOf()方法返回在该数组中第一个找到的元素位置，如果它不存在则返回-1。

	//不使用indexOf()时
	var arr = ['apple','orange','pear'],
		found = false;

	for(var i= 0, l = arr.length; i< l; i++){
		if(arr[i] === 'orange'){
			found = true;
		}
	}

	console.log("found:",found);

	//使用indexOf
	var arr = ['apple','orange','pear'];
	console.log("found:", arr.indexOf("orange") != -1);

2、forEach为每个元素执行对应的方法

	var arr = [1,2,3,4,5,6,7,8];

	// Uses the usual "for" loop to iterate
	for(var i= 0, l = arr.length; i< l; i++){
		console.log(arr[i]);
	}

	console.log("========================");

	//Uses forEach to iterate
	arr.forEach(function(item,index){
		console.log(item);
	});

3、map()对数组的每个元素进行一定操作（映射）后，会返回一个新的数组。

	// 不使用map
	var oldArr = [
		{first_name:"Colin",last_name:"Toh"},
		{first_name:"Addy",last_name:"Osmani"},
		{first_name:"Yehuda",last_name:"Katz"}
	];

	function getNewArr(){
    
    	var newArr = [];
	
    	for(var i= 0, l = oldArr.length; i< l; i++){
        	var item = oldArr[i];
        	item.full_name = [item.first_name,item.last_name].join(" ");
       		newArr[i] = item;
    	}
    
    	return newArr;
	}

	console.log(getNewArr());

	// 使用map
	function getNewArr(){
        
    	return oldArr.map(function(item,index){
        	item.full_name = [item.first_name,item.last_name].join(" ");
        	return item;
    	});
    }

	console.log(getNewArr());

map()是处理服务器返回数据时是一个非常实用的函数。

4、filter()方法创建一个新的匹配过滤条件的数组。

	// 不使用filter
	var arr = [
    	{"name":"apple", "count": 2},
    	{"name":"orange", "count": 5},
    	{"name":"pear", "count": 3},
    	{"name":"orange", "count": 16},
	];
    
	var newArr = [];

	for(var i= 0, l = arr.length; i< l; i++){
    	if(arr[i].name === "orange" ){
			newArr.push(arr[i]);
		}
	}

	console.log("Filter results:",newArr);
	// 使用filter
	var newArr = arr.filter(function(item){
    	return item.name === "orange";
	});
	console.log("Filter results:", newArr);

5、reduce()可以实现一个累加器的功能，将数组的每个值（从左到右）将其降低到一个值。
  场景： 统计一个数组中有多少个不重复的单词。

	// 不使用reduce
	var arr = ["apple","orange","apple","orange","pear","orange"];

	function getWordCnt(){
    	var obj = {};
    
    	for(var i= 0, l = arr.length; i< l; i++){
        	var item = arr[i];
        	obj[item] = (obj[item] +1 ) || 1;
    	}
    	return obj;
	}

	console.log(getWordCnt());

	//使用reduce
	var arr = ["apple","orange","apple","orange","pear","orange"];

	function getWordCnt(){
	    return arr.reduce(function(prev,next){
	        prev[next] = (prev[next] + 1) || 1;
	        return prev;
	    },{});
	}

	console.log(getWordCnt());