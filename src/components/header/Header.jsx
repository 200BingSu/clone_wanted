const Header = () => {
  return (
    <header className="header">
      <div className="header-layout layout">
        {/* <!-- 좌측 --> */}
        <div className="header-left">
          {/* <!--로고--> */}
          <div className="header-logo">
            <a href="/">
              <img src="./images/svg/wanted_logo.svg" alt="완티드 로고" />
            </a>
          </div>
          {/* <!-- 상단 메뉴--> */}
          <div className="header-menu-wrap">
            <a href="#" className="header-menu xi-bars" id="employ">
              {" "}
              채용
            </a>
            <a href="#" className="header-menu">
              커리어
            </a>
            <a href="#" className="header-menu">
              소셜
            </a>
            <a href="#" className="header-menu">
              이력서
            </a>
            <a href="#" className="header-menu">
              프리랜서
            </a>
            <a href="#" className="header-menu" id="add-menu-btn">
              더보기
            </a>
          </div>
        </div>
        {/* <!-- 우측--> */}
        <div className="header-right">
          {/* <!--검색--> */}
          <button className="search">
            <img src="./images/svg/search.svg" alt="돋보기" />
          </button>
          {/* <!--로그인--> */}
          <div className="private-box">
            <a href="#" className="login">
              회원가입/로그인
            </a>
            <a href="#" className="company-service">
              기업 서비스
            </a>
          </div>
        </div>
      </div>
      {/* <!-- 서브메뉴 --> */}
      <div className="submenu-box">
        <div className="submenu-layout">
          <div className="swiper submenu-slide">
            <ul className="swiper-wrapper submenu-title">
              <li className="swiper-slide submenu">
                <a href="#" className="first-menu submenu-link">
                  직군
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  개발
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  경영·비즈니스
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  마케팅·광고
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  디자인
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  영업
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  고객서비스·리테일
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  미디어
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  엔지니어링·설계
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  HR
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  게임제작
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  금융
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  제조·생산
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  교육
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  의료·제약·바이오
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  물류·무역
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  법률·법집행기관
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  식·음료
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  건설·시설
                </a>
              </li>
              <li className="swiper-slide submenu">
                <a href="#" className="submenu-link">
                  공공·복지
                </a>
              </li>
            </ul>
            <div className="swiper-scrollbar submenu-bar"></div>
          </div>

          <div className="submenu-content">
            <p>직군을 먼저 선택하면 상세 직무를 볼 수 있어요.</p>
          </div>
        </div>
      </div>
      {/* <!-- 더보기 메뉴 --> */}
      <div className="add-menu-box">
        <div className="add-menu-layout">
          <ul className="add-menu-wrap">
            <li className="add-menu">
              <h3>취업·이직</h3>
              <ul>
                <li>
                  <a href="#">경력 정보 불러오기</a>
                </li>
                <li>
                  <a href="#">면접 코칭받기</a>
                </li>
                <li>
                  <a href="#">커리어 상담받기</a>
                </li>
                <li>
                  <a href="#">추천사 작성/요청하기</a>
                </li>
                <li>
                  <a href="#">챗봇으로 포지션 찾기</a>
                </li>
              </ul>
            </li>
            <li className="add-menu">
              <h3>혜택·정보</h3>
              <ul>
                <li>
                  <a href="#">원티드 포인트</a>
                </li>
                <li>
                  <a href="#">직군별 연봉</a>
                </li>
                <li>
                  <a href="#">최신 채용 트렌드</a>
                </li>
                <li>
                  <a href="#">다음 커리어 찾기</a>
                </li>
                <li>
                  <a href="#">최신 기술 트렌드</a>
                </li>
              </ul>
            </li>
            <li className="add-menu">
              <h3>인사 담당자</h3>
              <ul>
                <li>
                  <a href="#">HR 커뮤니티 인상</a>
                </li>
                <li>
                  <a href="#">HR 솔루션</a>
                </li>
              </ul>
            </li>
            <li className="add-menu">
              <h3>교육 담당자</h3>
              <ul>
                <li>
                  <a href="#">원티드 취업지원 시스템</a>
                </li>
              </ul>
            </li>
            <li className="add-menu-card">
              <a href="#" className="add-menu-card-link">
                <img src="./images/point-banner.png" alt="커리어 포인트" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
