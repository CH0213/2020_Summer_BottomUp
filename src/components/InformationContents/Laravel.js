import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Laravel extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Laravel");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Laravel" } />,
      <DescriptionItem informationTitle="Laravel 란? ">라라벨(Laravel)은 자유, 오픈 소스 PHP 웹 프레임워크의 하나이다.</DescriptionItem>,
      <DescriptionItem link="https://laravel.com/" />,
      <DescriptionItem informationTitle="Laravel 활용 분야">모델-뷰-컨트롤러(MVC) 아키텍처 패턴을 따라 웹 애플리케이션을 개발하기 위해 고안되었다.<br /> 라라벨의 기능들 중 일부는 모듈 방식의 패키징 시스템이며, 전용 의존성 관리자, 관계형 데이터베이스에 접근하는 각기 다른 방법, <br />소프트웨어 전개와 유지보수의 도움을 주는 유틸리티, 신택틱 슈거 지향이 포함된다.
      </DescriptionItem>,
      <DescriptionItem myNameIs={ "Laravel" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Laravel;