import styled from "styled-components";
import { motion } from "framer-motion";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const SVG = styled(motion.svg)`
  width: 640px;
  height: auto;

  & .cls-1 {
    fill: #ebf1fe;
  }
  & .cls-2 {
    fill: #e5e5e5;
  }
  & .cls-3 {
    fill: #1a6aff;
  }
  & .cls-4 {
    fill: #74767b;
  }
`;

export const TrainingAnimation = () => {
  return (
    <Root>
      <SVG viewBox="0 0 223.35 161.7">
        <g id="browser">
          <path
            className="cls-2"
            d="M200.52,15.58c-25.13-.21-42.85,0-68,0S13.16,15.25,9.8,16.14c-.47.13-.31.62,0,.62,3.21,0,11.83-.06,15-.06l9.23,0,18.84.05q18.84,0,37.69.06,37.49,0,75,0c14.1,0,20.8-.52,34.9-.64C200.85,16.18,200.86,15.58,200.52,15.58Z"
          />
          <path
            className="cls-2"
            d="M25.8,9.47a3.14,3.14,0,0,0-1.52-1.12A.29.29,0,0,0,24,8.22a2.17,2.17,0,0,0-2.1,2.47,2.42,2.42,0,0,0,3,1.93C26.51,12.24,26.63,10.66,25.8,9.47ZM24.37,12A1.65,1.65,0,0,1,23,9.36a.19.19,0,0,0,.18,0A1.62,1.62,0,0,1,25,9.93a1.85,1.85,0,0,1,.56,1C25.61,11.61,24.94,11.94,24.37,12Z"
          />
          <path
            className="cls-2"
            d="M21,9.57a2.76,2.76,0,0,0-1.76-1.33A.33.33,0,0,0,19,8.16c-1.36.2-3,1-2.75,2.66.23,1.47,1.91,1.95,3.19,1.69A2,2,0,0,0,21,9.57Zm-1.94,1.94c-.78.12-2.12-.16-1.88-1.24a1.86,1.86,0,0,1,1.11-1.2,2.93,2.93,0,0,1,1.54.59C20.66,10.48,20.07,11.36,19.07,11.51Z"
          />
          <path
            className="cls-2"
            d="M14.16,8.94c-.9-.71-3.18-1.12-3.53.42a.3.3,0,0,0,0,.13,1.91,1.91,0,0,0-.3,2.38,2.54,2.54,0,0,0,3.73.61A2.2,2.2,0,0,0,14.16,8.94Zm-.93,2.75a1.47,1.47,0,0,1-2.1-.45,1.24,1.24,0,0,1,.41-1.55,1.49,1.49,0,0,1,.58-.28,1.72,1.72,0,0,1,1.18.27A1.14,1.14,0,0,1,13.23,11.69Z"
          />
        </g>
        <g id="messages">
          <path
            className="cls-2"
            d="M55.66,33.18q4,.07,8,.12,15.78.2,31.58.22c21.14,0,42.27-.1,63.41-.29,11.85-.11,23.7-.27,35.55-.29.34,0,.58-.15.6-.32a16.93,16.93,0,0,0,.08-4,14.18,14.18,0,0,0-.33-1.82,1.59,1.59,0,0,0-.94-1.22,5.37,5.37,0,0,0-2.11-.37c-1.36,0-2.74,0-4.1,0l-7.75.1q-15.72.18-31.45.26-31.23.15-62.47-.17C74.25,25.36,50.44,25,50.37,25c-.95,0-1.09,7.22-.5,7.65a3.9,3.9,0,0,0,2,.49C53.09,33.18,54.39,33.16,55.66,33.18Z"
          />
          <path
            className="cls-2"
            d="M199.25,43c-.28-1.78-.53-3.56-.83-5.33v0c-1.34-1.12-147.92-.21-148.21.14a.76.76,0,0,0-.68.77c.06,1.28.13,2.55.14,3.83s-.16,2.42.59,3.36a3.34,3.34,0,0,0,2.64,1c1.31.06,2.62,0,3.93,0,5.14,0,10.27.07,15.41.1q15.22.1,30.47,0,30.48-.16,61-1.11c11.47-.35,22.93-.86,34.39-1.29A1.25,1.25,0,0,0,199.25,43Z"
          />
          <path
            className="cls-2"
            d="M55.18,58.18q3.66.07,7.33.12,14.55.2,29.12.22c19.49,0,39-.1,58.46-.29,10.93-.11,21.85-.27,32.78-.3.31,0,.53-.14.55-.31a17.57,17.57,0,0,0,.07-4,14.23,14.23,0,0,0-.3-1.81,1.58,1.58,0,0,0-.87-1.22,4.6,4.6,0,0,0-1.94-.37c-1.25,0-2.53,0-3.78,0l-7.14.1q-14.51.16-29,.26-28.8.15-57.6-.17C72.32,50.36,50.37,50,50.3,50c-.87,0-1,7.23-.46,7.66a3.5,3.5,0,0,0,1.8.49C52.81,58.17,54,58.16,55.18,58.18Z"
          />
          <path
            className="cls-2"
            d="M198.38,62.69v0c-.53-.44-42.06.21-78.25.3-27.07.07-51.15-.45-52.9-.43-5.54,0-11.11.18-16.64-.14-1.51-.09-1,3.73-1,5s-.16,2.41.59,3.35a3.3,3.3,0,0,0,2.64,1.06c1.3.06,90.45-.35,110.76-1,11.47-.35,22.1,0,33.57-.47C198,70.34,198.68,64.46,198.38,62.69Z"
          />
          <motion.path
            className="cls-2"
            d="M188.77,76.13q-4-.07-8-.12-15.78-.2-31.58-.23c-21.14,0-42.28.1-63.41.3-11.85.11-23.7.27-35.55.29-.34,0-.58.15-.6.31a17,17,0,0,0-.08,4,14.18,14.18,0,0,0,.33,1.82,1.59,1.59,0,0,0,.94,1.22,5.37,5.37,0,0,0,2.11.37c1.35,0,2.74,0,4.09,0l7.76-.09q15.72-.18,31.44-.26,31.24-.15,62.47.17c11.44.12,35.25.52,35.32.52.95,0,.39-3.12.58-4.3.1-.63.19-1.26.29-1.88s.22-1-.37-1.47a3.91,3.91,0,0,0-2-.49C191.34,76.13,190,76.15,188.77,76.13Z"
            animate={{
              x: [0, -95],
              y: [0, -51.25],
              opacity: [1, 0.75],
              scaleX: [1, 0.25],
            }}
            transition={{ duration: 3 }}
          />
          <motion.path
            fill="none"
            stroke="rgba(0, 0, 0, 0.24)"
            strokeWidth=".5"
            strokeDasharray="2"
            d="M188.77,76.13q-4-.07-8-.12-15.78-.2-31.58-.23c-21.14,0-42.28.1-63.41.3-11.85.11-23.7.27-35.55.29-.34,0-.58.15-.6.31a17,17,0,0,0-.08,4,14.18,14.18,0,0,0,.33,1.82,1.59,1.59,0,0,0,.94,1.22,5.37,5.37,0,0,0,2.11.37c1.35,0,2.74,0,4.09,0l7.76-.09q15.72-.18,31.44-.26,31.24-.15,62.47.17c11.44.12,35.25.52,35.32.52.95,0,.39-3.12.58-4.3.1-.63.19-1.26.29-1.88s.22-1-.37-1.47a3.91,3.91,0,0,0-2-.49C191.34,76.13,190,76.15,188.77,76.13Z"
            animate={{
              opacity: [0, 1, 0.75],
            }}
            transition={{ duration: 3 }}
          />
          <path
            className="cls-2"
            d="M174.74,88.12v0c-1.13-1.12-124.39.18-124.63.53a.72.72,0,0,0-.58.77c0,1.28.1,2.55.11,3.83,0,1.13-.14,2.41.48,3.35a2.59,2.59,0,0,0,2.22,1c1.1.06,2.21,0,3.31,0,4.32,0,8.63,0,13,.06q12.82.07,25.63-.06c17.09-.17,69.85-.94,79.06-1.93C177.86,95.21,174.84,88.82,174.74,88.12Z"
          />
          <path
            className="cls-2"
            d="M55.18,109c2.44,0,4.88.09,7.33.12q14.55.19,29.12.22c19.49,0,39-.1,58.46-.29,10.93-.11,21.85-.27,32.78-.3.31,0,.53-.14.55-.31a17.57,17.57,0,0,0,.07-4,14.23,14.23,0,0,0-.3-1.81,1.57,1.57,0,0,0-.87-1.22,4.6,4.6,0,0,0-1.94-.38c-1.25,0-2.53,0-3.78,0l-7.14.1q-14.51.17-29,.26-28.8.15-57.6-.17c-10.54-.12-32.49-.53-32.56-.53-.87,0-1,7.23-.46,7.65a3.41,3.41,0,0,0,1.8.5C52.81,109,54,109,55.18,109Z"
          />
          <path
            className="cls-2"
            d="M170.24,114.13a.41.41,0,0,0-.35-.35,2,2,0,0,0,0-.27v0c-.43-.44-34,.21-63.28.3-21.88.07-41.36-.45-42.77-.43-4.48,0-9,.18-13.45-.14-1.23-.09-.91,7.42-.31,8.36a2.45,2.45,0,0,0,2.14,1.06c.33,0,28.94.29,32.82.41,7.74.24,15.49.4,23.25.42s54-.29,58.1-1.23c1.59-.37,3.67-.4,4.12-2.33A15.43,15.43,0,0,0,170.24,114.13Z"
          />
          <path
            className="cls-2"
            d="M55.53,135.48l7.66.12q15.23.19,30.44.22c20.38.05,40.75-.1,61.11-.29,11.43-.11,22.85-.27,34.27-.3.33,0,.56-.14.58-.31a17.58,17.58,0,0,0,.07-4,14,14,0,0,0-.31-1.81,1.61,1.61,0,0,0-.91-1.23,5.18,5.18,0,0,0-2-.37c-1.31,0-2.64,0-3.95,0l-7.47.09q-15.15.18-30.31.27-30.11.15-60.21-.18c-11-.11-34-.52-34-.52-.91,0-.37,3.13-.55,4.31-.1.62-.19,1.25-.29,1.88s-.21,1,.36,1.46a3.66,3.66,0,0,0,1.88.5C53.05,135.47,54.3,135.46,55.53,135.48Z"
          />
          <path
            className="cls-2"
            d="M49.54,143.52c.27,1.78.53,3.56.83,5.33v0c1.35,1.12,147.93.2,148.21-.15a.75.75,0,0,0,.69-.76c-.06-1.28-.13-2.56-.15-3.83s.17-2.42-.58-3.36-93.1-.7-113.41-.07c-11.46.35-22.92.86-34.38,1.29A1.24,1.24,0,0,0,49.54,143.52Z"
          />
        </g>
        <g id="sidebar">
          <g id="sidebar-inbox">
            <path d="M20.11,30.62v-5h.73v5Z" />
            <path d="M21.8,30.62V27h.74v.54a1.51,1.51,0,0,1,.53-.44,1.46,1.46,0,0,1,.69-.16,1.33,1.33,0,0,1,1,.37,1.35,1.35,0,0,1,.36,1v2.31h-.74V28.51a1,1,0,0,0-.19-.65.78.78,0,0,0-.66-.25.86.86,0,0,0-.5.14,1,1,0,0,0-.36.37,1,1,0,0,0-.13.53v2Z" />
            <path d="M26.06,30.62V25.29h.74v2.15a1.61,1.61,0,0,1,2-.28,1.61,1.61,0,0,1,.61.63,2.12,2.12,0,0,1,.23,1,2.19,2.19,0,0,1-.23,1,1.61,1.61,0,0,1-.6.64,1.65,1.65,0,0,1-.82.22,1.53,1.53,0,0,1-.64-.14,1.56,1.56,0,0,1-.53-.38v.44Zm1.76-3a1,1,0,0,0-.5.13,1,1,0,0,0-.37.35.84.84,0,0,0-.15.5V29a1,1,0,0,0,.14.5,1.06,1.06,0,0,0,.38.35,1,1,0,0,0,.5.13,1,1,0,0,0,.74-.3,1.23,1.23,0,0,0,.3-.92,1.26,1.26,0,0,0-.3-.92A1,1,0,0,0,27.82,27.59Z" />
            <path d="M32.19,30.69a2,2,0,0,1-1-.24,1.66,1.66,0,0,1-.67-.67,1.94,1.94,0,0,1-.24-1,1.91,1.91,0,0,1,.24-1,1.7,1.7,0,0,1,.67-.66,2.16,2.16,0,0,1,2,0,1.77,1.77,0,0,1,.67.66,1.91,1.91,0,0,1,.24,1,1.94,1.94,0,0,1-.24,1,1.73,1.73,0,0,1-.67.67A2,2,0,0,1,32.19,30.69Zm0-.63a1.11,1.11,0,0,0,.83-.34,1.25,1.25,0,0,0,.32-.91,1.21,1.21,0,0,0-.32-.9,1.21,1.21,0,0,0-1.66,0,1.22,1.22,0,0,0-.33.9,1.26,1.26,0,0,0,.33.91A1.11,1.11,0,0,0,32.19,30.06Z" />
            <path d="M37,30.62l-.93-1.3-1,1.3h-.79l1.37-1.78L34.39,27h.81l.91,1.3L37,27h.8l-1.29,1.77,1.31,1.85Z" />
            <path
              className="cls-2"
              d="M15.61,28.11a9.32,9.32,0,0,0-.31-2.18.89.89,0,0,0-.89-.62c-.38,0-.78.11-1.16.12a7.5,7.5,0,0,1-1.42-.12.5.5,0,0,0-.56.62,7.78,7.78,0,0,0-.18,4.19c.19.6.81.67,1.37.75a13.51,13.51,0,0,0,2.7.13.59.59,0,0,0,.51-.51A17.2,17.2,0,0,0,15.61,28.11Zm-2.39-1.69c.26,0,.52-.05.78-.07.44,0,.35-.14.43.31a11.76,11.76,0,0,1,.16,2.24,2.13,2.13,0,0,0-1-.29,2,2,0,0,0-1.48.43A10.38,10.38,0,0,1,12,26.37,10.12,10.12,0,0,0,13.22,26.42Z"
            />
          </g>
          <g id="sidebar-sent">
            <path
              className="cls-2"
              d="M16.23,38.45c-1.12-.53-2.29-1-3.44-1.43-.74-.3-1.95-1-2.7-.51a.17.17,0,0,0-.06.23.32.32,0,0,0,.05.24c.41.64.89,1.25,1.33,1.88-.53.63-1,1.29-1.53,2-.3.41.2.88.61.79a38.37,38.37,0,0,0,5.7-1.87C17,39.45,17,38.8,16.23,38.45Z"
            />
            <path d="M21.68,41.8a2,2,0,0,1-1.26-.38A1.37,1.37,0,0,1,20,40.28v-.22h.74v.21A.85.85,0,0,0,21,41a1.07,1.07,0,0,0,.72.22,1.39,1.39,0,0,0,.75-.17.58.58,0,0,0,.25-.53.64.64,0,0,0-.16-.45,1.32,1.32,0,0,0-.43-.31c-.19-.08-.4-.16-.64-.24a3.12,3.12,0,0,1-.74-.32,1.63,1.63,0,0,1-.52-.49,1.29,1.29,0,0,1-.19-.72,1.22,1.22,0,0,1,.21-.72,1.33,1.33,0,0,1,.59-.44,2.31,2.31,0,0,1,.86-.16,2,2,0,0,1,1.24.36,1.29,1.29,0,0,1,.47,1.09v.23h-.74v-.2a.75.75,0,0,0-.25-.64,1,1,0,0,0-.71-.2,1.25,1.25,0,0,0-.7.16.57.57,0,0,0-.25.52.63.63,0,0,0,.16.44,1.22,1.22,0,0,0,.44.3,4.86,4.86,0,0,0,.63.25,4.06,4.06,0,0,1,.78.34,1.48,1.48,0,0,1,.5.46,1.31,1.31,0,0,1,.18.71,1.19,1.19,0,0,1-.47,1A2,2,0,0,1,21.68,41.8Z" />
            <path d="M27.76,40.58a1.16,1.16,0,0,1-.24.58,1.56,1.56,0,0,1-.61.46,2.27,2.27,0,0,1-.95.18,2,2,0,0,1-1-.24,1.7,1.7,0,0,1-.67-.66,2.12,2.12,0,0,1,0-2,1.77,1.77,0,0,1,.67-.66A2,2,0,0,1,26,38a1.9,1.9,0,0,1,1,.24,1.63,1.63,0,0,1,.64.66,2,2,0,0,1,.23,1,.71.71,0,0,1,0,.14.35.35,0,0,1,0,.12h-3a1.1,1.1,0,0,0,1.18,1,1.57,1.57,0,0,0,.58-.09.77.77,0,0,0,.33-.23.48.48,0,0,0,.13-.28ZM26,38.66a1.2,1.2,0,0,0-.77.24,1.14,1.14,0,0,0-.39.69H27A1,1,0,0,0,26,38.66Z" />
            <path d="M28.63,41.72V38.1h.74v.54a1.51,1.51,0,0,1,.53-.44,1.46,1.46,0,0,1,.69-.16,1.31,1.31,0,0,1,1,.37,1.36,1.36,0,0,1,.36,1v2.31h-.74V39.61A1,1,0,0,0,31,39a.78.78,0,0,0-.66-.25.94.94,0,0,0-.5.14,1,1,0,0,0-.36.37,1.15,1.15,0,0,0-.13.53v2Z" />
            <path d="M34.34,41.79a1.91,1.91,0,0,1-.47-.07.73.73,0,0,1-.39-.28,1,1,0,0,1-.15-.61V38.71h-.87V38.1h.46a.94.94,0,0,0,.28,0c.06,0,.09-.06.11-.13a2.44,2.44,0,0,0,0-.34v-.7h.74v1.2h1.11v.61H34.07v1.87a1,1,0,0,0,.07.43c0,.11.14.16.3.16a.68.68,0,0,0,.2,0l.14,0v.6l-.18.05Z" />
          </g>
          <g id="sidebar-drafts">
            <path d="M20.09,52.83v-5h1.39A2,2,0,0,1,23.41,49a3.44,3.44,0,0,1,0,2.67,2.07,2.07,0,0,1-.77.88,2.21,2.21,0,0,1-1.16.31Zm1.3-4.43h-.55v3.81h.55a1.43,1.43,0,0,0,.79-.23,1.71,1.71,0,0,0,.55-.66,2.68,2.68,0,0,0,0-2,1.64,1.64,0,0,0-.55-.66A1.43,1.43,0,0,0,21.39,48.4Z" />
            <path d="M24.49,52.83V49.2h.74v.48a1.15,1.15,0,0,1,.4-.39,1.21,1.21,0,0,1,.62-.15,1.19,1.19,0,0,1,.36,0l.16,0-.15.7-.14-.06a.78.78,0,0,0-.29,0,.86.86,0,0,0-.88.59,1.81,1.81,0,0,0-.08.51v1.9Z" />
            <path d="M28.56,52.9a1.65,1.65,0,0,1-1-.29,1,1,0,0,1-.37-.8.92.92,0,0,1,.19-.6,1.21,1.21,0,0,1,.53-.37,3,3,0,0,1,.78-.18,8,8,0,0,0,.9-.12c.18,0,.27-.11.27-.2h0a.47.47,0,0,0-.24-.42,1.24,1.24,0,0,0-.67-.14,1.29,1.29,0,0,0-.71.16.56.56,0,0,0-.25.51h-.73a1.1,1.1,0,0,1,.22-.7,1.33,1.33,0,0,1,.6-.45,2.56,2.56,0,0,1,1.7,0,1.37,1.37,0,0,1,.6.41,1,1,0,0,1,.22.68V52.1a2,2,0,0,0,0,.25,1.3,1.3,0,0,0,0,.21.54.54,0,0,0,.07.17l.07.1h-.74L30,52.74l-.08-.16s0-.1,0-.17a1.31,1.31,0,0,1-.53.36A2.42,2.42,0,0,1,28.56,52.9Zm.15-.62a1.57,1.57,0,0,0,.58-.1.93.93,0,0,0,.42-.3.9.9,0,0,0,.15-.53V51a3,3,0,0,1-.47.1l-.54.07a2,2,0,0,0-.69.16.41.41,0,0,0-.23.39C27.93,52.11,28.19,52.28,28.71,52.28Z" />
            <path d="M32,52.83v-3h-.78V49.2H32v-.4a1.4,1.4,0,0,1,.19-.77,1.15,1.15,0,0,1,.5-.45,1.74,1.74,0,0,1,.69-.14l.28,0,.14,0v.62l-.14,0-.21,0a.81.81,0,0,0-.45.11.63.63,0,0,0-.21.3,1.84,1.84,0,0,0-.05.41v.31h1v.61h-1v3Z" />
            <path d="M35.89,52.89a1.91,1.91,0,0,1-.47-.07.73.73,0,0,1-.39-.28,1,1,0,0,1-.15-.61V49.81H34V49.2h.46a.94.94,0,0,0,.28,0c.06,0,.09-.06.11-.12a2.61,2.61,0,0,0,0-.35V48h.74v1.2h1.11v.61H35.62v1.88a1,1,0,0,0,.07.43q.06.15.3.15h.2l.14,0v.6l-.18,0Z" />
            <path d="M38.75,52.9a2.22,2.22,0,0,1-.79-.13,1.31,1.31,0,0,1-.57-.37.88.88,0,0,1-.21-.6v-.09h.74v.06a.39.39,0,0,0,.23.38,1.22,1.22,0,0,0,.62.13,1.5,1.5,0,0,0,.6-.11.35.35,0,0,0,.25-.34.36.36,0,0,0-.24-.35,3.23,3.23,0,0,0-.74-.19,3.57,3.57,0,0,1-.68-.18,1.31,1.31,0,0,1-.53-.34.8.8,0,0,1-.2-.56.84.84,0,0,1,.21-.58,1.2,1.2,0,0,1,.55-.36,2.07,2.07,0,0,1,.77-.13,2.27,2.27,0,0,1,.75.13,1.43,1.43,0,0,1,.56.38.92.92,0,0,1,.21.61v.06h-.73v0a.38.38,0,0,0-.12-.29.64.64,0,0,0-.29-.17,1.58,1.58,0,0,0-.38-.05,1.55,1.55,0,0,0-.37,0,.73.73,0,0,0-.31.13.3.3,0,0,0-.12.25.36.36,0,0,0,.26.35,3,3,0,0,0,.7.19,3.57,3.57,0,0,1,.68.18,1.32,1.32,0,0,1,.54.32.8.8,0,0,1,.2.58.87.87,0,0,1-.22.62,1.37,1.37,0,0,1-.58.36A2.56,2.56,0,0,1,38.75,52.9Z" />
            <path
              className="cls-2"
              d="M15.49,47.7c-.29-.5-.92-.39-1.43-.4a19.39,19.39,0,0,0-2.53.09c-.59.07-1,.85-.46,1.23a22.32,22.32,0,0,0,3.38,3.89.63.63,0,0,0,1.05-.28,14.15,14.15,0,0,0,.2-2.35A4.36,4.36,0,0,0,15.49,47.7Z"
            />
          </g>
          <g id="sidebar-gated">
            <path
              className="cls-3"
              d="M16.6,60.51a29.36,29.36,0,0,0-2.26-1.88s-2.76,0-4.13-.05c-.47,0-.63.35-.61.69.05,1.07,0,4,.35,4a33.49,33.49,0,0,0,4.25,0,7.86,7.86,0,0,0,2.73-2.08C17.06,61,16.79,60.69,16.6,60.51Z"
            />
            <path
              className="cls-3"
              d="M22,63.26A1.89,1.89,0,0,1,21,63a2.21,2.21,0,0,1-.75-.89A3.25,3.25,0,0,1,20,60.68a3.15,3.15,0,0,1,.28-1.4,2.17,2.17,0,0,1,.77-.89,2.05,2.05,0,0,1,1.09-.3,1.94,1.94,0,0,1,.84.16,1.71,1.71,0,0,1,.88,1,2,2,0,0,1,.1.55v0H23.2v0a1.11,1.11,0,0,0-.12-.5,1,1,0,0,0-.36-.41,1.19,1.19,0,0,0-.62-.15,1.21,1.21,0,0,0-.69.2,1.39,1.39,0,0,0-.51.64,2.72,2.72,0,0,0-.2,1.11,2.84,2.84,0,0,0,.19,1.11,1.42,1.42,0,0,0,.49.64,1.29,1.29,0,0,0,.69.2,1.38,1.38,0,0,0,.61-.13,1.11,1.11,0,0,0,.38-.32,1.09,1.09,0,0,0,.18-.38v-.46H22.08v-.58H23.9v2.43h-.47l-.06-.56a1,1,0,0,1-.17.22,1.19,1.19,0,0,1-.43.28A1.75,1.75,0,0,1,22,63.26Z"
            />
            <path
              className="cls-3"
              d="M26.12,63.26a1.6,1.6,0,0,1-1-.29.93.93,0,0,1-.38-.8.92.92,0,0,1,.19-.6,1.3,1.3,0,0,1,.53-.37,2.63,2.63,0,0,1,.78-.17c.43-.05.73-.09.91-.13s.26-.11.26-.2h0a.48.48,0,0,0-.23-.42,1.38,1.38,0,0,0-.68-.14,1.31,1.31,0,0,0-.71.16.58.58,0,0,0-.25.51h-.73a1.17,1.17,0,0,1,.22-.7,1.35,1.35,0,0,1,.6-.44,2.23,2.23,0,0,1,.88-.16,2.45,2.45,0,0,1,.83.14,1.4,1.4,0,0,1,.59.41,1,1,0,0,1,.22.68v1.73c0,.09,0,.17,0,.25a1.12,1.12,0,0,0,0,.21,1,1,0,0,0,.07.17l.07.1h-.73a.35.35,0,0,1-.06-.09.59.59,0,0,1-.07-.16.71.71,0,0,1,0-.17,1.35,1.35,0,0,1-.54.36A2.15,2.15,0,0,1,26.12,63.26Zm.15-.62a1.54,1.54,0,0,0,.58-.1.83.83,0,0,0,.58-.82V61.4a3.12,3.12,0,0,1-.48.1l-.53.07a2.07,2.07,0,0,0-.7.16.41.41,0,0,0-.23.39C25.49,62.47,25.75,62.64,26.27,62.64Z"
            />
            <path
              className="cls-3"
              d="M30.52,63.25a1.49,1.49,0,0,1-.47-.07.73.73,0,0,1-.39-.28,1,1,0,0,1-.15-.61V60.18h-.88v-.62h.46l.28,0a.15.15,0,0,0,.11-.13,1.44,1.44,0,0,0,0-.35v-.7h.74v1.2h1.11v.62H30.25v1.87a1.27,1.27,0,0,0,.06.43.31.31,0,0,0,.31.15h.19l.14,0v.6l-.17,0Z"
            />
            <path
              className="cls-3"
              d="M35.5,62.05a1,1,0,0,1-.24.57,1.5,1.5,0,0,1-.6.46,2.28,2.28,0,0,1-1,.18,2,2,0,0,1-1-.24,1.68,1.68,0,0,1-.66-.66,2.12,2.12,0,0,1,0-2,1.7,1.7,0,0,1,.67-.66,2,2,0,0,1,1-.24,1.92,1.92,0,0,1,1,.24,1.63,1.63,0,0,1,.64.66,2,2,0,0,1,.22,1v.15a.31.31,0,0,1,0,.11h-3a1.12,1.12,0,0,0,.37.74,1.17,1.17,0,0,0,.81.27,1.55,1.55,0,0,0,.57-.09.88.88,0,0,0,.34-.23.56.56,0,0,0,.13-.27Zm-1.79-1.93a1.14,1.14,0,0,0-.76.25,1,1,0,0,0-.39.69h2.22a1.05,1.05,0,0,0-.29-.66A1,1,0,0,0,33.71,60.12Z"
            />
            <path
              className="cls-3"
              d="M37.88,63.26a1.57,1.57,0,0,1-1.42-.86,2.4,2.4,0,0,1,0-2,1.59,1.59,0,0,1,.6-.63,1.68,1.68,0,0,1,.82-.22,1.7,1.7,0,0,1,.64.13A1.52,1.52,0,0,1,39,60V57.85h.75v5.34H39v-.45a1.48,1.48,0,0,1-.51.38A1.58,1.58,0,0,1,37.88,63.26Zm.15-.67a1,1,0,0,0,.5-.14.86.86,0,0,0,.37-.36.9.9,0,0,0,.14-.52v-.44a.88.88,0,0,0-.14-.5,1.07,1.07,0,0,0-.38-.35,1,1,0,0,0-.49-.13,1,1,0,0,0-.74.3,1.23,1.23,0,0,0-.3.92,1.26,1.26,0,0,0,.3.92A1,1,0,0,0,38,62.59Z"
            />
          </g>
        </g>
        <motion.g
          id="cursor"
          animate={{
            x: [0, -70],
            y: [0, -50],
          }}
          transition={{ duration: 3 }}
        >
          <path
            id="cursor-main"
            className="cls-4"
            d="M117.15,83.06a37.84,37.84,0,0,0-6.23-2.22.41.41,0,0,0-.52.4c0,.33-.41,4.53-.28,6.5a.55.55,0,0,0,.92.39A10.56,10.56,0,0,1,113,86.59,14.83,14.83,0,0,0,114,88.48a.46.46,0,0,0,.61.16l1.25-.7a.48.48,0,0,0,.17-.63,23.27,23.27,0,0,0-1.12-2.09,22.3,22.3,0,0,1,2.21-1.47A.4.4,0,0,0,117.15,83.06Z"
          />
          <path
            id="cursor-shadow"
            d="M118.37,82.25A37.84,37.84,0,0,0,112.14,80a.41.41,0,0,0-.52.4c0,.33-.41,4.53-.29,6.5a.54.54,0,0,0,.92.38,10.94,10.94,0,0,1,1.92-1.53,14.06,14.06,0,0,0,1.08,1.88.45.45,0,0,0,.61.16l1.25-.69a.47.47,0,0,0,.16-.63,20.89,20.89,0,0,0-1.11-2.09,23,23,0,0,1,2.21-1.48A.39.39,0,0,0,118.37,82.25Z"
          />
        </motion.g>
        <g id="frame">
          <path
            id="frame-border"
            className="cls-1"
            d="M97.32,2l11.41,0q23.58.09,47.16.57c7.93.17,22.17.24,30.1.47,3.82.12,7.64.24,11.46.38s7.45.13,11.11.48c2.84.28,5.45,1,7.21,2.53a10.34,10.34,0,0,1,2.79,5.19c1.48,5,2.63,125.2,2.78,135.35,0,3.62-.46,8-5.05,10.41-3,1.59-12,1.64-14.87,1.78-7.16.37-22.27.52-41,.52-57.2,0-148.23-1.37-150.12-2C4.82,156,4.12,152,4.07,148.49,3.91,136.77.79,28.41,2.53,9.48c.11-1.15.36-4.86,1.22-5A105.46,105.46,0,0,1,14.9,3.44C42.32,2.37,69.83,2,97.32,2m0-2C66.7,0,39.72.47,14.83,1.44A107.15,107.15,0,0,0,3.47,2.52C1.1,2.86.82,6.13.57,9l0,.29C-.89,24.79.87,97.83,1.72,132.93c.19,7.78.32,13.4.35,15.59,0,2.39.13,8.72,7.59,11.11,2.6.83,101.05,2.07,150.73,2.07,20.62,0,34.46-.17,41.13-.52l1.64-.06c5.63-.2,11.35-.51,14.07-2,6.24-3.32,6.14-9.78,6.11-12.21,0-1.33-.06-4.56-.11-9.17-1-84.47-1.81-123.55-2.76-126.72A12.14,12.14,0,0,0,217.1,5c-1.88-1.67-4.62-2.66-8.35-3-2.74-.26-5.53-.33-8.24-.4-1,0-2-.05-3-.09l-11.47-.38C181.4.93,174.68.85,168.17.77c-4.6-.06-8.95-.11-12.24-.18C140.27.27,124.4.08,108.74,0L97.32,0Z"
          />
          <path
            id="frame-envelope"
            className="cls-3"
            d="M222,69.83c-21.87,25.35-75.85,83.63-110.52,84.44C69.49,155.24,7.07,86.7.61,79.48c.59,32.25,1.47,64.19,1.56,70.3.05,3.52.75,7.6,6.3,9.38,2.54.81,164.86,3,194.31,1.48,2.88-.15,12.09-.2,15.12-1.81,4.67-2.48,5.19-6.91,5.14-10.58C223,142.69,222.58,104.55,222,69.83Z"
          />
        </g>
      </SVG>
    </Root>
  );
};
