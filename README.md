VScode 터미널 명령어

docker run -ti node bash                                                                   (docker 실행 -> name이 무작위로 생성)
docker run -ti -v /Users/ichanhui/Desktop/javascript:/home --name (원하는 이름) node bash     (주소창에 home빼먹지 않기) 
docker run -ti -v $(pwd):/home --name (원하는 이름) node bash                                 (docker에 주소창 단축명령어 : 개편함) 
docker run -ti -v $(pwd):/home --name (원하는 이름) -w /home node bash                        (docker 들어가자마자 원하는 디렉토리 위치에 바로이동)

docker run -ti -v $(pwd):/home -w /home --rm node bash                                     (docker를 나가면 자동 삭제 : name의 의미가 없음)******


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



-----------------------------------------------------------
history (내가 친 명령어들의 기록을 보여줌)
