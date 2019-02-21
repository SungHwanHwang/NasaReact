import React, { Component } from 'react';
import ViewerTemplate from './components/viewerTemplate';
import SpaceNavigator from './components/spaceNavigator';
import Viewer from './components/viewer';

import * as api from './lib/api';

//   Test For Modified

class App extends Component {

  getAPOD = async (date) => {
    try {
      const response = await api.getAPOD(date);
      console.log(response);
    } catch (e) {
      // 오류가 났을 경우
      console.log(e);
    }
  }

  componentDidMount() {
    this.getAPOD();
  }

  render() {
    return (
      <ViewerTemplate  
        spaceNavigator={<SpaceNavigator/>}
        /*
        viewer={(<Viewer
          url="https://apod.nasa.gov/apod/image/1712/GeminidsYinHao1024.jpg"
          mediaType="image"
          />)}
          */
        viewer={(<Viewer 
          url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0"
          mediaType="video"
          />)}

          />
    );
  }
}

export default App;
