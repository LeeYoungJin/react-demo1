// src/components/Button/index.stories.js
import React from "react";
import Button from "./";
import styled from "styled-components";

// 사용할 컴포넌트에 대한 명세
export default {
	title: "Components/Button",
	component: [Button],
	// fontSize 값을 storybook에서 받을 수 있도록 설정하기
	argTypes: {
		fontSize: {
			control: {
				type: "radio",
				options: ["big", "small"],
			},
		},
	},
};

const Container = styled.div`
	width: 200px;
`;

// 외부에 보여질 컴포넌트
export const StyledButton = (args) => (
	<Container>
		<Button {...args}>Hello</Button>
	</Container>
);