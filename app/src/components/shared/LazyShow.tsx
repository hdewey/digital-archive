import { useOnScreen } from "@/lib/chakraUtils";
import { useAnimation, motion } from "framer-motion";
import { useRef, useEffect, ReactNode, Ref } from "react";

const LazyShow = ({ children, grid }: { children: ReactNode, grid?: boolean}) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: grid ? 0 : 'unset',
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeOut"
        }
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
      ref={rootRef as any}
      initial={{ opacity: 0, x: grid ? -20 : 'unset' }}
      animate={controls}
      style={{
        zIndex: 999,
        width: '100%',
        height: '100%'
      }}
    >
      {children}
    </motion.div>
  );
};

export default LazyShow;