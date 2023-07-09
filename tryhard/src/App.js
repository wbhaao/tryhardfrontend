import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  
  function Header(props) {
    return (
      <span >
        <h1>TRYHARD</h1>
        <Button/>
        <Button/>
        <span className='profile'>
          <div className='profileImage'></div>
          <div className='profileInfo'>
            <div className='profileJob'>STUDENT</div>
            <div className='profileName'>햄토리</div>
          </div>
        </span>
      </span>
    );
  }

  function Button(props) {
    return (
      <button className='examBTN'>시험 생성</button>
    )
  }

  function Banner(props) {
    return (
      <div className='banner'>
        <h1 className='bannerTitle'>최근 시험</h1>
        <p className='bannerDes'>내가 최근에 시험 친 시험지 목록</p>
      </div>
    )
  }
  function ExamBox(props) {
    return (
      <div className='examBar'>
        <span className='examtype'>단어</span>
        <span className='examName'>단어 시험</span>
        <span className='examNumber'>10 문제</span>
        <span className='examScore'>100점</span>
      </div>
    )
  }

  return (
    <div className='container'>
      <Header/>
      <Banner/>
      <div className='detail'>
        {/* <div className='ad'></div> */}
        <div className='examArea'>
          <ExamBox/>
          <ExamBox/>
        </div>
      </div>
    </div>
  );
}

export default App;
