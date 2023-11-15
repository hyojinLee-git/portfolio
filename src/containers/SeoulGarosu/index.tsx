import "./style.css";

export default function SeoulGarosu() {
    return (
        <div className="seoul-garosu">
            <video controls>
                <source src="/SeoulGarosu/demo.mp4" />
            </video>
            <h2>💡 Topic</h2>
            <p>
                나무돌보미 사업을 Digital Transformation을 통해 활성화시키기
                위한 서울가로수 어플리케이션입니다.
            </p>
            <h2>📝 Summary</h2>
            <p>
                방치된 가로수를 시민들이 직접 돌볼 수 있도록 ‘나무 돌보미’라는
                사업이 생겨났습니다. 하지만 코로나 상황의 어려움과 전화로
                접수해야 하는 신청 과정의 불편함이 생겼습니다. 이를 해결하기
                위해 서울가로수라는 어플을 제작하여 입양 과정의 복잡성, 참여
                지속성을 개선시켰습니다. 서로의 강점을 살려 하나의 완성된 앱이
                만들어지는 과정에서 즐거움과 보람을 느꼈습니다.
            </p>
            <h2>🏆 Prize</h2>
            <p>공공데이터 해커톤 서비스개발 부문 `대상` 수상</p>
            <h2>🛠️ Tech Stack</h2>
            <ul>
                <li>Android, Java</li>
                <li>React</li>
                <li>Firebase</li>
            </ul>
            <h2>👥Team</h2>
            <ul>
                <li>기획자1</li>
                <li>데이터분석가 1</li>
                <li>개발자 3</li>
            </ul>
            <h2>✋ Part</h2>
            <ul>
                <li>프로토타입 제작</li>
                <li>공공데이터를 이용해 신청 가능한 나무 조회 기능 구현</li>
                <li>데이터 시각화 페이지 제작</li>
                <li>나무 돌보미 사업 신청 기능 구현</li>
                <li>나무 돌봄 팁 페이지 제작</li>
                <li>나무돌보미 사업 소개 페이지 제작</li>
            </ul>
            <h2>📖 Learned</h2>
            <ul>
                <li>
                    백엔드 구축을 따로 하지 않고 BaaS인 Firebase를
                    이용하였습니다.
                </li>
                <li>
                    리액트를 이용해 맡은 페이지를 개발,배포하고 웹뷰를 이용해
                    안드로이드 앱에 링크를 넣기로 하였습니다.
                </li>
                <li>
                    나무 돌보미 신청 페이지를 제작하며 유저 정보는 앱에 있고
                    서버에 신청하는 로직은 웹에 있었습니다. 따라서 유저 정보를
                    웹으로 전달하기 위해 안드로이드 스튜디오의 CookieManager를
                    이용하였습니다.신청웹페이지에 유저 정보가 담긴 쿠키를
                    세팅함으로써 이 문제를 해결하였습니다.
                </li>
                <li>
                    공공데이터를 이용해 현재 존재하고 있는 가로수 정보를
                    지도api에 마커표시를 해야 했는데 공공데이터 요청 프로토콜이
                    http를 사용하고 있었습니다. 따라서 firebase function을
                    이용하여 서버에서 데이터를 요청하고 그것을 브라우저에서
                    요청하는 방식으로 문제를 해결하였습니다.
                </li>
                <li>
                    Styled-Component를 사용하며 컴포넌트의 재사용성의 편리함을
                    알 수 있었습니다.
                </li>
            </ul>
        </div>
    );
}
