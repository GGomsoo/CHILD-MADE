# 우리 아이가 만들었어요

![Untitled](https://github.com/kdozlo/CHILD-MADE/assets/74356213/932c8776-c965-4e3f-9d50-ccd221c968cd)


### 4세에서 10세 아이들이 함께 참여 가능한 화상 동화 서비스

## 소개 영상

- [https://www.youtube.com/watch?v=1bM2wbN2ajA](https://www.youtube.com/watch?v=1bM2wbN2ajA)

## 시연 영상

- [https://www.youtube.com/watch?v=xtrJIBw8ABU](https://www.youtube.com/watch?v=xtrJIBw8ABU)

## 배경

동화가 아이들에게 긍정적인 영향을 미친다는 것은 이미 대부분의 사람들이 알고 있다. 

- **언어 발달과 책 읽기 습관 형성**에 많은 도움을 준다.
- 다양한 상황과 캐릭터를 간접적으로 체험해보면서 **상상력과 창의력 발달에 많은 도움**이 된다.
- **이야기 속에 녹아 있는 교훈을 느낄 수 있다.**

하지만 이렇게 좋은 동화를 접할 기회가 점점 줄어들고 있다. 

- 맞벌이 가정이 늘어남에 따라 **부모님이 동화를 읽어줄 기회가 줄어들었다.**
- 스마트 기기의 발달로 **자극적이고 흥미 위주인 컨텐츠들이 자리잡으면서 아이들이 스스로 동화를 읽는 경우가 줄어들었다.**

이러한 상황에서 아이들에게 동화책을 읽을 수 있도록 도와주는 여러 교육 서비스들이 만들어졌다. 
하지만 기존 서비스들( 아이들나라, 밀크T, 밀리의 서재 등 )에서 몇 가지 아쉬운 부분을 발견했다.

- 동화책을 읽는 과정에서 **능동적인 참여가 불가능**하여 **흥미를 쉽게 잃을 수 있다.**
- 동화책을 읽는 활동에 대한 결과물이 남지 않아 **부모의 경우 아이들이 제대로 참여하는 지 알 수 없고**, 아이들의 경우 **성취감이 없어 오랫동안 활동을 지속하는 것이 어렵다.**
- **단순히 혼자서 동화를 읽도록 하기 때문에 어릴 때부터 길러주어야 할 다른 성향들을 기르는 데에는 아쉬움**이 있다.
- 기존 동화책들은 이미 결말이 정해져 있기 때문에 결말을 알고 있을 경우, **동화 내용 흐름에 대한 집중도가 떨어진다.**

## 목표

1. 동화책을 읽는 과정에서 실시간으로 **능동적인 참여가 가능 하도록** 서비스를 만든다.
2. 동화책을 읽는 활동에 대한 결과물을 생성하여 부모는 **아이들의 참여도를 체크** 할 수 있고, **아이들은 그 결과물을 통해 성취감**을 느낄 수 있도록 하여 **꾸준한 참여를 유도**하도록 한다.
3. 여러 친구들과 함께 동화책을 읽으면서 **아이들의 사회성 형성에도 도움**을 주도록 한다.
4. 간단한 선택지를 통해 **하나의 동화에서도 다양한 결말**이 나오도록 만들어 **흥미를 유지하도록 유도**한다.

## 주요 기능

1. 혼자 하기 / 함께 하기선택 기능
2. 원하는 역할 선택 기능
3. 원하는 역할 선택 후 자동으로 방 배정
4. 실시간 웹캠 공유 기능
5. 참여 도우미 캐릭터 시스템
6. 저장된 동화 영상 다시보기 / 다운로드 / 삭제

## 주요 기술

**Backend**

- java17
- springboot 3.2.2
- spring jpa
- spring security
- spring web
- oauth2
- intelliJ IDE
- ffmpeg

**Frontend**

- Node.js 20.11
- react18
- VSCode

**DataBase**

- mariaDB
- Redis

**Infra**

- aws ec2
- asw s3
- aws RDS
- openvidu
- docker & docker compose
- jenkins

## 협업 툴

- git
- notion
- gerrit
- jira
- mattermost

# 커밋 컨벤션
| Type         | 설명                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| **Feat**     | 새로운 기능 추가                                                              |
| **Fix**      | 버그 수정                                                                    |
| **Refactor** | 리펙토링                                                                     |
| **Design**   | CSS등 사용자 UI 디자인 변경                                                   |
| **Comment**  | 주석 추가 / 변경                                                             |
| **Style**    | 코드 포맷팅, 세미콜론 누락, 코드 변경 없는 경우                                  |
| **Docs**     | 문서 추가, 수정, 삭제                                                         |
| **Test**     | 테스트 관련 코드 추가, 수정, 삭제과 비즈니스 로직 변경 없는 경우                   |
| **Chore**    | 위에 걸리지 않는 기타 변경사항(빌드 스크립트 수정, assets image, 패키지 매니저 등)  |
| **Init**     | 프로젝트 초기 생성                                                            |
| **Rename**   | 파일 혹은 폴더명 수정하거나 옮기는 경우                                          |
| **Remove**   | 파일을 삭제하는 작업만 수행하는 경우                                             |

## 팀원 역할 분배
|   **Name**   |                김대영                 |                박성진                |                  이준서                   |               김규리                |                 류태수                  |               박종혁                |
| :----------: | :-----------------------------------: | :----------------------------------: | :---------------------------------------: | :---------------------------------: | :-------------------------------------: | :---------------------------------: |
| **Position** |          Backend <br> Leader           |          Backend           |           Backend          |        Frontend <br> Leader         |            Frontend            |         Frontend          |


## 아키텍처

![Untitled 1](https://github.com/kdozlo/CHILD-MADE/assets/74356213/779e115a-9dd8-43c6-9fa1-94f8b653d44c)


## ERD

![Untitled 2](https://github.com/kdozlo/CHILD-MADE/assets/74356213/7ba7f38c-5af3-4131-b3a7-dc0acbc8030c)


## 프로젝트 산출물

- [기획서](https://www.notion.so/287226729deb4d6381a625983ac01f7f?pvs=21)
- [기능명세서](https://evanescent-kilometer-a6e.notion.site/41409e39742e42228f03f991f4fbc3f2?pvs=4)
- [API 명세서](https://www.notion.so/API-a4763cc8c23a4a52a533925a1c9c96c6?pvs=21)
- [와이어프레임](https://www.figma.com/file/5q8NMpF6gTAb0tVW6MnV8g/D209?type=design&node-id=272-1672&mode=design)
- [커밋 컨벤션](https://www.notion.so/0df7f1a472544bce8ad6fb136dde5225?pvs=21)
- [backend 코드 컨벤션](https://www.notion.so/10b0f128142f4b43b121d4992c8ecb1b?pvs=21)
- [frontend 코드 컨벤션](https://www.notion.so/c5b5da87eefd41c9b5caddf04ca0605f?pvs=21)
- [회의록](https://evanescent-kilometer-a6e.notion.site/d0ac7f4325ce4beab9db1061d08a85df?pvs=4)

## 우리 아이가 만들었어요 서비스 화면

### 로그인

- 구글 로그인 / 카카오 로그인

![Untitled 3](https://github.com/kdozlo/CHILD-MADE/assets/74356213/2b5af1b2-f813-4b6b-a438-a4618f9a4417)


![Untitled 4](https://github.com/kdozlo/CHILD-MADE/assets/74356213/54428a78-dc94-41c5-beb8-c82385290a5e)


### 회원 가입

- 닉네임을 기입한다.

![Untitled 5](https://github.com/kdozlo/CHILD-MADE/assets/74356213/85bfe72b-9980-490f-9069-31df9d6c0c04)


### 메인 화면
- 플레이 모드 : 혼자하기, 같이하기

![Untitled 6](https://github.com/kdozlo/CHILD-MADE/assets/74356213/b75cc25a-ccaf-4f2e-a006-1ca900501a07)


### 책 목록 리스트 화면

- 검색 기능

![Untitled 7](https://github.com/kdozlo/CHILD-MADE/assets/74356213/fc97bf96-2d0e-4dd9-b9f6-5a16b8f04cd9)


### 책 상세 정보 및 역할 선택 화면

- 원하는 역할을 선택하여 플레이 할 수 있다.

![Untitled 8](https://github.com/kdozlo/CHILD-MADE/assets/74356213/71dd33c3-c44e-47e1-b773-0bcc9775b3bc)


![Untitled 9](https://github.com/kdozlo/CHILD-MADE/assets/74356213/08936f0a-9153-4c26-bfef-ebf06682b9d3)


### 플레이 화면

![Untitled 10](https://github.com/kdozlo/CHILD-MADE/assets/74356213/98fb5b93-36c1-4931-a2a7-48f6600db153)


### 나의 동화책 목록 화면

- 검색 기능

![Untitled 11](https://github.com/kdozlo/CHILD-MADE/assets/74356213/d23e49e8-a85c-4ce5-a626-0c89a691bb2a)


### 나의 동화책 상세 정보

- 동화책 보기
- 동화책 저장하기
- 동화책 삭제하기

![Untitled 12](https://github.com/kdozlo/CHILD-MADE/assets/74356213/e9149d12-8233-40e7-86e9-6f0d07f479b2)


### 동화책 보러가기 화면

![Untitled 13](https://github.com/kdozlo/CHILD-MADE/assets/74356213/bbfe8dd4-2c90-4eba-a106-71d2fc66e7cc)


### 마이페이지

- 이름, 닉네임, 프로필 사진 수정 기능
- 회원 탈퇴 기능

![Untitled 14](https://github.com/kdozlo/CHILD-MADE/assets/74356213/c7158134-fed8-44a0-a241-0c97fd03fd39)


