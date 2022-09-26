import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import styled from "styled-components";

const ParentDiv = styled.div`
  position: relative;
  cursor: pointer;

  div {
    position: absolute;
    top: calc(25% - var(--size) / 2);
    --size: 18px;
    left: calc(30% - var(--size) / 2);
    width: var(--size);
    height: var(--size);
  }
`;

const Bar = () => {
  return (
    <ParentDiv>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44 26.4L44 14.6667L41.0667 14.6667L41.0667 11.7333L38.1333 11.7333L38.1333 5.86667L35.2 5.86667L35.2 2.93333L29.3333 2.93333L29.3333 -6.411e-07L23.4667 -8.9754e-07L23.4667 2.93333L17.6 2.93333L17.6 -1.15398e-06L14.6667 -1.2822e-06L14.6667 2.93333L8.8 2.93333L8.8 5.86666L5.86667 5.86666L5.86667 8.8L2.93333 8.8L2.93333 14.6667L1.08743e-06 14.6667L8.30994e-07 20.5333L2.93333 20.5333L2.93333 23.4667L7.02774e-07 23.4667L4.46334e-07 29.3333L2.93333 29.3333L2.93333 32.2667L5.86667 32.2667L5.86667 38.1333L11.7333 38.1333L11.7333 41.0667L14.6667 41.0667L14.6667 44L20.5333 44L20.5333 41.0667L26.4 41.0667L26.4 44L32.2667 44L32.2667 41.0667L35.2 41.0667L35.2 38.1333L38.1333 38.1333L38.1333 41.0667L41.0667 41.0667L41.0667 38.1333L38.1333 38.1333L38.1333 32.2667L41.0667 32.2667L41.0667 26.4L44 26.4ZM2.93333 23.4667L5.86667 23.4667L5.86667 26.4L2.93333 26.4L2.93333 23.4667Z"
          fill="#a5fa00"
        ></path>
      </svg>

      <div>
        <HiMenuAlt4 size={35} />
      </div>
    </ParentDiv>
  );
};

export default Bar;
