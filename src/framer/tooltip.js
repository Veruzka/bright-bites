// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project 392f06e6dfe8d0e1 "BrightBites", do not edit manually */
"use client";

// virtual:tooltip
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/zW9V4pGoRBPnNbfa0b2i/AUrkybpgI1sQYcgYgH0S/eNWZhv51k.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, RichText, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion } from "unframer";
import * as React from "react";
var cycleOrder = ["IxdxOl3aN"];
var variantClassNames = { IxdxOl3aN: "framer-v-12pe2kp" };
var humanReadableVariantMap = {};
var transitions = { default: { damping: 60, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], mass: 1, stiffness: 500, type: "spring" } };
var BASE62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function useRandomID() {
  const ref = React.useRef(null);
  if (ref.current === null) {
    ref.current = Array(5).fill(0).map(() => BASE62[Math.floor(Math.random() * BASE62.length)]).join("");
  }
  return ref.current;
}
var Component = /* @__PURE__ */ React.forwardRef(function({ id, style: externalStyle = {}, className, width, height, layoutId, variant: outerVariant = "IxdxOl3aN", label: nAPCSjtOm = "Tooltip", ...restProps }, ref) {
  const outerVariantId = humanReadableVariantMap[outerVariant];
  const variant = outerVariantId || outerVariant;
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants } = useVariantState({ cycleOrder, defaultVariant: "IxdxOl3aN", transitions, variant, variantClassNames });
  const layoutDependency = variants.join("-") + restProps.layoutDependency;
  const defaultLayoutId = useRandomID();
  const { pointerEvents, ...style } = externalStyle;
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(motion.div, { "data-framer-generated": true, initial: variant, animate: variants, onHoverStart: () => setGestureState({ isHovered: true }), onHoverEnd: () => setGestureState({ isHovered: false }), onTapStart: () => setGestureState({ isPressed: true }), onTap: () => setGestureState({ isPressed: false }), onTapCancel: () => setGestureState({ isPressed: false }), className: cx("framer-H3GuS", classNames), style: { display: "contents", pointerEvents: pointerEvents !== null && pointerEvents !== void 0 ? pointerEvents : void 0 }, children: /* @__PURE__ */ _jsx(motion.div, { ...restProps, className: cx("framer-12pe2kp", className), "data-framer-name": "v1", layoutDependency, layoutId: "IxdxOl3aN", ref, style: { backgroundColor: "var(--token-9d4e2f6b-a2b9-4c9d-a1b7-a140ee1fc1d9, rgb(245, 245, 245))", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100, boxShadow: '0px 0px 0px 3px var(--token-190bdeba-c5f1-4e8e-8f71-cf9091a86eb2, rgb(255, 255, 255)) /* {"name":"$white"} */', ...style }, transition, children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy", "--framer-font-family": '"IBM Plex Sans", sans-serif', "--framer-font-size": "11px", "--framer-line-height": "1.5em", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv)" }, children: "Tooltip" }) }), className: "framer-xofa67", "data-framer-name": "Label", fonts: ["GF;IBM Plex Sans-regular"], layoutDependency, layoutId: "TCu7qO1c8", style: { "--extracted-r6o4lv": "var(--token-6f286720-c046-4b1a-ae36-29b3719ec712, rgb(26, 26, 26)) ", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--framer-paragraph-spacing": "0px" }, text: nAPCSjtOm, transition, verticalAlignment: "top", withExternalLayout: true }) }) }) });
});
var css = ['.framer-H3GuS [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-H3GuS * { box-sizing: border-box; }", ".framer-H3GuS .framer-rdlvuh { display: block; }", ".framer-H3GuS .framer-12pe2kp { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 5px 12px 5px 12px; position: relative; width: min-content; }", ".framer-H3GuS .framer-xofa67 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-H3GuS .framer-12pe2kp { gap: 0px; } .framer-H3GuS .framer-12pe2kp > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-H3GuS .framer-12pe2kp > :first-child { margin-top: 0px; } .framer-H3GuS .framer-12pe2kp > :last-child { margin-bottom: 0px; } }"];
var FramereNWZhv51k = withCSS(Component, css);
var stdin_default = FramereNWZhv51k;
FramereNWZhv51k.displayName = "Tooltip";
FramereNWZhv51k.defaultProps = { height: 26.5, width: 58 };
addPropertyControls(FramereNWZhv51k, { nAPCSjtOm: { defaultValue: "Tooltip", displayTextArea: false, placeholder: "Tooltip", title: "Label", type: ControlType.String } });
addFonts(FramereNWZhv51k, [{ family: "IBM Plex Sans", moduleAsset: { localModuleIdentifier: "local-module:canvasComponent/eNWZhv51k:default", url: "https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKtdbUFI5NadY.ttf" }, style: "normal", url: "https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKtdbUFI5NadY.ttf", weight: "400" }]);

// virtual:tooltip
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {};
stdin_default.Responsive = ({ locale, ...rest }) => {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: { "Cvs0yr2VY": { "path": "/404" }, "WMZZJiNIc": { "path": "/contact" }, "XHgatBLBl": { "path": "/summaries/:slug/working" }, "augiA20Il": { "path": "/" }, "fZmAFZhNM": { "path": "/about" }, "hepRFlx9S": { "path": "/working_deprecated" }, "lMZ3Pz1wS": { "path": "/summaries/:slug/improvements" }, "qiA3JHonw": { "path": "/summaries/:slug" }, "usPwnQg05": { "path": "/summaries/:slug/not-working" } },
      children: /* @__PURE__ */ jsx(
        WithFramerBreakpoints,
        {
          Component: stdin_default,
          variants: defaultResponsiveVariants,
          ...rest
        }
      ),
      framerSiteId: "392f06e6dfe8d0e1bc6936c1a53ce98f1691b0a6f0579b344145c0385aba2ecb",
      locale,
      locales
    }
  );
};
function ComponentWithRoot({ locale, ...rest }) {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: {
        "Cvs0yr2VY": {
          "path": "/404"
        },
        "WMZZJiNIc": {
          "path": "/contact"
        },
        "XHgatBLBl": {
          "path": "/summaries/:slug/working"
        },
        "augiA20Il": {
          "path": "/"
        },
        "fZmAFZhNM": {
          "path": "/about"
        },
        "hepRFlx9S": {
          "path": "/working_deprecated"
        },
        "lMZ3Pz1wS": {
          "path": "/summaries/:slug/improvements"
        },
        "qiA3JHonw": {
          "path": "/summaries/:slug"
        },
        "usPwnQg05": {
          "path": "/summaries/:slug/not-working"
        }
      },
      children: /* @__PURE__ */ jsx(stdin_default, { ...rest }),
      framerSiteId: "392f06e6dfe8d0e1bc6936c1a53ce98f1691b0a6f0579b344145c0385aba2ecb",
      locale,
      locales
    }
  );
}
Object.assign(ComponentWithRoot, stdin_default);
export {
  ComponentWithRoot as default
};
