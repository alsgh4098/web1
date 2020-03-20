// 메모 추가 버튼 클릭시 화면에 메모를 보여주기 : createBtn
$(function(){
	// 버튼이 눌릴때마다 Memo객체가 생성되는 메소드
	$("#createBtn").click(function(){
		// Memo객체 생성하고 create함수 실행.
		new Memo().create();		
	});
	
});

function Memo(){
	//Memo객체의 프로퍼티 $note
	this.$note = null;
}; 

// create()
Memo.prototype.create = function(){
	console.log("create");
	
	// $을 변수앞에 붙임으로써 제이쿼리 변수선언.
	// 생성된 Memo객체에 프로퍼티 $note를 넣어줘야 비로소 새로운 메모장이 생성되는것.
	var $note = $(
			`<div class="memo-note">
				<div class="memo-bar">
					<span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
					<span class="glyphicon glyphicon-pushpin" aria-hidden="true"></span>
					<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
				</div>
				<div class="memo-edit">
					<textarea class="memo-edit-area"></textarea>
				</div>
			</div>`
	);
	
	// 위에서 만든 html변수 note를 .memo-area에 붙인다.
	$note.appendTo($(".memo-area"));
	
	// this는 Memo객체
	console.log(this+"     this");
	// Memo객체의 프로퍼티 $note에 위에서 만든 var $note를 할당하기 전, 따라서 null
	console.log(this.$note+"     this.$note");
	
	this.$note = $note;
	this.drag();
	// 위에서 만든 var $note객체를 this.$note에 담음.
	console.log(this.$note+"    this.$note");
	var that = this;
	
//	[object Object]  this
//	null  this.$note
//	[object Object]  this.$note
	
	$note.find(".glyphicon-chevron-up").click(function(){
		// display()는 Memo객체의 또 다른 함수.
		// 여기 안에서의 this는 위에서 찾은 find(".glyphicon-chevron-up")
		that.display();
		console.log(this);
		$note.find(".glyphicon-chevron-up").toggleClass("glyphicon-chevron-down");
	});
	
	$note.find(".glyphicon-chevron-down").click(function(){
		that.display();
		// 여기 안에서의 this는 위에서 찾은 find(".glyphicon-chevron-up")
		console.log(this);
		$note.find(".glyphicon-chevron-down").toggleClass("glyphicon-chevron-up");
	});
	
	$note.find(".glyphicon-pushpin").click(function(){
		// 여기 안에서의 this는 위에서 찾은 find(".glyphicon-pushpin")
		that.fix();
	});
	
	$note.find(".glyphicon-trash").click(function(){
		// 여기 안에서의 this는 위에서 찾은 find(".glyphicon-trash")
		that.del();
	});
};

// drag()
Memo.prototype.drag = function(){
	// this는 Memo객체
	this.$note.draggable();
};
// display()
Memo.prototype.display = function(){
	// this는 Memo객체
	
	// 해당 클래스가 있으면 삭제, 없으면 넣어주기때문에
	// 이 display 함수 하나로 열기 닫기를 다 구현할수 있다.
	this.$note.toggleClass("h20");
};

// fix()
Memo.prototype.fix = function(){
	// this는 Memo객체
	// toggleClass는 해당 클래스나 요소에 원하는 클래스가 없으면 추가하고, 있으면 제거.
	this.$note.find(".glyphicon-pushpin").toggleClass("choice")
	if(this.$note.find(".glyphicon-pushpin").hasClass("choice")){		
		this.$note.draggable("disable");
	}else{
		this.$note.draggable("enable");
	}
};

// del()
// Memo에 
Memo.prototype.del = function(){
	// this는 Memo객체
	this.$note.remove();
};