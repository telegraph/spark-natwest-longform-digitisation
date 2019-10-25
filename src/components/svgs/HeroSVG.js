import React, { useRef, useEffect } from 'react';
import { TimelineMax, Elastic, Power3, Linear, Back } from 'gsap';

import './style.scss';

export default function HeroSVG() {
  const poundSign = useRef(null);
  const wifi = useRef(null);
  const rightCloud = useRef(null);
  const leftCloud = useRef(null);
  const graph = useRef(null);
  const phone = useRef(null);
  const card = useRef(null);
  const tablet = useRef(null);
  const path1 = useRef(null);
  const path2 = useRef(null);

  useEffect(() => {
    const fadeIn = new TimelineMax({ paused: true });
    fadeIn
      .fromTo(phone.current, 0.6, { ease: Power3.easeOut, opacity: 0, x: -100 }, { opacity: 1, x: 0 }, 0.2)
      .fromTo(card.current, 0.6, { ease: Power3.easeOut, opacity: 0, x: 100 }, { opacity: 1, x: 0 }, 0.4)
      .fromTo(tablet.current, 0.6, { ease: Power3.easeOut, opacity: 0, x: -100, y: -100 }, { opacity: 1, x: 0, y: 0 }, 0.6)
      .fromTo(path1.current, 0.6, { ease: Power3.easeOut, opacity: 0 }, { opacity: 1 }, 0.8)
      .fromTo(path2.current, 0.6, { ease: Power3.easeOut, opacity: 0 }, { opacity: 1 }, 0.8)
      .fromTo(poundSign.current, 0.6, { ease: Power3.easeOut, opacity: 0 }, { opacity: 1 }, 1)
      .fromTo(graph.current, 2, { scale: 0, transformOrigin: '80px 78px' }, { scale: 1 }, 1);

    setTimeout(() => {
      fadeIn.play();
    }, 1500);

    const poundSignTL = new TimelineMax({ repeat: -1, yoyo: true });
    poundSignTL
      .to(poundSign.current, 2, { ease: Elastic.easeInOut.config(0.5, 0.3), x: 0, y: -20 }, 3);

    const rightCloudTL = new TimelineMax({ repeat: -1, yoyo: true });
    rightCloudTL
      .to(rightCloud.current, 6, { ease: Linear.easeInOut, x: 35, y: 22 }, 1);

    const leftCloudTL = new TimelineMax({ repeat: -1, yoyo: true });
    leftCloudTL
      .to(leftCloud.current, 7, { ease: Linear.easeInOut, x: 35, y: -22 }, 1);

    const wifiTL = new TimelineMax({ repeat: -1 });
    wifiTL
      .fromTo(wifi.current, 6, { ease: Back.easeInOut, opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <svg viewBox="0 0 528.06 565.78">
      <defs>
        <linearGradient
          id="prefix__linear-gradient"
          x1={459.41}
          x2={526.58}
          y1={96.99}
          y2={131.05}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f6f3f7" />
          <stop offset={1} stopColor="#77488a" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-2"
          x1={500.07}
          x2={532.76}
          y1={160.22}
          y2={176.8}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={13516.9}
          x2={13562.73}
          y1={129.56}
          y2={152.81}
          gradientTransform="matrix(-1 0 0 1 13563.7 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-4"
          x1={13544.64}
          x2={13566.95}
          y1={172.71}
          y2={184.02}
          gradientTransform="matrix(-1 0 0 1 13563.7 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-5"
          x1={309.64}
          x2={309.63}
          y1={401.33}
          y2={451.71}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f6f3f7" stopOpacity={0} />
          <stop offset={1} stopColor="#77488a" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-6"
          x1={293.77}
          x2={340.28}
          y1={379.12}
          y2={408.59}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-7"
          x1={12400.34}
          x2={12503.47}
          y1={478.26}
          y2={478.26}
          gradientTransform="matrix(-1 0 0 1 12794 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <clipPath id="prefix__clip-path">
          <path
            d="M310.4 483.4V482l43-24.8 48.2 27.4-47 27-44.2-28.2z"
            className="prefix__cls-1"
          />
        </clipPath>
        <clipPath id="prefix__clip-path-2">
          <path
            d="M368.3 494.1l9.2-5.4-13.4-7.7-9.3 5.3 13.4 7.8z"
            className="prefix__cls-1"
          />
        </clipPath>
        <style>
          {
          '.prefix__cls-1{fill:none}.prefix__cls-2{fill:#fff}.prefix__cls-3{fill:#4a6cb8}.prefix__cls-4{fill:#33c0c9}.prefix__cls-5{fill:#00b0bc}.prefix__cls-8{fill:#f8f4fa}.prefix__cls-11{fill:#26bcc6}.prefix__cls-18{fill:#f6f3f7}.prefix__cls-20{fill:#516db2}'
        }
        </style>
      </defs>
      <title>main</title>
      <g id="prefix__Layer_2" data-name="Layer 2">
        <g id="prefix__NatWest-longform_3-digitisation-desktop">
          <g id="path2" data-name="path2" ref={path2}>
            <path
              d="M261 484.9h2.9v.6H261z"
              className="prefix__cls-2"
              transform="rotate(-30.5 262.5 485.2)"
            />
            <path
              d="M241 498.2l-.3-.5 5.7-3.4.4.5zm10.2-6l-.3-.5 5.8-3.4.3.6zm-15 11.6l-3-1.8 3-1.7.3.6-2 1.1 2 1.2-.3.6zm96.6 58.2l-5-3 .3-.6 5 3zm-8.8-5.4l-5-3 .4-.5 5 3zm-8.8-5.3l-5-3 .4-.5 5 3zm-8.8-5.2l-4.9-3 .3-.6 5 3zm-8.7-5.3l-5-3 .3-.6 5 3zm-8.8-5.3l-5-3 .4-.6 4.9 3zm-8.8-5.3l-5-3 .4-.5 5 3zm-8.8-5.3l-5-3 .4-.5 5 3zm-8.8-5.3l-5-3 .4-.5 5 3zm-8.8-5.3l-4.9-3 .3-.5 5 3zm-8.7-5.2l-5-3 .3-.6 5 3zm94.2 56.7l-2.6-1.6.3-.5 2.3 1.3 2.3-1.3.3.6-2.6 1.5zm6.4-3.8l-.3-.5 5-2.8.3.5zm8.8-5l-.3-.5 5-2.8.3.6zm8.8-5l-.3-.5 5-2.8.3.5zm8.8-5l-.3-.5 5-2.8.2.6zm8.8-5l-.3-.5 5-2.8.2.5zm8.8-5l-.4-.5 5-2.8.3.6zm8.7-5l-.3-.5 5-2.8.3.5zm8.8-5l-.3-.5 5-2.8.3.6zm8.8-5l-.3-.5 5-2.8.3.5zm8.8-5l-.3-.5 5-2.8.2.6zm8.8-5l-.3-.5 5-2.8.2.6zm8.8-5l-.4-.5 5-2.8.3.6zm8.7-5l-.3-.5 5-2.8.3.6zm8.8-5l-.3-.5 5-2.8.3.6zm8.8-5l-.3-.5 5-2.8.3.6zm8.8-5.4l-.3-.6 2.3-1.3V482h.6v3l-2.6 1.6zm2.6-9.1h-.6v-5.7h.6zm0-10.2h-.6v-5.8h.6zm0-10.3h-.6v-5.8h.6zm0-10.3h-.6V441h.6zm0-10.2h-.6v-5.8h.6zm0-10.3h-.6v-5.8h.6zm0-10.2h-.6v-5.8h.6zm0-10.3h-.6V400h.6zm0-10.2h-.6v-5.8h.6zm0-10.3h-.6v-5.8h.6zm0-10.2h-.6v-5.8h.6zm0-10.4h-.6V362l-2.3-1.4.3-.6 2.6 1.6v3z"
              className="prefix__cls-2"
            />
            <path
              d="M471.2 354h.6v5.4h-.6z"
              className="prefix__cls-2"
              transform="rotate(-58.3 471.6 356.8)"
            />
            <path
              d="M464.2 351h.6v2.8h-.6z"
              className="prefix__cls-2"
              transform="rotate(-58.3 464.5 352.4)"
            />
          </g>
          <path
            d="M308.2 356.8l9.4-36.7 34.1 21.4 4.6 44.4-38 22V403v1.6l-10-47.9z"
            className="prefix__cls-3"
          />
          <path
            d="M348.8 340l4.6 44.4-35.1 20.3-47.9-28.8 34.5-20.3 9.3-36.7 34.6 21.2z"
            className="prefix__cls-4"
          />
          <path
            d="M314.2 318.9l34.6 21.2 4.6 44.3-48.5-28.8 9.3-36.7zm4.1 85.8v3.2L270.4 379v-3l47.9 28.8z"
            className="prefix__cls-5"
          />
          <path
            d="M195.7 54.4l254.9 147.2 7.9-4.5-255-147.2-7.8 4.5z"
            className="prefix__cls-4"
          />
          <path
            d="M195.7 266l254.9 147.3V201.6l-255-147.2v211.7z"
            className="prefix__cls-5"
          />
          <path
            d="M458.5 197l-7.9 4.6v211.7l7.9-4.6V197.1z"
            className="prefix__cls-3"
          />
          <path
            d="M203.7 238.5l238.8 137.9V209.2l-238.8-138v167.3z"
            className="prefix__cls-2"
          />
          <g id="wifi" data-name="wifi" ref={wifi}>
            <path
              d="M330 277.4a52.5 52.5 0 00-16.2-15.8c-5.3-3-10.2-4-14-3l-2.8-9.2c6.5-2 14-.7 21.7 3.8a61.4 61.4 0 0119.3 18.7zm26.1-14.4a101.1 101.1 0 00-42.9-38 44 44 0 00-26.6-3.4l-2.8-9.3c6.7-2 18.9-2.1 33 3.7 17.6 7.2 33.5 21.2 47.3 41.5zm23.1-19.9c-20.3-33.9-46-49.6-64-56.8-11.7-4.7-33.4-10.2-46-6.5l-2.7-9.2c9.7-3 30.3-2.1 52.3 6.7a142 142 0 0168.7 60.8z"
              className="prefix__cls-5"
            />
          </g>
          <g id="right-cloud" data-name="right-cloud" ref={rightCloud}>
            <path
              d="M505 127.3l-15.3-8.8v-7.8c0-22-15.5-48.8-34.6-59.9-9.6-5.5-18.4-6-24.7-2.4L409.5 60l11.4 3.7a39.4 39.4 0 00-.6 6.9v9L408.7 73c-9-5.1-16.6-4.7-22.7-1.3L367.2 82 507 188.7l21-11.7v-1.4c0-19.2-6.4-38.5-23.2-48.2z"
              className="prefix__cls-2"
            />
            <path
              d="M442 103.2l26.4 27.2 21.3-12v-7.7c0-10.1-3.3-21.3-8.8-31.5z"
              fill="url(#prefix__linear-gradient)"
            />
            <path
              d="M528 176.9v-1.4c0-10.2-1.7-20.4-6-29.2l-25.3 14.4-3 18 13.1 10z"
              fill="url(#prefix__linear-gradient-2)"
            />
            <path
              d="M433.9 62.7a76.2 76.2 0 0134.6 59.9v7.8l15.2 8.8c16.8 9.6 23.2 29 23.2 48.2v1.3L357 102.2c0-19.2 13.7-27 30.4-17.3l11.6 6.7v-9c.1-22 15.7-31 34.9-20z"
              className="prefix__cls-8"
            />
          </g>
          <g id="left-cloud" data-name="left-cloud" ref={leftCloud}>
            <path
              d="M15.8 150.3l10.4-6v-5.4a52 52 0 0123.6-40.8c6.6-3.8 12.5-4.2 16.8-1.7l14.3 8L73 107a27.2 27.2 0 01.4 4.6v6.3l8-4.6c6.1-3.6 11.3-3.3 15.4-1 3.3 1.7 12.9 7.1 12.9 7.1l-95.3 72.8L0 184v-1c0-13.1 4.4-26.3 15.8-32.8z"
              className="prefix__cls-2"
            />
            <path
              d="M58.7 133.8l-18 18.5-14.5-8v-5.4c0-6.9 2.3-14.6 6-21.5z"
              fill="url(#prefix__linear-gradient-3)"
            />
            <path
              d="M0 184v-.9a46.5 46.5 0 014-19.9l17.4 9.8 2 12.3-9 6.8z"
              fill="url(#prefix__linear-gradient-4)"
            />
            <path
              d="M64.3 106.2A52 52 0 0040.6 147v5.3l-10.5 6c-11.4 6.6-15.8 19.8-15.7 32.9v1l102.2-59c0-13.2-9.3-18.5-20.8-11.9l-8 4.6v-6.2c.1-15-10.6-21-23.7-13.5z"
              className="prefix__cls-8"
            />
          </g>
          <g id="phone" data-name="phone" ref={phone}>
            <path
              d="M252.6 471.2v-5l10-2 68.7-39.6a7.1 7.1 0 016.4 0l28.8 16.8 5.2-1v5a2.3 2.3 0 01-1.3 2L293 492a7.2 7.2 0 01-6.5 0L254 473a2.2 2.2 0 01-1.3-2z"
              className="prefix__cls-3"
            />
            <path
              d="M289.7 448.7v44.1a6.5 6.5 0 01-3.2-.7L254 473a2.2 2.2 0 01-1.4-2v-4.9l10.2-2z"
              className="prefix__cls-5"
            />
            <path
              d="M253.9 464.3c-1.8 1-1.8 2.7 0 3.8l32.6 19a7.1 7.1 0 006.5 0l77.4-44.7c1.8-1 1.8-2.7 0-3.8l-32.7-19a7.2 7.2 0 00-6.4 0z"
              className="prefix__cls-11"
            />
            <path
              d="M264.2 461.3l34 19.8 64.7-37.3-34-19.8-64.7 37.3zm12.5 16.1a6.8 6.8 0 01-3.4-.9 2.3 2.3 0 010-4.3 7.3 7.3 0 016.8 0 2.3 2.3 0 010 4.3 6.9 6.9 0 01-3.4.9zm0-5.2a6.1 6.1 0 00-3 .7 1.9 1.9 0 00-1.1 1.5 1.9 1.9 0 001 1.4 6.5 6.5 0 006 0 1.9 1.9 0 001.1-1.5 1.9 1.9 0 00-1-1.4 6.1 6.1 0 00-3-.8z"
              className="prefix__cls-2"
            />
            <path
              d="M349.9 429.8a.5.5 0 000 1 2 2 0 001.7 0c.5-.3.5-.7 0-1a1.9 1.9 0 00-1.7 0z"
              fill="#42145f"
            />
            <path
              d="M338 384.8l-56.8 21s16 31.2 25.8 47.5a5 5 0 001.8 2 10.4 10.4 0 009.4 0 4.3 4.3 0 002-2.8c8-26.8 17.9-67.7 17.9-67.7z"
              opacity={0.6}
              fill="url(#prefix__linear-gradient-5)"
            />
          </g>
          <path
            d="M266.4 477.6v.8a.3.3 0 00.1.3l7.2 4.2a.1.1 0 00.2-.2v-.8a.2.2 0 000-.2l-7.3-4.2a.1.1 0 00-.2.1z"
            fill="#490b63"
          />
          <g id="pound-sign" data-name="pound-sign" ref={poundSign}>
            <path
              d="M316.7 388.7a20 20 0 01-5.7 5.3 14.7 14.7 0 01-5.6 1.9 14.5 14.5 0 00-5.5 1.9l-.9.6a32.5 32.5 0 002-8.8v-2.5l8.8-6.6-2.4-1.3-6.6 3.9a14.6 14.6 0 00-.8-3.3 9.6 9.6 0 01.3-7.3 11.1 11.1 0 014.7-5.1c2.2-1.3 4-1.6 5-.9 1.7 1.1 1.5 4.4 1.5 4.4l2.3 1.4 1.3-3.1a11.3 11.3 0 00-1-5.5l1-.3-2.4-1.4c-1.9-1.1-4.4-.8-7.7 1.1a18.8 18.8 0 00-7.7 8.7c-1.8 4-2 8.4-.8 11.4a10.7 10.7 0 01.5 2l-3.6 2v4.3l4-2.3-.1 2a25.7 25.7 0 01-5 13.3l-1 1.3 2 2.3.9-1.1a24.8 24.8 0 012.4-2.6 19.1 19.1 0 013.4-2.4 11 11 0 014-1.4 18.4 18.4 0 007-2.4 20.5 20.5 0 002.3-1.5 27.2 27.2 0 004.2-4l1.2 1.6.4-4.2z"
              className="prefix__cls-2"
            />
            <path
              d="M299 377.8l-3-1.8a12.8 12.8 0 00.6 7.3 10.7 10.7 0 01.4 1.9l2.4 1.3zm9.7-11.7a2.3 2.3 0 011.3.4c1.6 1.1 1.5 4.4 1.5 4.4l2.3 1.4 1.1-6v-.3l-6.5-.4z"
              className="prefix__cls-8"
            />
            <path
              d="M307.3 364.5c3.3-2 5.9-2.3 7.7-1 2.8 1.8 2.5 6.8 2.5 7l-3.7 1.8s.2-3.4-1.5-4.5c-1-.7-2.7-.4-5 .9a11.2 11.2 0 00-4.7 5.1 9.5 9.5 0 00-.4 7.3 15 15 0 01.8 3.3l6.7-3.9v4.2l-6.4 3.7v2.5a32 32 0 01-2 8.8l.9-.6a14.5 14.5 0 015.4-2 14.8 14.8 0 005.7-1.8 20.5 20.5 0 005.7-5.3l2 2.5a29.5 29.5 0 01-5.5 5.5 22 22 0 01-2.2 1.5 18.4 18.4 0 01-7 2.4 10.8 10.8 0 00-4.1 1.4 18.3 18.3 0 00-3.3 2.5 27.1 27.1 0 00-2.4 2.5l-.9 1.2-2-2.3 1-1.3a25.6 25.6 0 005-13.3l.1-2-4 2.2v-4.2l3.7-2a11.3 11.3 0 00-.5-2c-1.3-3-1-7.4.7-11.4a19 19 0 017.7-8.7z"
              fill="url(#prefix__linear-gradient-6)"
            />

            <path
              d="M293.4 387.3l2.3 1.3v4.2l-2.3-1.3v-4.2zm.3 19.9l-2.4-1.3 2 2.3 2.4 1.3-2-2.3z"
              className="prefix__cls-8"
            />
          </g>
          <g clipPath="url(#prefix__clip-path)">
            <g id="card" data-name="card" ref={card}>
              <path
                d="M291.4 470.6l38-22a2.1 2.1 0 012 0l61.5 35.8.8-.4v1.2a.7.7 0 01-.4.5L354.9 508a2.1 2.1 0 01-2 0l-62-36a.7.7 0 01-.4-.5v-1.2z"
                fill="url(#prefix__linear-gradient-7)"
              />
              <path
                d="M393.7 484v1.2a.7.7 0 01-.4.5L354.9 508a2 2 0 01-1 .2v-32.7h23.5l15.5 9z"
                className="prefix__cls-18"
              />
              <path
                d="M291 469.6a.6.6 0 000 1.1l62 36a2.1 2.1 0 002 0l38.3-22.1c.6-.3.6-.8 0-1.2l-62-36a2.1 2.1 0 00-1.9 0z"
                className="prefix__cls-2"
              />
              <path
                d="M346.6 467.2l24.1 14 4.5-2.5-24.2-14-4.4 2.5zm-40.3-1.4l55.5 32.1 4.4-2.5-55.5-32.2-4.4 2.6z"
                className="prefix__cls-18"
              />
              <path
                d="M305 473.6a2.4 2.4 0 001.4 1.8 7.3 7.3 0 006.5 0c1.8-1 1.8-2.7 0-3.8a6.7 6.7 0 00-3.1-.8 2.3 2.3 0 01-1.4 2 6.8 6.8 0 01-3.4.8z"
                className="prefix__cls-20"
              />
              <path
                d="M301.9 469c-1.8 1-1.8 2.8 0 3.8a6.5 6.5 0 003.1.8 6.8 6.8 0 003.4-.8 2.3 2.3 0 001.4-2 2.3 2.3 0 00-1.3-1.8 7.2 7.2 0 00-6.6 0z"
                className="prefix__cls-5"
              />
              <path
                d="M368.3 494.1l9.2-5.4-13.4-7.7-9.3 5.3 13.4 7.8z"
                className="prefix__cls-4"
              />
              <g clipPath="url(#prefix__clip-path-2)">
                <path
                  d="M362.7 488.7H375v1h-12.4z"
                  className="prefix__cls-5"
                  transform="rotate(-30.2 372 492.6)"
                />
                <path
                  d="M357.6 485.3H370v1h-12.4z"
                  className="prefix__cls-5"
                  transform="matrix(.86 -.5 .5 .86 -195.2 249.4)"
                />
                <path
                  d="M372.9 486.6h1v5h-1z"
                  className="prefix__cls-5"
                  transform="rotate(-59.8 373.3 489)"
                />
                <path
                  d="M370.6 487.9h.9v5h-1z"
                  className="prefix__cls-5"
                  transform="rotate(-59.8 371 490.3)"
                />
                <path
                  d="M368.4 489.2h.9v5h-1z"
                  className="prefix__cls-5"
                  transform="rotate(-59.8 368.8 491.7)"
                />
                <path
                  d="M363.1 481h1v4.9h-1z"
                  className="prefix__cls-5"
                  transform="rotate(-59.8 363.6 483.4)"
                />
                <path
                  d="M360.8 482.2h1v5h-1z"
                  className="prefix__cls-5"
                  transform="rotate(-59.8 361.3 484.7)"
                />
                <path
                  d="M358.6 483.5h1v5h-1z"
                  className="prefix__cls-5"
                  transform="rotate(-59.8 359 486)"
                />
              </g>
              <path
                d="M327.3 464.3l-1-.3c.8-2.7 5-3 5-3l.1 1s-3.5.2-4.1 2.3z"
                className="prefix__cls-2"
              />
              <path
                d="M324.3 464l-.9-.1c.9-4.3 7.4-4.6 7.7-4.6v1c-.1 0-6 .2-6.8 3.8z"
                className="prefix__cls-2"
              />
              <path
                d="M321.6 463.9l-1-.2c1.3-6 9.8-6.3 10.1-6.3v1s-8 .3-9.1 5.5z"
                className="prefix__cls-2"
              />
              <path
                d="M318.8 463.7l-1-.2c2-7.8 12.3-8 12.4-8v1c-.1 0-9.6.1-11.4 7.2z"
                className="prefix__cls-2"
              />
              <path
                d="M342.1 473.4h1v35.8h-1z"
                className="prefix__cls-3"
                transform="rotate(-59.9 342.6 491.3)"
              />
              <path
                d="M343 479.2h1v29.6h-1z"
                className="prefix__cls-3"
                transform="rotate(-59.9 343.6 494)"
              />
              <path
                d="M376 481.8c-1.8 1-1.8 2.7 0 3.7a6.5 6.5 0 003.1.8 6.7 6.7 0 003.5-.7 2.3 2.3 0 001.3-2 2.4 2.4 0 00-1.3-1.9 7.2 7.2 0 00-6.6 0z"
                className="prefix__cls-20"
              />
            </g>
          </g>
          <g id="path1" data-name="path1" ref={path1}>
            <path
              d="M162.6 277.2h.6v2.9h-.6zm.6-4.3h-.6v-5.6h.6zm0-10h-.6v-5.6h.6zm0-10h-.6v-5.6h.6zm0-10h-.6v-5.6h.6zm0-10h-.6v-5.6h.6zm0-10h-.6v-5.6h.6zm0-10h-.6v-5.7h.6zm0-10h-.6v-5.7h.6zm0-10h-.6v-5.5h.6zm0-10h-.6v-5.7h.6zm0-10h-.6v-5.7h.6zm0-10h-.6v-5.7h.6zm0-10h-.6v-5.7h.6zm0-10h-.6v-5.4h.6zm0-10h-.6v-5.6h.6zm0-10h-.6v-5.6h.6zm0-10h-.6v-5.6h.6zm0-10h-.6v-5.3h.6zm0-10h-.6v-5.3h.6zm0-10h-.6v-5.3h.6zm0-10h-.6v-5.3h.6zm0-10h-.6v-5.2h.6zm0-10h-.6v-5.2h.6zm0-10h-.6v-5.2h.6zm0-10h-.6v-5.2h.6zm0-10h-.6v-5.2h.6zm0-10h-.6V7.7h.6zm0-9.5h-.6V0l3 1.7-.4.6-2-1.2v2.3zm121.2 68.1l-4.7-2.7.3-.6 4.8 2.8zm-8.5-5l-4.8-2.7.3-.6 4.8 2.8zm-8.5-4.9l-4.8-2.8.3-.5 4.8 2.8zm-8.5-4.9l-4.8-2.8.3-.5 4.8 2.8zm-8.5-5l-4.8-2.7.3-.6 4.8 2.8zm-8.5-5L237 44l.3-.6 4.8 2.8zm-8.6-5l-4.7-2.7.3-.6 4.8 2.8zm-8.5-5l-4.8-2.6.3-.5 4.8 2.8zm-8.5-4.7l-4.8-2.8.3-.5 4.8 2.7zm-8.5-5l-4.8-2.8.3-.5 4.8 2.7zm-8.5-5l-4.8-2.7.3-.6 4.8 2.8zm-8.5-4.9l-4.8-2.8.3-.5 4.8 2.7zm-8.6-5l-4.7-2.8.3-.5 4.8 2.8zm-8.5-4.9L169 4.4l.3-.5 4.8 2.8zm117.4 70.5h-.6v-2.6l-2.3-1.4.3-.5 2.6 1.5v3zm-.6 3.2h.6v4h-.6zm0 7.2h.6V91h-.6z"
              className="prefix__cls-2"
            />
          </g>
          <g id="tablet" data-name="tablet" ref={tablet}>
            <path
              d="M260.4 360v-2.7l-12.1-2.4-147.9-85.2a8.5 8.5 0 00-7.7 0L11 317l-6.2-1v3a2.8 2.8 0 001.6 2.3l158.4 91.3a8.5 8.5 0 007.8 0l86.2-50.1a2.7 2.7 0 001.6-2.3z"
              className="prefix__cls-5"
            />
            <path
              d="M172.6 412.5l86.2-50.1a2.7 2.7 0 001.6-2.3v-2.8l-12.1-2.4-18.8-10.8-60.7 34v35.4a7.9 7.9 0 003.8-1z"
              className="prefix__cls-3"
            />
            <path
              d="M258.8 355c2.1 1.2 2.2 3.3 0 4.5l-86.3 50.1a8.5 8.5 0 01-7.7 0L6.4 318.2c-2.1-1.2-2.1-3.2 0-4.4l86.3-50.2a8.5 8.5 0 017.8 0z"
              className="prefix__cls-11"
            />
            <path
              d="M246.5 351.4l-88 51-143-82.5 87.9-51 143 82.5zM210.9 383a8 8 0 01-4-.9 2.6 2.6 0 010-4.9 8.7 8.7 0 018 0 2.6 2.6 0 010 4.9 8 8 0 01-4 1zm0-6.2a7.4 7.4 0 00-3.7.9 2.4 2.4 0 00-1.4 2 2.5 2.5 0 001.4 2 8.1 8.1 0 007.4 0 2.4 2.4 0 001.4-2 2.4 2.4 0 00-1.4-2 7.4 7.4 0 00-3.7-.9z"
              className="prefix__cls-2"
            />
            <path d="M53.9 292.2c.7.4.7 1.1 0 1.6a3 3 0 01-2.8 0 .8.8 0 010-1.6 3 3 0 012.8 0z" />
            <path
              d="M146 387.4L39.9 324l.3-.5 106 63.2 75-42 .3.5-75.3 42.2z"
              className="prefix__cls-4"
            />
          </g>
          <g id="graph" data-name="graph" ref={graph}>
            <path
              d="M201.5 355.9l10.6-6L111 289.7l-10.7 6 101.2 60.2zm-16.5 9.2l10.7-6-16-9.5-10.7 6 16 9.5zm-16.3 9.2l10.6-6-58.5-34.8-10.7 6 58.6 34.8zm-16.4 9.3l10.6-6-38.3-22.8-10.7 6 38.4 22.8z"
              className="prefix__cls-3"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
