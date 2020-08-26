import * as React from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import styled from "styled-components";

export default function Indicators({ index }: { index: number }) {
  return (
    <AnimateSharedLayout>
      <Ul>
        {colors.map((item, i) => (
          <Li color={item} key={i}>
            {index === i && (
              <Outline
                layoutId="outline"
                initial={false}
                animate={{ borderColor: item }}
              />
            )}
          </Li>
        ))}
      </Ul>
    </AnimateSharedLayout>
  );
}
const Li = styled(motion.li)`
  width: 20px;
  height: 20px;
  display: block;
  position: relative;
  border-radius: 50%;
  background-color: ${({ color }: { color: string }) => color};
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 600px;
  margin: 0 auto;
`;
const Outline = styled(motion.div)`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 10px solid white;
  border-radius: 50%;
`;
const colors = ["#464041", "#FA9D9C", "#EAD7FF"];
