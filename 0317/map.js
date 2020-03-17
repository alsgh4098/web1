/**
 * MyMap 생성자로 사용될 함수를 구현
 */
function MyMap() {
	var arr = new Array();

	this.put = function(key, val){
		var obj = new Object;
		obj.key = key;
		obj.val = val;
		
		arr.push(obj);
	}

	this.get = function(key){
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].key == key) {
				return arr[i].val;
			}
		}
	}

	this.remove = function(key){
		var index = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].key == key) {
				index = i;
			}
		}
		arr.splice(arr[index], 1);
	}
	
	this.size = function(){
		return arr.length;
	}

	this.clear = function(){
		arr = new Array();
	}
}
