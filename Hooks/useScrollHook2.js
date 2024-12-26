import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useScrollHook2(elemRef, section) {
  const dispatch = useDispatch();

  const { mailOn } = useSelector((state) => state);

  const handleScroll = () => {
    if (elemRef.current) {
      let aa = elemRef.current.getBoundingClientRect();
      let percentage = (aa.top * 100) / aa.height;
      if (percentage < 30 && percentage > -50) {
        dispatch({ type: "SELECT_SECTION_PHOTOPLUS", payload: section });
        window.history.pushState("localhost", "Sample Title", "/photoplus#" + section);
        // console.log(section)
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
