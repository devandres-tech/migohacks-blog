import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { L as LOCALE } from './config_CgJcjdPj.mjs';

function Datetime({
  pubDatetime,
  modDatetime,
  size = "sm",
  className = ""
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `flex items-center space-x-2 opacity-80 ${className}`.trim(),
      children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: `${size === "sm" ? "scale-90" : "scale-100"} inline-block h-6 w-6 min-w-[1.375rem] fill-skin-base`,
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsx("path", { d: "M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z" }),
              /* @__PURE__ */ jsx("path", { d: "M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z" })
            ]
          }
        ),
        modDatetime && modDatetime > pubDatetime ? /* @__PURE__ */ jsx("span", { className: `italic ${size === "sm" ? "text-sm" : "text-base"}`, children: "Updated:" }) : /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Published:" }),
        /* @__PURE__ */ jsx("span", { className: `italic ${size === "sm" ? "text-sm" : "text-base"}`, children: /* @__PURE__ */ jsx(
          FormattedDatetime,
          {
            pubDatetime,
            modDatetime
          }
        ) })
      ]
    }
  );
}
const FormattedDatetime = ({ pubDatetime, modDatetime }) => {
  const myDatetime = new Date(
    modDatetime && modDatetime > pubDatetime ? modDatetime : pubDatetime
  );
  const date = myDatetime.toLocaleDateString(LOCALE.langTag, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  const time = myDatetime.toLocaleTimeString(LOCALE.langTag, {
    hour: "2-digit",
    minute: "2-digit"
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("time", { dateTime: myDatetime.toISOString(), children: date }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " | " }),
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: " at " }),
    /* @__PURE__ */ jsx("span", { className: "text-nowrap", children: time })
  ] });
};

export { Datetime as D };
