// rdb vs. nosql

// 관계가 없으면 정보의 중복이 발생한다.
// Posts 내 User 정보를 매번 생성

// 관계를 형성시킨다.
// Post 모델은 User 모델과 관계를 가진다.
// 어떤 관계지?

// 하나의 포스트는 하나의 유저를 가진다.
// 유저는 여러 포스트를 작성할 수 있다.
// 여러 포스트는 many 입장
// User: onetomany
// Post: manytoone

// one-to-many / many-to-one 은 관점 차이

// many-to-many 이 좀 헷갈림.
// 여러개 대 여러개의 여지가 있으면 성립함.
// Post 와 Tag
// 관계 컬럼을 따로 두지 않고 관계 테이블을 추가로 생성해서 관계 형성함.

// Post 모델의 author 르 관계를 맺으면 기존 auther: string 에 불일치가 발생함.
// 테이블 구조 변경 시 위배되는 값을 처리해야함.
// prod 는 마이그레이션 파일로 처리함.

// 마이그레이션 작성법은 어떻게 될까?

// authorId 라는 foreign key 구조로 변경됨.
// many-to-one 관계를 가지는 모델이서 생성됨.
// posts

// 관계에 eager 를 주던가.
// find() 옵션으로 relations 를 해주면 조회 가능.

// console.log 말고 debugger 쓰자
// .vscode/launch.json

// runtimeExecutable: "pnpm"
// runtimeArgs: ["run", "start:debug"]

// console integratedTerminal (vscode terminal)
// restart: true
// port: 9229 (nestjs debug default port)
// autoChildAttachProcesses: true (자동으로 프로세스에 붙음)

// 브레이크 포인트 지정해서 모니터링
// step into 로 함수 안으로 진입
// step over 는 다음 줄로 넘어감
