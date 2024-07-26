import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./hdw.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">HDW - Helping Divorced Women</div>
							<div className="work-subtitle">
								Creative Designer
							</div>
							<div className="work-duration">Jan 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./youtube.png"
								alt="youtube"
								className="work-image"
							/>
							<div className="work-title">Youtube Editor</div>
							<div className="work-subtitle">
								Freelance Video Editor
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
