docker 터미널 명령어

docker run -ti node bash                                                                   (docker 실행 -> name이 무작위로 생성)
docker run -ti -v /Users/ichanhui/Desktop/javascript:/home --name (원하는 이름) node bash     (주소창에 home빼먹지 않기) 
docker run -ti -v $(pwd):/home --name (원하는 이름) node bash                                 (docker에 주소창 단축명령어 : 개편함) 
docker run -ti -v $(pwd):/home --name (원하는 이름) -w /home node bash                        (docker 들어가자마자 원하는 디렉토리 위치에 바로이동)

docker run -ti -v $(pwd):/home -w /home --rm node bash                                     (docker를 나가면 자동 삭제 : name의 의미가 없음)******

--- images----

docker run -it (images name) bash : 원하는 이미지 
--------------

docker ps             (현재 켜진거 확인)
docker ps -a          (갖고있는거 다 보이기)

docker images         (설치된 node가 보임)

docker rm (node_name) (node 삭제)

docker start                    (docker 시작시키기)
docker exec -ti (name) bash     (docker 들어가기)
(home으로 들어간 후) node (파일명)   (파일 실행)
exit                            (docker 나가기)
docker stop (멈출 name)          (docker 멈추기)

sudo chmod +x run.sh          (독커안에 run.sh추가) : run.sh에 "docker run -ti -v $(pwd):/home -w /home --rm node bash" 명령어가 들어가있음
./run.sh                      (run.sh가 자동으로 명령어를 실행시켜거 바로 docker로 들어가짐)


docker start (name)         : 정지된 컨테이너 실행
docker restart (name)       : 유사 재부팅
docker attach (name)        : 시작한 컨테이너에 접속 -> 엔터 한 번 더 입력하면 bash shell 표시됨
docker rm (name)            : 컨테이너 삭제
docker search (images name) : 도커에서 이미지 검색

--
버전 확인	                   $ docker -v
이미지 다운로드	              $ docker pull [이미지 명]
다운로드된 이미지 목록     	    $ docker images
컨테이너 생성	                $ docker create [옵션] [이미지 명]
컨테이너 생성 및 실행	        $ docker run [옵션] [이미지 명]

컨테이너 실행	               $ docker start [컨테이너 명]
컨테이너 재실행	             $ docker restart [컨테이너 명]
컨테이너 접속	               $ docker attach [컨테이너 명]
컨테이너 정지	               $ docker stop [컨테이너 명]
실행중인 컨테이너 목록	        $ docker ps

정지된 컨테이너 목록	          $ docker ps -a
컨테이너 명 변경	              $ docker rename [기존 컨테이너 명] [새로운 컨테이너 명]
컨테이너 삭제	                 $ docker rm [컨테이너 명]

-- 출처 : https://whitepaek.tistory.com/38

-----------------------------------------------------------
Dockerfile 문법

#			: comment
FROM 		: 컨테이너의 BASE IMAGE(운영환경)
MAINTAINER  : 이미지를 생성한 사람의 이름 및 정보
LABEL 		: 컨테이너 이미지에 컴테이너의 정보를 저장
RUN(@) 		: 컴테이너 빌드를 위해 base image에서 실행한 commends
COPY(@)	: 컨테이너 빌드 시 호스트의 파일을 컨테이너로 복사
ADD(@)		: 컨테이너 빌드 시 호스트의 파일(tar, url포함)을 컨테이너로 복사
WORKDIR(@)	: 컨테이너 빌드 시 명령이 실행 될 작업 디렉터리 설정
ENV(@)		: 환경변수 지정
USER(@)		: 명령 및 컨테이너 실행 시 적용할 유저 설정
VOLUME		: 파일 또는 디렉토리를 컨테이너의 디렉토리로 마운트
EXPOSE		: 컨테이너 동작 시 외부에서 사용할 포트 지정
CMD		: 컨테이너 동작 시 자동으로 실행할 서비스나 스크립트 지정
FNTRYPOINT	: CMD와 함께 사용하면서 commend 지정 시 사용
-----------------------------------------------------------
history (내가 친 명령어들의 기록을 보여줌)
npm     (팩키지 관리자)
