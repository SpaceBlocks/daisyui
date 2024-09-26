export default {
  ".select": {
    "@apply relative bg-base-100 rounded-btn h-10 shrink appearance-none border border-transparent px-4 text-base text-sm leading-loose align-middle": {},
    "backgroundImage": "linear-gradient(45deg, transparent 50%, currentColor 50%),\n    linear-gradient(135deg, currentColor 50%, transparent 50%)",
    "backgroundPosition": "calc(100% - 20px) calc(1px + 50%),\n    calc(100% - 16.1px) calc(1px + 50%)",
    "backgroundSize": "4px 4px,\n    4px 4px",
    "backgroundRepeat": "no-repeat",
    "input": {
      "@apply border-none bg-transparent": {},
      "&:focus": {
        "@apply outline-none": {}
      }
    },
    "&:focus,\n  &:focus-within": {
      "@apply border-base-content/20 outline-base-content/20 outline outline-2 outline-offset-2": {}
    },
    "&:has(> input[disabled]),\n  &:is(:disabled, [disabled], .btn-disabled)": {
      "@apply border-base-200 bg-base-200 placeholder-base-content text-base-content/40 placeholder-base-content/20 cursor-not-allowed": {}
    },
    "&:has(> input[disabled])>input[disabled]": {
      "@apply cursor-not-allowed": {}
    },
    "&::-webkit-date-and-time-value": {
      "textAlign": "inherit"
    },
    "&[type=\"number\"]": {
      "&::-webkit-inner-spin-button": {
        "@apply -my-4 -me-4": {}
      }
    },
    "&[list]": {
      "&::-webkit-calendar-picker-indicator": {
        "lineHeight": "1em"
      }
    },
    "&.select-bordered": {
      "@apply border-base-content/20": {},
      "boxShadow": "0 1px oklch(0% 0 0 / 0.1) inset,\n      0 -1px oklch(100% 0 0 / 0.1) inset",
      "&:focus": {
        "boxShadow": "0 1px oklch(0% 0 0 / 0.1)"
      }
    },
    "&.select-ghost": {
      "@apply bg-base-100/5 shadow-none": {},
      "&:focus,\n    &:focus-within": {
        "@apply text-base-content bg-base-100": {},
        "boxShadow": "none"
      }
    },
    "&.select-primary": {
      "@apply border-primary": {},
      "backgroundColor": "color-mix(in oklab, var(--color-primary) 2%, transparent)",
      "&:focus,\n    &:focus-within": {
        "@apply outline-primary border-primary": {}
      }
    },
    "&.select-secondary": {
      "@apply border-secondary": {},
      "backgroundColor": "color-mix(in oklab, var(--color-secondary) 2%, transparent)",
      "&:focus,\n    &:focus-within": {
        "@apply outline-secondary border-secondary": {}
      }
    },
    "&.select-accent": {
      "@apply border-accent": {},
      "backgroundColor": "color-mix(in oklab, var(--color-accent) 2%, transparent)",
      "&:focus,\n    &:focus-within": {
        "@apply outline-accent border-accent": {}
      }
    },
    "&.select-info": {
      "@apply border-info": {},
      "backgroundColor": "color-mix(in oklab, var(--color-info) 2%, transparent)",
      "&:focus,\n    &:focus-within": {
        "@apply outline-info border-info": {}
      }
    },
    "&.select-success": {
      "@apply border-success": {},
      "backgroundColor": "color-mix(in oklab, var(--color-success) 2%, transparent)",
      "&:focus,\n    &:focus-within": {
        "@apply outline-success border-success": {}
      }
    },
    "&.select-warning": {
      "@apply border-warning": {},
      "backgroundColor": "color-mix(in oklab, var(--color-warning) 2%, transparent)",
      "&:focus,\n    &:focus-within": {
        "@apply outline-warning border-warning": {}
      }
    },
    "&.select-error": {
      "@apply border-error": {},
      "backgroundColor": "color-mix(in oklab, var(--color-error) 2%, transparent)",
      "&:focus,\n    &:focus-within": {
        "@apply outline-error border-error": {}
      }
    },
    "&.select-xs": {
      "@apply h-6 px-2 text-xs leading-relaxed": {},
      "&[type=\"number\"]": {
        "&::-webkit-inner-spin-button": {
          "@apply -my-1 -me-0": {}
        }
      }
    },
    "&.select-sm": {
      "@apply h-8 px-3 text-sm leading-8": {},
      "&[type=\"number\"]": {
        "&::-webkit-inner-spin-button": {
          "@apply my-0 -me-0": {}
        }
      }
    },
    "&.select-md": {
      "@apply h-10 px-4 text-sm leading-loose": {},
      "&[type=\"number\"]": {
        "&::-webkit-inner-spin-button": {
          "@apply -my-4 -me-4": {}
        }
      }
    },
    "&.select-lg": {
      "@apply h-14 px-6 text-lg leading-loose": {},
      "&[type=\"number\"]": {
        "&::-webkit-inner-spin-button": {
          "@apply -my-6 -me-6": {}
        }
      }
    }
  }
};