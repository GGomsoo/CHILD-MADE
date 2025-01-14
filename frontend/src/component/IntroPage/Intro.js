import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import "./Intro.css";
import styles from "./Intro.module.css";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import BGM from "../../assets/backMusic04.mp3";

function Intro({ setShowHeader }) {
    useEffect(() => {
        setShowHeader(false);
    });

    // useEffect(() => {
    //     try {
    //         const audio = new Audio(BGM); // 배경 음악 생성
    //         audio.loop = true; // 반복 재생 설정
    //         audio.volume = 0.3; // 볼륨 설정
    //         audio.play(); // 배경 음악 재생
    //         return () => {
    //             audio.pause(); // 컴포넌트 언마운트 시 음악 일시 중지
    //         };
    //     } catch (error) {
    //         console.log('Auto-play failed:', error.message);
    //     }
    // }, []);
    
    return (
        <div className="Intro">
            <Swiper
                // className="Intro"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                <SwiperSlide>
                    <div>
                        <div className={styles.Info}>
                            <h1 className={styles.title}>
                                우리 아이가<br></br>만들었어요
                            </h1>
                            <p className={styles.subTitle}>
                                이 서비스는 아이들이 화상으로 실시간 창작 활동을
                                즐길 수 있는 창의적인 플랫폼으로, 동화 이야기
                                탐험, 미니 연극, 영상책 제작 등 다양한 창작
                                경험을 통합합니다.
                            </p>
                            <div className={styles.buttonGroup}>
                                <Link
                                    to={"/login"}
                                    className={styles.buttonLoginLink}
                                >
                                    <div className={styles.buttonLogin}>
                                        <p className={styles.buttonLoginText}>
                                            로그인
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.BackgroundBlur}></div>
                        <img
                            src="imgs/IntroImg1S.png"
                            style={{
                                width: "100vw",
                                height: "100vh",
                                objectFit: "cover",
                            }}
                        ></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className={styles.Info}>
                            <h1 className={styles.title}>
                                화상 동화 스토리 탐험
                            </h1>
                            <p className={styles.subTitle}>
                                아이들이 화상으로 실시간 창작 활동을 즐길 수
                                있는 창의적인 플랫폼으로, 동화 이야기 탐험, 미니
                                연극, 영상책 제작 등 다양한 창작 경험을
                                통합합니다.
                            </p>
                            <div className={styles.buttonGroup}>
                                <Link
                                    to={"/login"}
                                    className={styles.buttonLoginLink}
                                >
                                    <div className={styles.buttonLogin}>
                                        <p className={styles.buttonLoginText}>
                                            로그인
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.BackgroundBlur}></div>
                        <img
                            src="imgs/IntroImg2S.png"
                            style={{
                                width: "100vw",
                                height: "100vh",
                                objectFit: "cover",
                            }}
                        ></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className={styles.Info}>
                            <h1 className={styles.title}>영상 기록 동화놀이</h1>
                            <p className={styles.subTitle}>
                                아이들이 화상통화를 통해 동화 이야기를 만들고,
                                그 과정을 녹화하여 나중에 다운로드할 수 있는
                                기능을 제공합니다.
                            </p>
                            <div className={styles.buttonGroup}>
                                <Link
                                    to={"/login"}
                                    className={styles.buttonLoginLink}
                                >
                                    <div className={styles.buttonLogin}>
                                        <p className={styles.buttonLoginText}>
                                            로그인
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.BackgroundBlur}></div>
                        <img
                            src="imgs/IntroImg3S.png"
                            style={{
                                width: "100vw",
                                height: "100vh",
                                objectFit: "cover",
                            }}
                        ></img>
                    </div>
                </SwiperSlide>
            </Swiper>
            <audio id="bgm" src="../../assets/backMusic01.mp3"></audio> 
        </div>
    );
}

export default Intro;
