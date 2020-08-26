import * as React from "react";

import Product from "./product";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Indicators from "./indicators";
import Placeholder from "./placeholder";
import { products } from "./data";

export default function App() {
  // this is a small hack to bypass the animatin delay
  const [loading, load] = React.useState<boolean | undefined>();
  const [state, set] = React.useState(0);
  const increase = () => {
    load(true);
    set((state) => (state + 1) % 3);
  };

  return (
    <Container>
      <AnimatePresence exitBeforeEnter>
        {loading && <Placeholder load={() => load(false)} />}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {products.map(
          (product, i) =>
            i === state && (
              <Product product={product} onPass={increase} key={i} />
            )
        )}
      </AnimatePresence>
      <Indicators index={state} />
    </Container>
  );
}
const Container = styled.div`
  font-family: "Work Sans", sans-serif;
  overflow: hidden;
  margin: 0 auto;
  padding-top: 14vh;
  width: 100%;
  height: 1000px;
  user-select: none;
  position: relative;
`;
