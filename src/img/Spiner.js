import React from "react";

export default function Spiner() {
	return (
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                    margin: "auto",
                    background: "rgba(255, 255, 255, 0)",
                    display: "block",
                    shapeRendering: "auto",
                  }}
				width="100px"
				height="200px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
			>
				<path
					fill="none"
					stroke="#e90c59"
					stroke-width="11"
					stroke-dasharray="177.0463604736328 79.54256774902345"
					d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
					stroke-linecap="round"
                    style={{
                        margin: "auto",
                        background: "rgba(255, 255, 255, 0)",
                        display: "block",
                        shapeRendering: "auto",
                    }}
				>
					<animate
						attributeName="stroke-dashoffset"
						repeatCount="indefinite"
						dur="1.2048192771084336s"
						keyTimes="0;1"
						values="0;256.58892822265625"
					></animate>
				</path>
			</svg>
		</div>
	);
}