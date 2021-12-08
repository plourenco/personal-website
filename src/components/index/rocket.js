import React from 'react';
import './rocket.css';

export default function Rocket({ className }) {
  return (
    <svg
      version="1.1"
      id="rocket"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 300 300">
      <g id="x-star">
        <circle fill="#777C9B" cx="53.1" cy="77.7" r="1" />
        <circle fill="#777C9B" cx="192.6" cy="54.7" r="1" />
        <circle fill="#777C9B" cx="181.5" cy="42.7" r="1" />
        <circle fill="#777C9B" cx="235.1" cy="120.8" r="1" />
        <circle fill="#777C9B" cx="77.7" cy="237" r="1" />
        <circle fill="#777C9B" cx="253.1" cy="269" r="1" />
        <circle fill="#777C9B" cx="76.7" cy="126.8" r="1" />
        <circle fill="#777C9B" cx="113.9" cy="32.4" r="1" />
        <circle fill="#777C9B" cx="275.4" cy="20" r="1" />
        <circle fill="#777C9B" cx="262.1" cy="32.4" r="1" />
        <circle fill="#777C9B" cx="28.7" cy="21" r="1" />
        <circle fill="#777C9B" cx="137.4" cy="261.7" r="1" />
      </g>
      <g id="s-star">
        <circle fill="#777C9B" cx="30.4" cy="12" r="1.5" />
        <circle fill="#777C9B" cx="252.1" cy="-99.7" r="1.5" />
        <circle fill="#777C9B" cx="263.1" cy="49.6" r="1.5" />
        <circle fill="#777C9B" cx="52.1" cy="99.7" r="1.5" />
        <circle fill="#777C9B" cx="105.8" cy="-92.3" r="1.5" />
        <circle fill="#777C9B" cx="38.6" cy="-38.5" r="1.5" />
      </g>
      <g id="rocket-body">
        <g id="booster">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#F8E9A1"
            d="M149.8,265.4c5.9-7.8,17.2-32.1,0.4-33
			C133.4,231.4,143.5,256.5,149.8,265.4L149.8,265.4z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#F76C6C"
            d="M149.9,265.7c2.6-7.1,8.3-24.8,0.4-25.2
			C142.4,240,146.7,256.5,149.9,265.7L149.9,265.7z"
          />
        </g>
        <rect x="143.7" y="224.2" fill="#333333" width="13" height="9.9" />
        <g id="thrusters">
          <g id="thruster-1">
            <g>
              <path
                fill="#FFFFFF"
                d="M180.9,216.8v-74c0-3.3,2.7-8.4,5-8.4s5,5.1,5,8.4v74H180.9z"
              />
              <g>
                <path
                  fill="#333333"
                  d="M185.9,135.9c1,0,3.5,3.8,3.5,6.9v72.5h-7.1v-72.5C182.4,139.7,185,135.9,185.9,135.9 M185.9,132.9
						c-3.6,0-6.5,6.3-6.5,9.9v75.5h13.1v-75.5C192.5,139.2,189.6,132.9,185.9,132.9L185.9,132.9z"
                />
              </g>
            </g>
            <polygon
              opacity="8.000000e-02"
              fill="#333333"
              enableBackground="new    "
              points="179.4,218.2 179.4,218.3 192.5,218.3 
				192.5,170.2 179.4,145.4 			"
            />
            <rect
              x="180.4"
              y="216.6"
              fill="#333333"
              width="11.2"
              height="9.9"
            />
            <line
              opacity="0.2"
              fill="none"
              stroke="#333333"
              strokeWidth="1.8"
              strokeMiterlimit="10"
              enableBackground="new    "
              x1="179.4"
              y1="148.9"
              x2="192.5"
              y2="148.9"
            />
            <line
              opacity="0.2"
              fill="none"
              stroke="#333333"
              strokeWidth="1.8"
              strokeMiterlimit="10"
              enableBackground="new    "
              x1="179.4"
              y1="177.9"
              x2="192.5"
              y2="177.9"
            />
          </g>
          <g id="thruster-2">
            <g>
              <path
                fill="#FFFFFF"
                d="M108.8,216.8v-74c0-3.3,2.7-8.4,5-8.4s5,5.1,5,8.4v74H108.8z"
              />
              <path
                fill="#333333"
                d="M113.9,135.9c1,0,3.5,3.8,3.5,6.9v72.5h-7.1v-72.5C110.3,139.7,112.9,135.9,113.9,135.9 M113.9,132.9
					c-3.6,0-6.5,6.3-6.5,9.9v75.5h13.1v-75.5C120.4,139.2,117.5,132.9,113.9,132.9L113.9,132.9z"
              />
            </g>
            <rect
              x="108.3"
              y="216.6"
              fill="#333333"
              width="11.2"
              height="9.9"
            />
            <line
              opacity="0.2"
              fill="none"
              stroke="#333333"
              strokeWidth="1.8"
              strokeMiterlimit="10"
              enableBackground="new    "
              x1="107.3"
              y1="148.9"
              x2="120.4"
              y2="148.9"
            />
            <line
              opacity="0.2"
              fill="none"
              stroke="#333333"
              strokeWidth="1.8"
              strokeMiterlimit="10"
              enableBackground="new    "
              x1="107.3"
              y1="177.9"
              x2="120.4"
              y2="177.9"
            />
          </g>
        </g>
        <g id="tank">
          <path
            fill="#E85763"
            stroke="#333333"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="
			M171.4,192.9v-100c0-10.8-9.6-24.3-21.4-24.3s-21.4,13.5-21.4,24.3v100H171.4L171.4,192.9L171.4,192.9z"
          />
          <path
            opacity="0.1"
            enableBackground="new    "
            d="M150,68.7c-2.9,0-5.7,0.8-8.3,2.3c1-0.2,1.9-0.3,2.9-0.3
			c11.8,0,21.4,13.5,21.4,24.3v98h5.3V92.9C171.4,82.2,161.8,68.7,150,68.7z"
          />
        </g>
        <g id="rocket-left-wing">
          <path
            display="none"
            fill="#434A53"
            d="M95.1,202.1c-0.2,0-0.4,0-0.7-0.1c-1.8-0.7-2.7-2.8-3.1-4.1c-1.1-3.4-1.1-8.5,2.1-12.8
			c1.1-1.5,3.4-2.7,6.4-4.5c8.9-5.2,25.5-14.8,33.4-41.1c0.2-0.7,0.9-1.1,1.7-1.1c0.1,0,0.1,0,0.2,0c0.8,0.1,1.5,0.7,1.5,1.5v60.8
			c0,0.8-0.8,1.5-1.7,1.5L95.1,202.1L95.1,202.1z"
          />
          <path
            fill="#F2F3F4"
            d="M102.1,204.1c-0.2,0-0.4,0-0.6-0.1c-1.6-0.7-2.4-2.9-2.8-4.2c-1-3.5-1-8.7,1.9-13.1c1-1.5,3-2.8,5.7-4.6
			c7.9-5.3,22.7-15.2,29.7-42.2c0.2-0.7,0.8-1.1,1.5-1.1c0.1,0,0.1,0,0.2,0c0.7,0.1,1.3,0.7,1.3,1.5v62.4c0,0.8-0.7,1.5-1.5,1.5
			L102.1,204.1L102.1,204.1z"
          />
          <path
            fill="#333333"
            d="M136.5,141.3c0,15.4,0,62.4,0,62.4s-31.6,0-35.3,0c-2.1-1-4.3-9.1-0.3-15.1
			C104.3,183.4,127.1,177.3,136.5,141.3 M136.5,138.3c-1.3,0-2.6,0.9-2.9,2.2c-6.9,26.4-20.8,35.8-29.1,41.3c-2.9,1.9-5,3.3-6.1,5.1
			c-3.2,4.8-3.2,10.6-2.1,14.4c0.5,1.8,1.6,4.2,3.6,5.1c0.4,0.2,0.8,0.3,1.2,0.3h35.3c1.7,0,3-1.3,3-3v-62.4c0-1.5-1.1-2.8-2.6-3
			C136.7,138.3,136.6,138.3,136.5,138.3L136.5,138.3z"
          />
        </g>
        <g id="rocket-right-wing">
          <path
            display="none"
            fill="#434A53"
            d="M165.8,202.2c-0.9,0-1.7-0.7-1.7-1.5v-60.8c0-0.8,0.7-1.4,1.4-1.5c0.1,0,0.1,0,0.2,0
			c0.8,0,1.4,0.5,1.7,1.1c7.8,26.3,24.2,36,33,41.1c3,1.8,5.2,3.1,6.3,4.5c3.2,4.3,3.2,9.5,2.1,12.8c-0.4,1.2-1.3,3.3-3.1,4.1
			c-0.2,0.1-0.4,0.1-0.7,0.1L165.8,202.2L165.8,202.2z"
          />
          <path
            fill="#AEB2B9"
            d="M162.6,204.2c-0.8,0-1.5-0.7-1.5-1.5v-62.4c0-0.8,0.6-1.4,1.3-1.5c0.1,0,0.1,0,0.2,0
			c0.7,0,1.3,0.5,1.5,1.1c7,27,21.8,36.9,29.7,42.2c2.7,1.8,4.7,3.2,5.7,4.6c2.9,4.4,2.9,9.7,1.9,13.1c-0.4,1.2-1.2,3.4-2.8,4.2
			c-0.2,0.1-0.4,0.1-0.6,0.1L162.6,204.2L162.6,204.2z"
          />
          <g>
            <path
              fill="#333333"
              d="M163.4,141.3c9.4,36.1,32.2,42.1,35.6,47.3c4,6,1.9,14.1-0.3,15.1c-3.7,0-35.3,0-35.3,0
				S163.4,156.7,163.4,141.3 M163.4,138.3c-0.1,0-0.3,0-0.4,0c-1.5,0.2-2.6,1.5-2.6,3v62.4c0,1.7,1.3,3,3,3h35.3
				c0.4,0,0.9-0.1,1.2-0.3c2-0.9,3.1-3.3,3.6-5.1c1.1-3.8,1.1-9.5-2.1-14.4c-1.1-1.7-3.2-3.1-6.1-5.1c-8.3-5.6-22.2-14.9-29.1-41.3
				C166,139.2,164.8,138.3,163.4,138.3L163.4,138.3z"
            />
          </g>
        </g>
        <g id="rocket-center">
          <g>
            <path
              fill="#333333"
              d="M142.7,227.1c-0.8,0-1.4-0.4-1.7-1.2c-3.5-10.2-7.6-24.8-7.6-36.3v-81.5c0-5.1,8.8-24.3,16.8-24.3
				c8.1,0,16.8,19.4,16.8,24.3v81.5c0,11.5-4.2,26.2-7.6,36.3c-0.2,0.6-1,1.2-1.7,1.2H142.7z"
            />
          </g>
          <g>
            <path
              fill="#FFFFFF"
              d="M143.7,225.6c-0.7,0-1.2-0.4-1.4-1.2c-2.9-9.9-6.4-24.1-6.4-35.3v-79.2c0-4.9,7.4-23.6,14.1-23.6
				c6.8,0,14.1,18.8,14.1,23.6v79.2c0,11.2-3.5,25.4-6.4,35.3c-0.2,0.6-0.8,1.2-1.4,1.2H143.7z"
            />
          </g>
          <g>
            <path
              fill="#EBEBEB"
              d="M150.5,86.3c6.8,0,14.1,18.8,14.1,23.6v79.2c0,11.2-3.5,25.4-6.4,35.3c-0.2,0.6-0.8,1.2-1.4,1.2h-6.3"
            />
          </g>
          <g display="none">
            <path
              display="inline"
              fill="#EBEBEB"
              d="M151.7,87.9c-1,0-2,0.5-3,1.5c5.3,1.4,11.9,17.6,11.9,22c0,4.6,0,61.7,0,79.2
				c0,10.8-3.4,24.5-5.9,33.5h3.4c2.6-8.9,6.3-23.5,6.3-34.8c0-17.5,0-74.6,0-79.2C164.4,105.3,157.2,87.9,151.7,87.9z"
            />
          </g>
          <g>
            <path
              fill="#333333"
              stroke="#333333"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="M148.2,108.3
				c-3.3,0.6-5.9,3.5-7,7.2c1.7-2.1,4.2-3.6,7-3.9V108.3z"
            />
            <path
              fill="#333333"
              stroke="#333333"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="M151.5,108.2
				v3.5c2.9,0.2,5.6,1.7,7.4,3.9C157.7,111.6,154.9,108.7,151.5,108.2z"
            />
          </g>
          <path
            fill="#EBEBEB"
            d="M150,192.8V224h6.3c0.9-3,1.9-6.8,2.9-10.9l-7.7-20.3L150,192.8L150,192.8z"
          />
          <line
            fill="none"
            stroke="#333333"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            x1="150.1"
            y1="232.4"
            x2="150.1"
            y2="192.8"
          />
        </g>
      </g>
    </svg>
  );
}
