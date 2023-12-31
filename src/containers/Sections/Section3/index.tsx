import "./style.css";

export default function Section3() {
    return (
        <section className="section3">
            <h2 id="work-experience">Work Experice</h2>
            <div>
                <img src="/common/link_icon.png" alt="link" />
                <h3>
                    <a href="https://picknplan.com/">
                        픽앤주식회사(2022.03~현재)
                    </a>
                </h3>
            </div>
            <ul>
                <li>
                    Nextjs+Typescript+Styled component를 이용해 픽앤플랜 보험
                    프로세스 및 내보험상품 웹뷰 파트 개발
                </li>
                <li>svg를 이용한 해약환급금 그래프 개발, 도넛차트 개발</li>
                <li>플래너 프로필 화면 및 질문답변 기능 구현</li>
                <li>백엔드와의 소통능력 계발</li>
            </ul>
            <h3>공공데이터 청년인턴십(2021.09~2021.12)</h3>
            <ul>
                <li>공공데이터 제공을 위한 데이터 가공 업무 담당</li>
                <li>반복적인 업무 개선을 위한 python 스크립트 작성</li>
                <li>해커톤 행사 참여 및 대상 수상</li>
            </ul>
        </section>
    );
}
