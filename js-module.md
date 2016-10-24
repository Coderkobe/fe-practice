#js-Module-7day
###很久之前
	function foo() {
		//
	}
	funcion bar() {
		//
	}
	// Global被污染，很容易命名冲突


###简单封装：NameSpace模式
	var MyApp = {
		foo: function() {},
		bar: function() {}
	}
	MyApp.foo();
	// 减少Global上面的变量数目
	// 本质是对象，一点都不安全

###匿名闭包：IIFE模式
	var MyModule = (function() {
		var _private = "safe now";
		var foo = function() {
			console.log(_private);
		}
	
		return {
			foo: foo
		}
	}());

	MyModule.foo();  // safe now
	MyModule._private; // undefined
	// 函数是JavaScript唯一的Local Scope
###再增强一点，引入依赖
	var Module = (function($){
	    var _$body = $("body");     // we can use jQuery now!
	    var foo = function(){
	        console.log(_$body);    // 特权方法
	    }
	
	    // Revelation Pattern
	    return {
	        foo: foo
	    }
	})(jQuery)
	
	Module.foo();
	// 上面的就是模块模式，也是现代模块实现的基石
	
###
		

