import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useScrollHook(elemRef, section) {
  const dispatch = useDispatch();

  const { mailOn } = useSelector((state) => state);

  const handleScroll = () => {
    if (elemRef.current) {
      let aa = elemRef.current.getBoundingClientRect();
      let percentage = (aa.top * 100) / aa.height;
      if (percentage < 30 && percentage > -50) {
        dispatch({ type: "SELECT_SECTION", payload: section });
        window.history.pushState("localhost", "Sample Title", "/#" + section);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
