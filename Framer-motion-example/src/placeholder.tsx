import * as React from "react";

import { motion } from "framer-motion";
import styled from "styled-components";

export default function Placeholder({ load }: { load: () => void }) {
  React.useLayoutEffect(() => {
    let timeout = setTimeout(() => {
      load();
    }, 700);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Text initial={{ scale: 0 }} animate={{ scale: 1.4 }} exit={{ scale: 0 }}>
      Loading...
    </Text>
  );
}

const Text = styled(motion.p)`
  color: #bcccdc;
  position: absolute;
  left: calc(50% - 40px);
  top: calc(40vh);
`;
