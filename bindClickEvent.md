## 点击事件绑进阶
html

	<div id="box-parent">
		<button data-action="btn-0">button one</button>
		<button data-action="btn-1">button two</button>
		<a href="#" data-action="link-0">link one</a>
		<a href="#" data-action="link-1">link two</a>
	</div>

JavaScript

	// 方法一
	$("#box-parent").on('click', '[data-action]', function() {
		var actionName = $(this).data('action');

		switch(actionName) {
			case 'btn-0':
				fn();
				break;
			case 'btn-1':
				fn();
				break;
			....
		}
	});
	

	// 方法二
	var actionList = {
		'btn-0': function() {
			console.log(0);
        },
		'btn-1': function() {
			console.log(1);
    	},
		'link-0': function() {
			console.log(2);
		},
		'link-1': function() {
			console.log(3);
  		}
	}

	$("#box-parent").on('click', '[data-action]', function() {
		var actionName = $(this).data('action');
		var action = actionList[actionName];

		if ($.isFunction(action)) {
			action();
		}
	});