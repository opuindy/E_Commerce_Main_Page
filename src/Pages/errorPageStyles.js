import styled from 'styled-components';

export const ErrorContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    width: 100%;
    max-width: 1100px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      margin-right: auto;
      margin-bottom: 3em;
      text-decoration: none;
    }
  }
  .cls-1 {
    fill: #ffc541;
  }

  .cls-2 {
    fill: #4e4066;
  }

  .cls-3 {
    fill: #6f5b92;
  }

  .cls-4 {
    fill: #f78d5e;
  }

  .cls-5 {
    fill: #fa976c;
  }

  .cls-6,
  .cls-7,
  .cls-8 {
    fill: #b65c32;
  }

  .cls-10,
  .cls-6 {
    opacity: 0.6;
  }

  .cls-7 {
    opacity: 0.4;
  }

  .cls-9 {
    fill: #f4b73b;
  }

  .cls-11 {
    fill: #f9c358;
  }

  .cls-12 {
    fill: #9b462c;
  }

  .cls-13 {
    fill: #aa512e;
  }

  .cls-14 {
    fill: #7d6aa5;
  }

  /* animations */

  .wheel {
    animation: wheel-rotate 6s ease infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  @keyframes wheel-rotate {
    50% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }
    100% {
      transform: rotate(960deg);
    }
  }

  .clock-hand-1 {
    animation: clock-rotate 3s linear infinite;
    transform-origin: bottom;
    transform-box: fill-box;
  }

  .clock-hand-2 {
    animation: clock-rotate 6s linear infinite;
    transform-origin: bottom;
    transform-box: fill-box;
  }

  @keyframes clock-rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  #box-top {
    animation: box-top-anim 2s linear infinite;
    transform-origin: right top;
    transform-box: fill-box;
  }

  @keyframes box-top-anim {
    50% {
      transform: rotate(-5deg);
    }
  }

  #umbrella {
    animation: umbrella-anim 6s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  @keyframes umbrella-anim {
    25% {
      transform: translateY(10px) rotate(5deg);
    }
    75% {
      transform: rotate(-5deg);
    }
  }

  #cup {
    animation: cup-rotate 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
    transform-origin: top left;
    transform-box: fill-box;
  }

  @keyframes cup-rotate {
    50% {
      transform: rotate(-5deg);
    }
  }

  #pillow {
    animation: pillow-anim 3s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  @keyframes pillow-anim {
    25% {
      transform: rotate(10deg) translateY(5px);
    }
    75% {
      transform: rotate(-10deg);
    }
  }

  #stripe {
    animation: stripe-anim 3s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  @keyframes stripe-anim {
    25% {
      transform: translate(10px, 0) rotate(-10deg);
    }
    75% {
      transform: translateX(10px);
    }
  }

  #bike {
    animation: bike-anim 6s ease infinite;
  }

  @keyframes bike-anim {
    0% {
      transform: translateX(-1300px);
    }
    50% {
      transform: translateX(0);
      animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    }
    100% {
      transform: translateX(1300px);
    }
  }

  #rucksack {
    animation: ruck-anim 3s linear infinite;
    transform-origin: top;
    transform-box: fill-box;
  }

  @keyframes ruck-anim {
    50% {
      transform: rotate(5deg);
    }
  }

  .circle {
    animation: circle-anim ease infinite;
    transform-origin: center;
    transform-box: fill-box;
    perspective: 0px;
  }

  .circle.c1 {
    animation-duration: 2s;
  }

  .circle.c2 {
    animation-duration: 3s;
  }

  .circle.c3 {
    animation-duration: 1s;
  }

  .circle.c4 {
    animation-duration: 1s;
  }

  .circle.c5 {
    animation-duration: 2s;
  }

  .circle.c6 {
    animation-duration: 3s;
  }

  @keyframes circle-anim {
    50% {
      transform: scale(0.2) rotateX(360deg) rotateY(360deg);
    }
  }

  .four,
  #ou {
    animation: four-anim cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
  }

  .four.a {
    transform-origin: bottom left;
    animation-duration: 3s;
    transform-box: fill-box;
  }

  .four.b {
    transform-origin: bottom right;
    animation-duration: 3s;
    transform-box: fill-box;
  }

  #ou {
    animation-duration: 6s;
    transform-origin: center;
    transform-box: fill-box;
  }

  @keyframes four-anim {
    50% {
      transform: scale(0.98);
    }
  }
`;
