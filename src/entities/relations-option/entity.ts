// one-to-many, many-to-one, many-to-many 옵션값

// eager: find 실행마다 항상 같이 가져올 relation
// 원래는 find() 에서 relation 옵션을 설정해줘야 가져옴.
// 설정하면 user 쿼리 시 profile 도 항상 가져옴.
// 기본값 false, relation 안가져옴.

// cascade: 저장 시 relation 을 한번에 같이 저장가능
// user 생성 > profile 생성 할때 user 넣어주는 식이었는데.
// cascade 후 user 안에 profile 을 같이 넣어주면 profile 도 생성됨.
// 기본값 false, 넣어줘도 생성 안시켜줌.

// nullable: 기본값 true, 기본적으로 null 가능함
// false 관게로 정의하면 관계 데이터 없으면 오류 발생.
// cascade 랑 같이 쓰면 편리할 듯
// nullable false + cascade true

// onDelete: on~ 뭐뭐 했을때
// delete 했을 때
// 관계가 삭제됐을때 no action 아무것도 안함
// cascade 같이 삭제
// set null
// set default 기본 설정으로
// restrict 참조 하고 있는 데이터가 있으면 삭제 불가
