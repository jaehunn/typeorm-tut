// 1-to-1
// ex) User 의 id 가 Profile 의 userId 와 하나와 매핑됨.
// 레퍼런스 할 뿐. (join)

// 1-to-many
// User 가 여러 Post 를 작성할 수 있음.
// Uesr 의 id 가 Post 에서 userId 로 여러개가 있을 수 있음.

// many-to-one
// 1 to many 를 뒤집은 것
// Post 입장에서는 여러 Post 가 하나의 User 를 본다.

// many 의 입장이 되는 테이블

// many-to-many
// Post 와 Tag
// 각 포스트는 여러 태그를 가지고
// 각 태그는 여러 포스트를 가질 수 있다.

// 레퍼런스 컬럼을 만들지 않는다.
// 대신 PostTagTable 관계 테이블을 만든다.
// postid 와 tagid 를 매핑하는 테이블
// 서로가 여러개를 참조할 수 있는 형태
