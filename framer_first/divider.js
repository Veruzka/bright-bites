// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project 392f06e6dfe8d0e1 "BrightBites", do not edit manually */
"use client";

// virtual:divider
import { Fragment } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/2dICbNV4obHQAZITlmne/BAoMpwXBDFMZIQApn8j6/FWsgsQIfX.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, cx, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion } from "unframer";
import * as React from "react";
var cycleOrder = ["kexWlIQg5"];
var variantClassNames = { kexWlIQg5: "framer-v-tmj4gr" };
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
var Component = /* @__PURE__ */ React.forwardRef(function({ id, style: externalStyle = {}, className, width, height, layoutId, variant: outerVariant = "kexWlIQg5", ...restProps }, ref) {
  const outerVariantId = humanReadableVariantMap[outerVariant];
  const variant = outerVariantId || outerVariant;
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants } = useVariantState({ cycleOrder, defaultVariant: "kexWlIQg5", transitions, variant, variantClassNames });
  const layoutDependency = variants.join("-") + restProps.layoutDependency;
  const defaultLayoutId = useRandomID();
  const { pointerEvents, ...style } = externalStyle;
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(motion.div, { "data-framer-generated": true, initial: variant, animate: variants, onHoverStart: () => setGestureState({ isHovered: true }), onHoverEnd: () => setGestureState({ isHovered: false }), onTapStart: () => setGestureState({ isPressed: true }), onTap: () => setGestureState({ isPressed: false }), onTapCancel: () => setGestureState({ isPressed: false }), className: cx("framer-NZQAk", classNames), style: { display: "contents", pointerEvents: pointerEvents !== null && pointerEvents !== void 0 ? pointerEvents : void 0 }, children: /* @__PURE__ */ _jsx(motion.div, { ...restProps, className: cx("framer-tmj4gr", className), "data-framer-name": "Horizontal", layoutDependency, layoutId: "kexWlIQg5", ref, style: { backgroundColor: "var(--token-b343876e-c5ad-4b88-a31d-69399d409c3f, rgb(230, 230, 230))", ...style }, transition }) }) });
});
var css = ['.framer-NZQAk [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-NZQAk * { box-sizing: border-box; }", ".framer-NZQAk .framer-18m4mlv { display: block; }", ".framer-NZQAk .framer-tmj4gr { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 314px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-NZQAk .framer-tmj4gr { gap: 0px; } .framer-NZQAk .framer-tmj4gr > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-NZQAk .framer-tmj4gr > :first-child { margin-top: 0px; } .framer-NZQAk .framer-tmj4gr > :last-child { margin-bottom: 0px; } }"];
var FramerFWsgsQIfX = withCSS(Component, css);
var stdin_default = FramerFWsgsQIfX;
FramerFWsgsQIfX.displayName = "Divider";
FramerFWsgsQIfX.defaultProps = { height: 1, width: 314 };
addFonts(FramerFWsgsQIfX, []);

// virtual:divider
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
