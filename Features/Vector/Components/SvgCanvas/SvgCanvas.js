import React, { useEffect, useRef, useState } from "react";
import useDispatchNewElem from "./Hooks/useDispatchNewElem";

import { useSelector, useDispatch } from "react-redux";

import styles from "./SvgCanvas.module.css";
import SvgProvider from "./lib/SvgProvider";

import Gradients from "./Gradients";

export default function SvgCanvas(props) {
  const dispatch = useDispatch();
  const svgRef = useRef();

  const { height, width, elemsList, elemsState, AddNewElement, getRatios } =
    useDispatchNewElem(svgRef);

  const { fillgradient, fill } = useSelector((state) => state.elemsState)[
    "Svg-0"
  ];

  const shapeSelected = useSelector((state) => state.shapeSelected);

  const elemsListReverse = useSelector((state) => state.elemsListReverse);

  const gradients = useSelector((state) => state.gradients);

  const { updateSvgHtml, svgInnerHtml } = useSelector((state) => state);

  const convertLinearGrad = (data) => {
    return `linear-gradient(${data?.offSets.map((offset) => {
      return offset.style.stopColor + " " + offset.offset + " ";
    })} )`;
  };

  const convertRadialGrad = (data) => {
    return `radial-gradient(${data?.offSets.map((offset) => {
      return offset.style.stopColor + " " + offset.offset + " ";
    })} )`;
  };

  let linearFillUrl = convertLinearGrad(gradients[0]);
  let radialFillUrl = convertRadialGrad(gradients[1]);

  let svgStyle = {
    background: fill,
  };
  if (fillgradient === "linear") {
    svgStyle = {
      backgroundImage: linearFillUrl,
    };
  }
  if (fillgradient === "radial") {
    svgStyle = {
      backgroundImage: radialFillUrl,
    };
  }

  let ratioCSS =
    +width > +height
      ? { width: "70vw", height: "auto" }
      : { width: "auto", height: "70vh" };

  const onContextHandler = (e) => {
    e.preventDefault();
    if (shapeSelected !== "Back") {
      AddNewElement(e);
    }
  };

  function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
  }

  const [first, setFirst] = useState(true);

  useEffect(() => {
    let newHTML = svgRef.current.parentElement.innerHTML;
    dispatch({
      type: "SAVE_SVG",
      payload: newHTML,
    });

    if (!first) {
      let timeout = setTimeout(() => {
        download("svgFile.html", "<html><body>" + newHTML + "</body></html>");
      }, 200);
    } else {
      setFirst(false);
    }

    return () => clearTimeout(timeout);
  }, [updateSvgHtml]);

  return (
    <div className={styles.grid}>
      <svg
        ref={svgRef}
        onContextMenu={onContextHandler}
        viewBox={`0 0 ${width} ${height}`}
        height={height}
        width={width}
        className={styles.svg}
        style={{
          ...svgStyle,
          ...ratioCSS,
        }}
      >
        <Gradients />
        {elemsListReverse.map((id, index) => {
          return (
            <SvgProvider
              type={elemsState[id]["type"]}
              getRatios={getRatios.bind(null, svgRef)}
              svgElem={svgRef.current}
              key={id}
              id={id}
            />
          );
        })}
      </svg>
    </div>
  );
}
