'use client';
// import { useEffect } from 'react';
// import loadingPace from '../../common/loadingPace';
// import { Spin } from 'antd';
import styles from '../../styles/Loader.module.scss';

function LoadingScreen() {
  // useEffect(() => {
  //   // const handlePace = () => {
  //   if (typeof Pace !== 'undefined') loadingPace();
  //   // };W
  //   // setTimeout(handlePace, 1000);
  //   // return () => clearTimeout(handlePace);
  // });

  return (
    <div className="hideX">
      <div className="loading">
        {/* <span>L</span>
				<span>o</span>
				<span>a</span>
				<span>d</span>
				<span>i</span>
				<span>n</span>
				<span>g</span> */}
      </div>

      <div
        id="preloader"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {' '}
        <div className={styles.loader_text}>MVP AGENCY</div>
        {/* <Spin style={{ zIndex: '999' }} size="large" /> */}
      </div>
    </div>
  );
}

export default LoadingScreen;
