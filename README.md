Coin Invest Program (코인 자동매매 및 정보공유 프로그램)
===============================================

> 업비트 api를 이용해 코인을 자동매매하고 매매 히스토리를 살펴보는 프로그램입니다.<br/>
> 정보공유 게시판을 통해 서로의 정보를 주고 받을 수 있습니다.


프로젝트 정보
----------


### 사용 라이브러리
#### 프론트엔드
* react (v17)
* react-router-dom (v6)
* react-query
* andD
* react-hook-form
* yup
* crypto-browserify
* crypto-js
* dayjs
* https-browserify
* react-toastify

</br>

#### 서버
* nestjs (v8)
* typeorm
* mysql

</br>

### 프로젝트 구조
```
📦 CoinInvestProgram
├─ client
│  ├─ nginx
│  ├─ node_modules
│  ├─ public
│  ├─ src
│  │  ├─ components
│  │  ├─ hooks
│  │  ├─ layouts
│  │  ├─ pages
│  │  ├─ queries
│  │  ├─ services
│  │  └─ typing
│  ├─ config-overrides.js
│  ├─ Dockerfile
│  ├─ Dockerfile.dev
│  ├─ package.json
│  ├─ tsconfig.json
│  └─ tsconfig.paths.json
├─ server                                             # node와 express 라이브러리를 활용해서 구현한 서버
├─ server-nest                                     # nestjs를 활용해서 구현한 서버
│  ├─ config
│  ├─ src
│  ├─ Dockerfile
│  ├─ Dockerfile.dev
│  ├─ package.json
│  └─ tsconfig.json
├─ mysql
├─ nginx
└─ docker-compose.yml                     # client, server, db를 한번에 설치 및 실행
```

