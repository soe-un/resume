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
          <p>스타트업에서 근무하는 3년차 웹 프론트엔드 개발자입니다.</p>
          <p>
            업무에 도움이 되는 일을 생각하고,
            <strong>비즈니스의 궁극적인 지향점</strong>을 찾기 위해 노력합니다.
          </p>
          <p>5명 규모의 팀에서 일정 관리 및 업무 분배를 한 경험이 있습니다.</p>
        </div>
        <div className="thin-divider" />
        <div className="nth-content">
          <h3>Experience</h3>
          <h4>
            래브라도랩스{" "}
            <a href="https://labradorlabs.ai" target="_blank">
              https://labradorlabs.ai
            </a>
          </h4>
          <div className="exp-desc">
            <p>Frontend Developer / 2021.06 - 현재</p>
          </div>
          <div className="sub-content">
            <h5>
              래브라도 프론트엔드 담당자 <span>2022.01 - 현재</span>
            </h5>
            <p>
              제품의 SBOM, 취약점, 라이선스를 분석하기 위한 솔루션인 래브라도의
              메인 담당자로
              <br />
              기존 코드를 리팩토링하고 새로운 기능을 개발하고 있습니다.
            </p>
            <p>
              공급사 관리를 위한 SCM 플랫폼을 기획하고 UI를 개발했습니다.{" "}
              <a
                href="http://www.boannews.com/media/view.asp?idx=132104"
                target="_blank"
              >
                보도자료
              </a>
            </p>
            <p>
              프론트엔드 메인 담당자로 정기 배포 13회를 진행했습니다.
              <br />
              (22년 4회, 23년 4회, 24년 5회)
            </p>
            <p>사용 기술 : Typescript, React, yarn</p>
            <p>특이사항 : White Labeling 지원</p>
          </div>
          <div className="sub-content">
            <h5>
              IVAS 프론트엔드 담당자 <span>2023.03 - 2024.01</span>{" "}
            </h5>
            <p>
              시스템 연동 분석 포탈 IVAS에서 고객사의 요구사항을 바탕으로 기능을
              추가하고 <br />
              서비스 공통적으로 적용하기 위해 컴포넌트화 했습니다.
            </p>
            <p>2개 고객사를 담당했습니다.(삼성카드, LG에너지솔루션)</p>
            <p>사용 기술 : Typescript, Next.js, tailwind, yarn berry</p>
            <p>특이사항 : monorepo 사용</p>
          </div>
          <div className="sub-content">
            <h5>
              래브라도 & IVAS 기획 담당자 <span>2021.09 - 현재</span>
            </h5>
            <p>
              래브라도, IVAS에 기능 추가 시 요구사항을 분석하고 Figma를 통해
              UI를 기획했습니다.
            </p>
            <p>
              외부 업체와 협력하여 기획할 때에도 협력사 소통을 담당하고
              있습니다.
            </p>
            <p>사용 기술 : Figma, powerpoint, Confluence, notion</p>
          </div>
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
        <div className="content">
          <h3>Other</h3>
          <p>아주대학교 사이버보안학과 졸업(2018.03 - 2022.02)</p>
        </div>
      </div>
    </body>
  );
}

export default App;
