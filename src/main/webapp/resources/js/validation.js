function CheckAddBook() {
	
	var bookId = document.getElemantById("bookId");
	var name = document.getElemantById("name");
	var unitPrice = document.getElemantById("unitPrice");
	var unitsInStock = document.getElemantById("unitsInStock");
	var description = document.getElemantById("description");
	
	if(!check(/^ISBN[0-9]{4,11}$/, bookId, "[도서코드]\nISBN과 숫자를 조합하여 5~12자까지 입력하세요\n첫 글자는 반드시 ISBN로 시작하세요"))
		return false;
	
	if(name.value.length < 4 || name.value.length > 50) {
		alert ("[도서명]\n최소 4자에서 최대 50자까지 입력하세요");
		name.focus();
		return false;
	}
	
	//도서 가격 체크
	if (unitPrice.value.length == 0 || isNaN(unitPrice.value)) {
		alert("[가격]\n숫자만 입력하세요");
		unitPrice.focus();
		return false;
	}
	
	if (unitPrice.value < 0) {
		alert("[가격]\n음수를 입력할 수 없습니다");
		unitPrice.false;
		return false;
	}
	
	//재고 수 체크
	if (isNaN(unitsInStock.value)) {
			alert("[재고 수]\n숫자만 입력하세요");
			unitInStock.false;
			return false;
		}
	if (description.value.length < 100) {
				alert("[상세설명]\n최소 100자 이상 입력하세요.");
				description.false;
				return false;
		}
		
	functipn check(regExp, e, msg) {
		if (regExp.test(e.value)) {
			return true;
		}
		alert(msg);
		e.focus();
		return false;
	}
	document.netBook.submit()
}