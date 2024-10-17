import "./App.css";

function App() {
  return (
    <body className="app">
      <div className="title">
        <div className="header-desc">
          <p className="header-desc-left">
            <strong>분석</strong>으로 발전하고
          </p>
          <p className="header-desc-left">
            <strong>소통</strong>으로 협력하는 개발자
          </p>
        </div>
        <h1 className="header-title">
          <strong>박소은</strong>입니다.
        </h1>
      </div>
      <div className="contact">
        <div>
          <p>Contact.</p>
          <p>E-mail: runterf@gmail.com</p>
          <p>Phone: 010-8802-1656</p>
        </div>
        <div>
          <p>Channel.</p>
          <p>
            Github:{" "}
            <a href="https://github.com/soe-un" target="_blank">
              https://github.com/soe-un
            </a>
          </p>
          <p>
            Blog:{" "}
            <a href="https://jidokhada.tistory.com" target="_blank">
              https://jidokhada.tistory.com
            </a>
          </p>
        </div>
      </div>
      <div className="divider" />
      <div className="content-wrap">
        <div className="content">
          <h3>About Me… </h3>
          <p>스타트업에서 근무하는 3년차 프론트엔드 개발자입니다.</p>
          <p>
            업무에 도움이 되는 일을 생각하고,
            <strong>비즈니스의 궁극적인 지향점</strong>을 찾기 위해 노력합니다.
          </p>
          <p>
            웹 서비스를 기획/개발/배포/운영한 경험과 5명 규모의 팀에서 일정 관리
            및 업무 분배를 한 경험이 있습니다.
          </p>
          <p>불편함을 줄이기 위해 자동화 기술을 도입하는 것을 좋아합니다.</p>
        </div>
        <div className="thin-divider" />
        <div className="content">
          <h3>Tech/Skills</h3>
          <p>
            <strong>Typescript</strong>, <strong>React</strong>, Next.js
          </p>
          <p>scss, styled, tailwind</p>
          <p>Git, Jira, Confluence, Notion</p>
          <p>Figma, PowerPoint</p>
        </div>
        <div className="thin-divider" />
        <div className="nth-content">
          <h3>Experience</h3>
          <h4>래브라도랩스</h4>
          <div className="exp-desc">
            <a href="https://labradorlabs.ai" target="_blank">
              https://labradorlabs.ai
            </a>
            <p>Frontend Developer</p>
            <p>2021.06 ~ 현재</p>
          </div>
          <div className="sub-content">
            <h5>래브라도 솔루션 프론트엔드 담당자</h5>
            <p>
              오픈소스 취약점, 라이선스를 분석하기 위한 래브라도 솔루션에서 기존
              코드를 리팩토링하고 새로운 기능을 개발하고 있습니다.
            </p>
            <p>
              안정적인 배포를 위해, main-trial-dev의 세 줄기로 구분하는 브랜치
              관리 방법을 도입했습니다.
            </p>
            <p>
              엑셀 기반 언어 번역을 진행하며 번역 결과물과 코드 내부 json 파일을
              양방향으로 변환하기 위한 python tool을 개발했습니다.
            </p>
            <p>정기 배포 13회(22년 4회, 23년 4회, 24년 5회)</p>
            <p>사용 기술 : Typescript, React, yarn</p>
            <p>특이사항 : White Labeling 지원</p>
          </div>
          <div className="sub-content">
            <h5>IVAS 프론트엔드 담당자</h5>
            <p>
              고객사의 안정적인 분석을 위한 IVAS 솔루션에서 특정 고객사의
              요구사항을 위한 기능을 추가하고 공통적으로 사용하기 위해
              컴포넌트화 했습니다.
            </p>
            <p>2개 고객사 담당(삼성카드, LG에너지솔루션)</p>
            <p>사용 기술 : Typescript, Next.js, tailwind, yarn berry</p>
            <p>특이사항 : monorepo 사용</p>
          </div>
          <div className="sub-content">
            <h5>래브라도 & IVAS 기능 기획 담당자</h5>
            <p>
              래브라도 또는 IVAS에 기능을 추가할 경우 요구사항 분석 및 Figma를
              통해 기능을 기획했습니다.
            </p>
            <p>
              외부 업체와 협력하여 기획할 때에도 연구소의 소통을 담당했습니다.
            </p>
            <p>사용 기술 : Figma, powerpoint, Confluence, notion</p>
          </div>
        </div>
        <div className="thin-divider" />
        <div className="content">
          <h3>Other</h3>
          <p>아주대학교 사이버보안학과 졸업(2018.03 - 2022.02)</p>
        </div>
      </div>
    </body>
  );
}

export default App;
