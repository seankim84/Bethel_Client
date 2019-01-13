import { Icon } from 'antd';
import React from 'react';
import './Kakao.css';

const Kakao:React.SFC = () => {
    return <div className="Kakao">
        <div className="KakaoHeader">
          <h2>Bethel Family</h2>
        </div>
        <div className="KakaoIntro">
          <div className="KakaoTitle">
            <h2>베델교회 가족등록</h2>
            <p>
              "사랑은 오래 참고 사랑은 온유하며 시기하지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며 무례히 행하지 아니하며<br/> 자기의 유익을 구하지 아니하며 성내지 아니하며 악한 것을 생각하지 아니하며 불의를 기뻐하지 아니하며 진리와 함께 기뻐하고<br /> 모든 것을 참으며 모든 것을 믿으며 모든 것을 바라며 모든 것을 견디느니라"(고전 13:4-7)
            </p>
          </div>
          <div className="KakaoExplain">
            <h2>훈련 과정</h2>
            <p><strong>"내게 주신 영광을 내가 그들에게 주었사오니 이는 우리가 하나가 된 것 같이 그들도 하나가 되게 하려 함이니이다" (요 17:22)</strong></p>
            <div className="KakaoBox">
              <div className="KakaoInner">
                <Icon style={{fontSize:"5rem"}}type="user-add" />
                <h3>새가족 양성</h3>
                <p><strong>그리스도의 5확신 과정(5주 과정)</strong></p>
                <p>이수 후 교회 멤버쉽 자격 수여</p>
              </div>
              <div className="KakaoInner">
                <Icon style={{fontSize:"5rem"}}type="book" />
                <h3>성경공부</h3>
                <p><strong>(묵상/성경 통독/구약과 신약의 파노라마 등)</strong></p>
                <p>이수 후 교회 교사 섬김이 자격 수여</p>
              </div>
              <div className="KakaoInner">
                <Icon style={{fontSize:"5rem"}}type="global" />
                <h3>지도자 양성</h3>
                <p><strong>(CLD 평신도 신학과정)</strong></p>
                <p>이수 후 목회자 및 전문 사역자 자격 수여</p>
              </div>
            </div>
          </div>
        </div>
      </div>;
}

export default Kakao;