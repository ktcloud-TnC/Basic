// pages/index.js
import Head from 'next/head';
import React, {useState} from 'react'; // 여기에 useState 추가
import styles from '../styles/Layout.module.css';
import FetchHostname from '../components/FetchHostname';
import ServerStatusChecker from '../components/ServerStatusChecker';
import ProductList from '../components/ProductList';
import ProductDescription from '../components/ProductDescription';
import ServerStatusBox from '../components/ServerStatusBox';
import { useStressTestActions } from '../components/stressActions';
import Fetch_web_LogContent from '../components/Fetch_web_LogContent';
import Fetch_was_LogContent from '../components/Fetch_was_LogContent';
import Link from 'next/link';

export default function Home() {
    const [selectedProductId, setSelectedProductId] = useState(null);
    const { installStressTool, startWebStressTest, isLoading } = useStressTestActions();
    const [selectedStep, setSelectedStep] = useState(null);
    
    // 새 창을 여는 함수
    function openAddProductWindow() {
        const windowFeatures = "width=400,height=600,left=100,top=100";
        window.open('/addproduct', 'Add Product', windowFeatures);
    }
    // 네비게이션 클릭 핸들러
    function handleNavClick(step) {
        setSelectedStep(step);
        // 3초 후에 애니메이션 효과 제거
        setTimeout(() => {
            setSelectedStep(null);
        }, 3000);
    }
    
    return (
        <div className={styles.container}>
            {/* Head 영역: 메타 데이터와 타이틀 설정 */}
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <title>kt cloud T&C</title>
                <meta
                    name="description"
                    content="This is material for kt cloud T&C official training."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            {/* 왼쪽 영역: 비디오 및 로고 오버레이 */}
            <div className={styles.leftSide}>
                <video className={styles.video} autoPlay="autoPlay" muted="muted" loop="loop">
                    <source
                        src="https://ss1.cloud.kt.com:1000/Basic/test/about_top_asset.mp4"
                        type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <img
                    className={styles.logoOverlay}
                    src="https://ss1.cloud.kt.com:1000/Basic/test/BI.png"
                    alt="Company Logo"/>
            </div>

            {/* 오른쪽 영역: 네비게이션 바 및 추가 내용 */}
            <div className={styles.rightSide}>
                {/* 네비게이션 바 추가 */}
                <nav className={styles.navbar}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem} onClick={() => handleNavClick('step1')}>
                            <a href="#step1" className={styles.navLink}>Step 1</a>
                        </li>
                        <li className={styles.navDivider}>&gt;</li>
                        <li className={styles.navItem} onClick={() => handleNavClick('step2')}>
                            <a href="#step2" className={styles.navLink}>Step 2</a>
                        </li>
                        <li className={styles.navDivider}>&gt;</li>
                        <li className={styles.navItem} onClick={() => handleNavClick('step3')}>
                            <a href="#step3" className={styles.navLink}>Step 3</a>
                        </li>
                        <li className={styles.navDivider}>&gt;</li>
                        <li className={styles.navItem} onClick={() => handleNavClick('step4')}>
                            <a href="#step4" className={styles.navLink}>Step 4</a>
                        </li>
                        <li className={styles.navDivider}>&gt;</li>
                        <li className={styles.navItem} onClick={() => handleNavClick('step5')}>
                            <a href="#step5" className={styles.navLink}>Step 5</a>
                        </li>
                        
                    </ul>

                    {/* 저작권 텍스트 추가 */}
                    <div className={styles.copyright}>
                        이 자료의 저작권은 kt cloud에 있으며, 무단 복제 및 배포를 금지합니다.
                    </div>
                </nav>
                <nav id="step1"></nav>
                {/* 서비스 상태 확인 섹션 */}
                <div className={styles.info}>
                    <p className={`${styles.step} ${selectedStep === 'step1' ? styles.shineText : ''}`}>
                        <span className={styles.serviceCheckMark}>&#10003;</span>&nbsp;step1</p>
                    <h1 className={styles.name}>
                        <span className={styles.mark}>kt cloud T&C</span>
                        &nbsp;3 Tier 웹 어플리케이션 구축 실습
                    </h1>
                    <span className={styles.explain}>
                        이 어플리케이션은 클라우드 서비스의 구축과 관리를 실습하고자 하는 사용자에게 이상적인 환경을 제공합니다.</span>
                    <br/>
                    <span className={`${styles.textMargin} ${styles.explain}`}>
                        사용자는 이를 통해 클라우드 기반의 웹 서비스 구축에 필요한 실질적인 경험을 쌓을 수 있습니다.
                    </span><br/>

                    <small className={styles.stickyNote}>
                    <span className={styles.serviceCheckMark}>&#10003;</span>&nbsp;step1&nbsp;:&nbsp;DMZ Tier에 구축한 WEB 서버를 통해 사용자 인터페이스(UI)를 제공하여 시스템에 접속하고 상호작용할 수 있습니다.<br/>
                    <span className={styles.serviceCheckMark}>&#10003;</span>&nbsp;step2&nbsp;:&nbsp;Private Tier에 구축한 WAS 서버와 DBaaS for MySQL8 인스턴스를 통해 클라이언트 요청에 대한 데이터 처리와 계산이 이루어집니다.<br/>
                    <span className={styles.serviceCheckMark}>&#10003;</span>&nbsp;step3&nbsp;:&nbsp;WAS 서버에 추가 볼륨을 연결하고 디스크 공간을 유연하게 확장하여 어플리케이션 로그 파일의 저장 공간을 확보합니다.<br/>
                    <span className={styles.serviceCheckMark}>&#10003;</span>&nbsp;step4&nbsp;:&nbsp;WEB 서버에 NAS 를 연결하고 로그 데이터 수집 도구를 활용하여 다수의 WEB 서버의 접속 로그를 NAS 에 통합하여 기록합니다.<br/>
                    <span className={styles.serviceCheckMark}>&#10003;</span>&nbsp;step5&nbsp;:&nbsp;Auto-Scaling 그룹을 설정하고 과부하 테스트 도구를 사용하여 설정한 트리거에 의해 WEB 서버의 Scale-Out이 작동되는 것을 확인합니다.<br/>
                    </small>

                    {/* // 페이지 컴포넌트 내부에서 FetchHostname 컴포넌트 사용 */}
                    <FetchHostname styles={styles}/> {/* // 페이지 컴포넌트 내부에서 ServerStatusChecker 컴포넌트 사용 */}
                    <ServerStatusChecker styles={styles}/>
                </div>

                <nav id="step2"><br/>
                <br/>
                </nav>
                
                <div className={styles.app_area}>
                    <p className={`${styles.step_left} ${selectedStep === 'step2' ? styles.shineText : ''}`}>
                        <span className={styles.serviceCheckMark}>&#10003;</span>&nbsp;step2</p>
                    <h2 className={styles.app_name}>kt cloud service finder&nbsp;<span className={styles.right_logo}>app</span>
                    </h2>

                    <p className={styles.serviceDescription}>
                        <span className={styles.serviceCheckMark}>&#10003;</span>
                        &nbsp;원하는 서비스를 선택하면 상세한 설명을 확인 할 수 있습니다.</p><br/>
                    <small className={styles.stickyNote}>
                        <span className={styles.bigBullet}></span>&nbsp;WAS 서버 내의 에코(Echo) 애플리케이션은 DB 서버에서 서비스 목록을 불러옵니다.<br/>
                        <span className={styles.bigBullet}></span>&nbsp;WEB 서버는 WAS 서버를 통해 전달받은 서비스 목록을 표시합니다.<br/>
                        <span className={styles.bigBullet}></span>&nbsp;사용자가 WEB 서버에서 특정 서비스를 선택하면, 해당 서비스의 설명을 WAS 서버로 요청합니다.<br/>
                        <span className={styles.bigBullet}></span>&nbsp;WAS 서버 내의 에코(Echo) 애플리케이션은 DB 서버에서 특정 서비스의 설명을 검색하고 불러옵니다.<br/>
                        <span className={styles.bigBullet}></span>&nbsp;WEB 서버는 WAS 서버를 통해 전달받은 서비스의 설명을 표시합니다.<br/>
                        <span className={styles.bigBullet}></span>&nbsp;사용자는 'Add Database' 버튼을 클릭하여 새로운 상품을 DB에 추가할 수 있습니다.<br/>
                        <span className={styles.bigBullet}></span>&nbsp;WEB 서버에서 '상품 추가' 버튼을 클릭하면, 입력된 정보가 에코(Echo) 애플리케이션을 통해 DB 서버에 추가됩니다.<br/>
                    </small>

                    {/* 'Add Database' 버튼. styles.addDatabaseBtn는 해당 버튼의 스타일을 지정하는 클래스명입니다. */}
                    <button className={styles.add_database_btn} onClick={openAddProductWindow}>
                        <span className={styles.plus_circle}>
                            <span className={styles.plus}></span>
                        </span>
                        Add Database
                    </button>

                    {/* 제품 목록과 설명 표시 영역 */}
                    <div className={styles.pro_container}>
                        <div className={styles.pro_left_box_container}>
                            <div className={styles.pro_left_box}>
                                {/* ProductList 컴포넌트 사용, 제품 선택 시 ID 상태 업데이트 */}
                                <ProductList onSelectProduct={setSelectedProductId}/>
                            </div>
                        </div>

                        <div className={styles.pro_right_box_container}>
                            <div className={styles.pro_right_box}>
                                {/* ProductDescription 컴포넌트 사용, 선택된 제품 ID를 기반으로 설명 표시 */}
                                <ProductDescription productId={selectedProductId}/>
                            </div>
                        </div>
                    </div>
                </div>
                <nav id="step5"><br/>
                <br/>    
                </nav>
                {/* 서비스 상태 확인 섹션 div 닫기 */}
                <div className={styles.section}>
                    <p className={`${styles.step_left} ${selectedStep === 'step5' ? styles.shineText : ''}`}>
                        <span className={styles.serviceCheckMark}>&#10003;</span>&nbsp;step5</p>
                    <p className={styles.serviceDescription}>
                            <span className={styles.serviceCheckMark}>&#10003;</span>
                            &nbsp;각 서버의 CPU,메모리 사용량을 확인하고 과부하 테스트를 통해 오토스케일링 여부를 확인합니다.</p><br/>
                        <small className={styles.stickyNote}>
                            <span className={styles.bigBullet}></span>&nbsp;'스트레스 툴 설치' 버튼을 클릭하여 웹 서버에 스트레스 테스트 도구를 설치합니다.<br/>
                            <span className={styles.bigBullet}></span>&nbsp;'과부하 테스트 시작' 버튼을 클릭하여 웹 서버에 CPU 과부하를 유발합니다.<br/>
                            <span className={styles.bigBullet}></span>&nbsp;kt cloud 콘솔 Watch 서비스에 접속하여 CPU 사용률을 확인합니다.<br/>
                            <span className={styles.bigBullet}></span>&nbsp;설정한 트리거에 의해 오토스케일링이 작동되는지 콘솔을 통해 확인합니다.<br/>
                        </small>
                    <div className={styles.serverStatusContainer}>
                        <div className={styles.serverBox}>
                            {isLoading ? <div className={styles.loader}>Loading...</div> : null}
                            <h3 className={styles.serverBoxTitle}>WEB 서버 상태</h3>
                            <div className={styles.status_and_button}>
                                <div className={styles.status}><ServerStatusBox serverType="WEB"/></div>
                                <button className={styles.installStressTool} onClick={installStressTool}>스트레스 툴 설치</button></div>
                            <br/>
                            <button className={styles.serverBoxButton} onClick={startWebStressTest}>WEB 서버 과부하 테스트 시작</button>
                            
                        </div>
                        <div className={styles.serverBox}>
                            <h3 className={styles.serverBoxTitle}>WAS 서버 상태</h3>
                            <ServerStatusBox serverType="WAS"/>
                        </div>
                    </div>
                </div>
                <nav id="step4"><br/>
                <br/>
                </nav>
                <div className={styles.section}>
                    <p className={`${styles.step_left} ${selectedStep === 'step4' ? styles.shineText : ''}`}>
                            <span className={styles.serviceCheckMark}>&#10003;</span>&nbsp;step4</p>
                        <p className={styles.serviceDescription}>
                                <span className={styles.serviceCheckMark}>&#10003;</span>
                                &nbsp;웹서버에 접속한 사용자들의 로그를 기록합니다.(WEB 서버)</p><br/>
                            <small className={styles.stickyNote}>
                                <span className={styles.bigBullet}></span>&nbsp;각각의 웹 서버는 접속한 사용자들의 접속 로그를 로컬 디렉토리(/f1/logs/access.log)에 기록합니다.<br/>
                                <span className={styles.bigBullet}></span>&nbsp;여러 대의 웹 서버에서 기록한 로그 데이터를 NAS(Network Attached Storage)에 취합하기 위해 데이터 수집 도구를 설치합니다.<br/>
                                <span className={styles.bigBullet}></span>&nbsp;데이터 수집 도구는 각 웹 서버에서 발생하는 접속 로그를 즉시 버퍼 파일에 저장합니다.<br/>
                                <span className={styles.bigBullet}></span>&nbsp;데이터 수집 도구는 버퍼 파일을 NAS 디렉토리(/n1/logs/all)에 취합하여 저장합니다. (15초마다)<br/>
                                <span className={styles.bigBullet}></span>&nbsp;취합된 파일은 '/n1/logs/all/all-access-YYMMDD' 형식으로 하루에 1개씩 생성되어 NAS에 보관됩니다.<br/>
                                <span className={styles.bigBullet}></span>&nbsp;어플리케이션은 사용자가 접속한 당일에 해당하는 취합 파일(/n1/logs/all/all-access-YYMMDD.log)만을 로그 데이터 영역에 표시합니다.<br/>
                                
                                <p>이는 HA(High Availability)와 오토스케일링 구성 시에도 NAS에 통합하여 기록함으로써 로그를 효과적으로 관리하고 분석하는
                            데 도움이 됩니다.</p>
                            </small>
                
                    <div className={styles.logDataDescriptionTable}>
                    <p>웹서버 접속 로그 (로그 경로: /n1/logs/all/all-access-YYMMDD.log)</p>
                    </div>
                    <div className={styles.logdata}>
                    <Fetch_web_LogContent />
                    </div>
                </div>

                <nav id="step3"><br/>
                <br/>
                </nav>
                <div className={styles.section}>
                    <p className={`${styles.step_left} ${selectedStep === 'step3' ? styles.shineText : ''}`}>
                            <span className={styles.serviceCheckMark}>&#10003;</span>&nbsp;step3</p>
                        <p className={styles.serviceDescription}>
                                <span className={styles.serviceCheckMark}>&#10003;</span>
                                &nbsp;어플리케이션의 로그를 기록합니다.(WAS 서버)</p><br/>
                            <small className={styles.stickyNote}>
                                <span className={styles.bigBullet}></span>&nbsp;WAS 서버의 어플리케이션 로그는 추가 Disk를 생성 및 연결(/waslog)하여 추가 볼륨 내 로그경로(/waslog/app.log)에 기록됩니다.<br/>
                                <span className={styles.bigBullet}></span>&nbsp;사용자는 필요에 따라 추가 볼륨 Size를 변경하여 로그 파일의 크기 변화에 대응합니다.<br/>
                                <span className={styles.bigBullet}></span>&nbsp;어플리케이션은 기록된 어플리케이션 로그 데이터를 웹소켓을 통해 즉시 로그 데이터 영역에 표시합니다.<br/>
                                <span className={styles.bigBullet}></span>&nbsp;추가 Disk를 사용하면 어플리케이션 로그 파일을 보다 안전하게 보관하고, 크기가 증가해도 유연하게 대처할 수 있습니다.<br/>
                                <span className={styles.bigBullet}></span>&nbsp;Size변경 기능을 통해 디스크 공간을 유연하게 확장 할 수 있으며, 이를 통해 로그의 양이 증가해도 데이터의 안정성과 성능을 유지할 수 있습니다.<br/>
                                
                                <p>이러한 설정은 서버 용량의 동적인 조정이 필요한 상황에서도 로그 파일의 크기 변화에 신속하게 대응하여 시스템 안정성과 성능을 유지하면서
                            로그 데이터를 효율적으로 관리할 수 있도록 도와줍니다.</p>
                            </small>
                
                    <div className={styles.was_logDataDescriptionTable}>
                    <p>어플리케이션 로그 (로그 경로: /waslog/app.log)</p>
                    </div>
                    <div className={styles.logdata}>
                    <Fetch_was_LogContent />
                    </div><br/>
                </div>
            </div>
            {/* 오른쪽 영역 div 닫기 */}
        </div> // 전체 컨테이너 div 닫기
    );
}