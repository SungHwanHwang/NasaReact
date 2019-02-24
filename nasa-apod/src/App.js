import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/spaceNavigator';
import Viewer from './components/viewer';

import * as api from './lib/api';

class App extends Component {

  //  render() 위는 초기 state 자리
  state = {
    loading: false,
    maxDate: null,
    date: null,
    url: null,
    mediaType: null
  }

  //  async/await
  getAPOD = async (date) => {
    
    //  loading중이라면 무시
    if(this.state.loading) return;

    this.setState({
      loading: true
    });

    try {
      //  console.log(response);
      const response = await api.getAPOD(date);
      
      //  response.date를 비구조화 할당
      //  새로운 이름 지어주기
      //  아래 형식에서만 ':' (비구조화할당이 진행되는 와중이라면)
      const { date: retrievedDate, url, media_type: mediaType } = response.data;

      if(!this.state.maxDate) {
        //  만약 maxDate 값이 존재하지 않으면 지급 받은 date로 지정
        this.setState({
          maxDate: retrievedDate
        })
      }

      this.setState({
        date: retrievedDate,
        mediaType,
        url
      });

    } catch(e) {
      console.log(e);
    }

    //  로딩 상태 종료
    this.setState({
      loading: false
    });
  }

  componentDidMount() {
    this.getAPOD();
  }

  render() {

    //  const 변수
    const { url, mediaType, loading } = this.state;

    return (
      <ViewerTemplate  
        spaceNavigator={<SpaceNavigator/>}
        /*
        viewer={(<Viewer
          url="https://apod.nasa.gov/apod/image/1712/GeminidsYinHao1024.jpg"
          mediaType="image"
          />)}
          */
         /*
         viewer={(<Viewer 
          url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0"
          mediaType="video"
          />)}
     */
          viewer = {(<Viewer
            url={url}
            mediaType={mediaType}
            loading={loading} />
          )}
          />
    );
  }
}

export default App;
