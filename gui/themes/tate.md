# Tate

Generated from the current project, including edits awaiting autosave. Return to the [theme index](../themes.md). Install the selected fonts and icons using the setup below; assets are acquired separately from their official sources.

## Font and icon setup

Follow [asset installation](../assets.md) when implementing this theme. Download and configure the selected free assets from their official sources; no font files or icon artwork are bundled. Weights below are the authored requests: load matching static faces or a variable range and report any unavailable weight. Register the exact family aliases below, or map the role tokens to the loader’s actual family.

| Selected font | Roles | Weights | Family stack | Setup |
| --- | --- | --- | --- | --- |
| <code>Timeless Grotesk</code> (free) | brand, ui, editorial, data | 500, 600 | <code>"Timeless Grotesk", sans-serif</code> | Download and load [Timeless Grotesk](https://timeless.co/type) in the app. Use the vendor’s Grotesk cut; if using Timeless Sans variable files, pin STYL to 0, with ital 0 for upright or 100 for required italic faces. |

### Icons

Selected: [Central](https://iconists.co/central), outlined. Use the user’s licensed Central artwork if supplied under the [vendor license](https://iconists.co/license). Otherwise install [Lucide](https://lucide.dev/guide/react/getting-started) (React: <code>lucide-react</code>) and wire it into the app’s icon adapter. Tell the user that Lucide is active and that they can license Central at the vendor link, add its files to the app’s icon asset location, and update that adapter to restore Central.

Preserve icon size, color, weight, style, and accessible names. Match the selected style only where the pack supports it; Lucide’s official pack supplies outlines, so report a filled-style gap rather than claiming exact filled artwork. Keep existing package versions and add only missing packages using the receiving project’s package manager.

## Foundations

```json
{
  "name": "Tate",
  "text": {
    "xxs": {
      "size": 11,
      "lineHeight": 15,
      "letterSpacing": 0
    },
    "xs": {
      "size": 13,
      "lineHeight": 17,
      "letterSpacing": 0
    },
    "s": {
      "size": 15,
      "lineHeight": 22,
      "letterSpacing": 0
    },
    "m": {
      "size": 17,
      "lineHeight": 26,
      "letterSpacing": 0
    },
    "l": {
      "size": 26,
      "lineHeight": 35,
      "letterSpacing": 0
    },
    "xl": {
      "size": 39,
      "lineHeight": 43,
      "letterSpacing": 0
    },
    "xxl": {
      "size": 52,
      "lineHeight": 56,
      "letterSpacing": 0
    }
  },
  "fonts": {
    "ui": {
      "family": "\"Timeless Grotesk\", sans-serif",
      "weights": {
        "regular": 500,
        "medium": 600,
        "heavy": 600
      }
    },
    "brand": {
      "family": "\"Timeless Grotesk\", sans-serif",
      "weights": {
        "regular": 500,
        "medium": 600,
        "heavy": 600
      }
    },
    "editorial": {
      "family": "\"Timeless Grotesk\", sans-serif",
      "weights": {
        "regular": 500,
        "medium": 600,
        "heavy": 600
      }
    },
    "data": {
      "family": "\"Timeless Grotesk\", sans-serif",
      "weights": {
        "regular": 500,
        "medium": 600,
        "heavy": 600
      }
    }
  },
  "border": {
    "l": 0,
    "m": 0,
    "s": 0,
    "none": 0
  },
  "radius": {
    "l": 22,
    "m": 15,
    "s": 11,
    "xl": 33,
    "xs": 5,
    "full": 9999,
    "zero": 0
  },
  "shadows": {
    "l": {
      "x": 0,
      "y": 16,
      "blur": 48,
      "color": {
        "dark": "neutral-1",
        "light": "neutral-10"
      },
      "spread": 0,
      "opacity": 0
    },
    "m": {
      "x": 0,
      "y": 8,
      "blur": 24,
      "color": {
        "dark": "neutral-1",
        "light": "neutral-10"
      },
      "spread": 0,
      "opacity": 12
    },
    "s": {
      "x": 0,
      "y": 2,
      "blur": 4,
      "color": {
        "dark": "neutral-1",
        "light": "neutral-10"
      },
      "spread": 0,
      "opacity": 0
    }
  },
  "spacing": {
    "l": 29,
    "m": 20,
    "s": 15,
    "xl": 39,
    "xs": 10,
    "xxl": 59,
    "xxs": 5,
    "zero": 0
  },
  "animation": {
    "large": {
      "easing": [
        0.22,
        1,
        0.36,
        1
      ],
      "duration": 360
    },
    "easing": [
      0.16,
      1,
      0.3,
      1
    ],
    "duration": 200,
    "popupScale": 0.96,
    "pressDistance": 1
  },
  "iconStyle": "outlined",
  "iconFamily": "Central",
  "neutralTone": "warm",
  "buttonRadius": "s",
  "colorEmphasis": 86.76398789180743,
  "primaryForeground": {},
  "primaryActionColor": "color-1",
  "colorTranslucency": {
    "light": {
      "color-1": 21
    }
  }
}
```

## light CSS variables

Define these in the app’s existing theme scope for this mode. Keep component styles linked to the variables.

| Variable | Value |
| --- | --- |
| `--theme-name` | Tate |
| `--theme-icon-family` | Central |
| `--theme-icon-style` | outlined |
| `--toolbar-divider-bleed` | 0 |
| `--focus-ring-outline` | initial |
| `--icon-stroke-width` | 2.5 |
| `--icon-light-display` | none |
| `--icon-regular-display` | none |
| `--icon-bold-display` | inline |
| `--motion-duration` | 200ms |
| `--motion-easing` | cubic-bezier(0.16, 1, 0.3, 1) |
| `--motion-type` | easing |
| `--motion-visual-duration` | 0.2 |
| `--motion-bounce` | 0.2 |
| `--motion-enabled` | 1 |
| `--motion-small-iterations` | infinite |
| `--motion-large-duration` | 360ms |
| `--motion-large-easing` | cubic-bezier(0.22, 1, 0.36, 1) |
| `--motion-large-type` | easing |
| `--motion-large-visual-duration` | 0.36 |
| `--motion-large-bounce` | 0.2 |
| `--motion-large-iterations` | infinite |
| `--motion-popup-scale` | 0.96 |
| `--motion-press-distance` | 1px |
| `--option-badge-background` | #3b2a20 |
| `--option-badge-foreground` | #ffffff |
| `--navigation-active-foreground` | #ffffff |
| `--emphasis-chart-fill` | #3b2a2036 |
| `--emphasis-balance-background` | #efb0a8 |
| `--emphasis-rewards-background` | #f4eadb |
| `--emphasis-icon-background` | #f4eadb |
| `--emphasis-icon-foreground` | #2a1d16 |
| `--emphasis-type-background` | #f4eadb |
| `--emphasis-type-foreground` | #2a1d16 |
| `--navigation-active-background` | #3b2a20 |
| `--surface-raised-image` | none |
| `--surface-raised-shadow` | 0 0 0 0 transparent |
| `--surface-recessed-image` | none |
| `--surface-recessed-shadow` | 0 0 0 0 transparent |
| `--space-zero` | 0px |
| `--space-xxs` | 5px |
| `--space-xs` | 10px |
| `--space-s` | 15px |
| `--space-m` | 20px |
| `--space-l` | 29px |
| `--space-xl` | 39px |
| `--space-xxl` | 59px |
| `--size-xxs` | 11px |
| `--line-xxs` | 15px |
| `--letter-spacing-xxs` | 0em |
| `--size-xs` | 13px |
| `--line-xs` | 17px |
| `--letter-spacing-xs` | 0em |
| `--size-s` | 15px |
| `--line-s` | 22px |
| `--letter-spacing-s` | 0em |
| `--size-m` | 17px |
| `--line-m` | 26px |
| `--letter-spacing-m` | 0em |
| `--size-l` | 26px |
| `--line-l` | 35px |
| `--letter-spacing-l` | 0em |
| `--size-xl` | 39px |
| `--line-xl` | 43px |
| `--letter-spacing-xl` | 0em |
| `--size-xxl` | 52px |
| `--line-xxl` | 56px |
| `--letter-spacing-xxl` | 0em |
| `--radius-zero` | 0px |
| `--radius-xs` | 5px |
| `--radius-s` | 11px |
| `--radius-m` | 15px |
| `--radius-l` | 22px |
| `--radius-xl` | 33px |
| `--radius-full` | 9999px |
| `--border-none` | 0px |
| `--border-s` | 0px |
| `--border-m` | 0px |
| `--border-l` | 0px |
| `--border-default-color` | #e3d4c133 |
| `--border-shadow-none` | 0 0 0 0 transparent |
| `--border-shadow-s` | 0 0 0 0 transparent |
| `--border-shadow-m` | 0 0 0 0 transparent |
| `--border-shadow-l` | 0 0 0 0 transparent |
| `--font-ui` | "Timeless Grotesk", sans-serif |
| `--weight-ui-regular` | 500 |
| `--weight-ui-medium` | 600 |
| `--weight-ui-heavy` | 600 |
| `--font-brand` | "Timeless Grotesk", sans-serif |
| `--weight-brand-regular` | 500 |
| `--weight-brand-medium` | 600 |
| `--weight-brand-heavy` | 600 |
| `--font-editorial` | "Timeless Grotesk", sans-serif |
| `--weight-editorial-regular` | 500 |
| `--weight-editorial-medium` | 600 |
| `--weight-editorial-heavy` | 600 |
| `--font-data` | "Timeless Grotesk", sans-serif |
| `--weight-data-regular` | 500 |
| `--weight-data-medium` | 600 |
| `--weight-data-heavy` | 600 |
| `--color-none` | transparent |
| `--color-1` | #3b2a20 |
| `--color-1-transparent` | #3b2a2036 |
| `--color-2` | #f8d3ce |
| `--color-2-transparent` | #f8d3ce33 |
| `--color-3` | #a3474d |
| `--color-3-transparent` | #a3474d33 |
| `--color-4` | #efb0a8 |
| `--color-4-transparent` | #efb0a833 |
| `--neutral-1` | #fffcf7 |
| `--neutral-1-transparent` | #fffcf733 |
| `--neutral-2` | #fcf6ec |
| `--neutral-2-transparent` | #fcf6ec33 |
| `--neutral-3` | #f4eadb |
| `--neutral-3-transparent` | #f4eadb33 |
| `--neutral-4` | #e3d4c1 |
| `--neutral-4-transparent` | #e3d4c133 |
| `--neutral-5` | #cdb9a8 |
| `--neutral-5-transparent` | #cdb9a833 |
| `--neutral-6` | #ad9584 |
| `--neutral-6-transparent` | #ad958433 |
| `--neutral-7` | #8b7363 |
| `--neutral-7-transparent` | #8b736333 |
| `--neutral-8` | #6a5345 |
| `--neutral-8-transparent` | #6a534533 |
| `--neutral-9` | #3b2a20 |
| `--neutral-9-transparent` | #3b2a2033 |
| `--neutral-10` | #2a1d16 |
| `--neutral-10-transparent` | #2a1d1633 |
| `--success` | #4f6b45 |
| `--success-transparent` | #4f6b4533 |
| `--warning` | #9a6418 |
| `--warning-transparent` | #9a641833 |
| `--error` | #a8322d |
| `--error-transparent` | #a8322d33 |
| `--shadow-none` | none |
| `--shadow-s` | 0px 2px 4px 0px #2a1d1600 |
| `--shadow-m` | 0px 2px 6px 0px #2a1d160d, 0px 8px 24px 0px #2a1d1613 |
| `--shadow-l` | 0px 16px 48px 0px #2a1d1600 |
| `--cte-canvas` | #fffcf7 |
| `--cte-surface` | #fcf6ec |
| `--cte-surface-muted` | #f4eadb |
| `--cte-text` | #2a1d16 |
| `--cte-text-muted` | #8b7363 |
| `--cte-border` | #e3d4c133 |
| `--cte-accent` | #3b2a20 |
| `--cte-accent-text` | #ffffff |
| `--cte-danger` | #a8322d |
| `--cte-focus` | #3b2a20 |
| `--cte-font` | "Timeless Grotesk", sans-serif |
| `--cte-font-size` | 15px |
| `--cte-font-weight` | 500 |
| `--cte-line-height` | 22px |
| `--cte-letter-spacing` | 0em |
| `--cte-detail-font-size` | 13px |
| `--cte-detail-line-height` | 17px |
| `--cte-detail-letter-spacing` | 0em |

## dark CSS variables

Define these in the app’s existing theme scope for this mode. Keep component styles linked to the variables.

| Variable | Value |
| --- | --- |
| `--theme-name` | Tate |
| `--theme-icon-family` | Central |
| `--theme-icon-style` | outlined |
| `--toolbar-divider-bleed` | 0 |
| `--focus-ring-outline` | initial |
| `--icon-stroke-width` | 2.5 |
| `--icon-light-display` | none |
| `--icon-regular-display` | none |
| `--icon-bold-display` | inline |
| `--motion-duration` | 200ms |
| `--motion-easing` | cubic-bezier(0.16, 1, 0.3, 1) |
| `--motion-type` | easing |
| `--motion-visual-duration` | 0.2 |
| `--motion-bounce` | 0.2 |
| `--motion-enabled` | 1 |
| `--motion-small-iterations` | infinite |
| `--motion-large-duration` | 360ms |
| `--motion-large-easing` | cubic-bezier(0.22, 1, 0.36, 1) |
| `--motion-large-type` | easing |
| `--motion-large-visual-duration` | 0.36 |
| `--motion-large-bounce` | 0.2 |
| `--motion-large-iterations` | infinite |
| `--motion-popup-scale` | 0.96 |
| `--motion-press-distance` | 1px |
| `--option-badge-background` | #eda8a2 |
| `--option-badge-foreground` | #ffffff |
| `--navigation-active-foreground` | #ffffff |
| `--emphasis-chart-fill` | #eda8a233 |
| `--emphasis-balance-background` | #ffd7ad |
| `--emphasis-rewards-background` | #2f2b21 |
| `--emphasis-icon-background` | #2f2b21 |
| `--emphasis-icon-foreground` | #ffffff |
| `--emphasis-type-background` | #2f2b21 |
| `--emphasis-type-foreground` | #ffffff |
| `--navigation-active-background` | #eda8a2 |
| `--surface-raised-image` | none |
| `--surface-raised-shadow` | 0 0 0 0 transparent |
| `--surface-recessed-image` | none |
| `--surface-recessed-shadow` | 0 0 0 0 transparent |
| `--space-zero` | 0px |
| `--space-xxs` | 5px |
| `--space-xs` | 10px |
| `--space-s` | 15px |
| `--space-m` | 20px |
| `--space-l` | 29px |
| `--space-xl` | 39px |
| `--space-xxl` | 59px |
| `--size-xxs` | 11px |
| `--line-xxs` | 15px |
| `--letter-spacing-xxs` | 0em |
| `--size-xs` | 13px |
| `--line-xs` | 17px |
| `--letter-spacing-xs` | 0em |
| `--size-s` | 15px |
| `--line-s` | 22px |
| `--letter-spacing-s` | 0em |
| `--size-m` | 17px |
| `--line-m` | 26px |
| `--letter-spacing-m` | 0em |
| `--size-l` | 26px |
| `--line-l` | 35px |
| `--letter-spacing-l` | 0em |
| `--size-xl` | 39px |
| `--line-xl` | 43px |
| `--letter-spacing-xl` | 0em |
| `--size-xxl` | 52px |
| `--line-xxl` | 56px |
| `--letter-spacing-xxl` | 0em |
| `--radius-zero` | 0px |
| `--radius-xs` | 5px |
| `--radius-s` | 11px |
| `--radius-m` | 15px |
| `--radius-l` | 22px |
| `--radius-xl` | 33px |
| `--radius-full` | 9999px |
| `--border-none` | 0px |
| `--border-s` | 0px |
| `--border-m` | 0px |
| `--border-l` | 0px |
| `--border-default-color` | #413d3333 |
| `--border-shadow-none` | 0 0 0 0 transparent |
| `--border-shadow-s` | 0 0 0 0 transparent |
| `--border-shadow-m` | 0 0 0 0 transparent |
| `--border-shadow-l` | 0 0 0 0 transparent |
| `--font-ui` | "Timeless Grotesk", sans-serif |
| `--weight-ui-regular` | 500 |
| `--weight-ui-medium` | 600 |
| `--weight-ui-heavy` | 600 |
| `--font-brand` | "Timeless Grotesk", sans-serif |
| `--weight-brand-regular` | 500 |
| `--weight-brand-medium` | 600 |
| `--weight-brand-heavy` | 600 |
| `--font-editorial` | "Timeless Grotesk", sans-serif |
| `--weight-editorial-regular` | 500 |
| `--weight-editorial-medium` | 600 |
| `--weight-editorial-heavy` | 600 |
| `--font-data` | "Timeless Grotesk", sans-serif |
| `--weight-data-regular` | 500 |
| `--weight-data-medium` | 600 |
| `--weight-data-heavy` | 600 |
| `--color-none` | transparent |
| `--color-1` | #eda8a2 |
| `--color-1-transparent` | #eda8a233 |
| `--color-2` | #ffc5ce |
| `--color-2-transparent` | #ffc5ce33 |
| `--color-3` | #153d85 |
| `--color-3-transparent` | #153d8533 |
| `--color-4` | #ffd7ad |
| `--color-4-transparent` | #ffd7ad33 |
| `--neutral-1` | #000000 |
| `--neutral-1-transparent` | #00000033 |
| `--neutral-2` | #242016 |
| `--neutral-2-transparent` | #24201633 |
| `--neutral-3` | #2f2b21 |
| `--neutral-3-transparent` | #2f2b2133 |
| `--neutral-4` | #413d33 |
| `--neutral-4-transparent` | #413d3333 |
| `--neutral-5` | #5b564b |
| `--neutral-5-transparent` | #5b564b33 |
| `--neutral-6` | #888377 |
| `--neutral-6-transparent` | #88837733 |
| `--neutral-7` | #b0ab9f |
| `--neutral-7-transparent` | #b0ab9f33 |
| `--neutral-8` | #d4cfc3 |
| `--neutral-8-transparent` | #d4cfc333 |
| `--neutral-9` | #f5f4f1 |
| `--neutral-9-transparent` | #f5f4f133 |
| `--neutral-10` | #ffffff |
| `--neutral-10-transparent` | #ffffff33 |
| `--success` | #00906c |
| `--success-transparent` | #00906c33 |
| `--warning` | #ffea00 |
| `--warning-transparent` | #ffea0033 |
| `--error` | #fc032d |
| `--error-transparent` | #fc032d33 |
| `--shadow-none` | none |
| `--shadow-s` | 0px 2px 4px 0px #00000000 |
| `--shadow-m` | 0px 2px 6px 0px #0000000d, 0px 8px 24px 0px #00000013 |
| `--shadow-l` | 0px 16px 48px 0px #00000000 |
| `--cte-canvas` | #000000 |
| `--cte-surface` | #242016 |
| `--cte-surface-muted` | #2f2b21 |
| `--cte-text` | #ffffff |
| `--cte-text-muted` | #b0ab9f |
| `--cte-border` | #413d3333 |
| `--cte-accent` | #eda8a2 |
| `--cte-accent-text` | #000000 |
| `--cte-danger` | #fc032d |
| `--cte-focus` | #eda8a2 |
| `--cte-font` | "Timeless Grotesk", sans-serif |
| `--cte-font-size` | 15px |
| `--cte-font-weight` | 500 |
| `--cte-line-height` | 22px |
| `--cte-letter-spacing` | 0em |
| `--cte-detail-font-size` | 13px |
| `--cte-detail-line-height` | 17px |
| `--cte-detail-letter-spacing` | 0em |

## Authored component assignments

These are project edits. The [component reference](tate-components.md) includes the effective assignments with defaults and shared parts resolved.

```json
{
  "componentTokens": {
    "button:ghost:rest": {
      "paddingX": "l",
      "paddingTop": "s",
      "paddingBottom": "s"
    },
    "button:danger:rest": {
      "paddingX": "l",
      "paddingTop": "s",
      "paddingBottom": "s"
    },
    "input:default:rest": {
      "paddingX": "m",
      "background": "neutral-3",
      "paddingTop": "s",
      "paddingBottom": "s"
    },
    "button:outline:rest": {
      "paddingX": "l",
      "paddingTop": "s",
      "paddingBottom": "s"
    },
    "button:primary:rest": {
      "paddingX": "l",
      "paddingTop": "s",
      "paddingBottom": "s"
    },
    "select:default:rest": {
      "paddingX": "m",
      "background": "neutral-3",
      "paddingTop": "s",
      "paddingBottom": "s"
    },
    "button:secondary:rest": {
      "paddingX": "l",
      "paddingTop": "s",
      "paddingBottom": "s"
    },
    "combobox:default:rest": {
      "paddingX": "m",
      "background": "neutral-3",
      "paddingTop": "s",
      "paddingBottom": "s"
    },
    "menu:default:part:option:rest": {
      "paddingX": "xs",
      "paddingTop": "xs",
      "paddingLeft": "xs",
      "paddingRight": "xs",
      "paddingBottom": "xs"
    },
    "slider:default:part:thumb:rest": {
      "controlSize": "l"
    },
    "slider:default:part:track:rest": {
      "controlSize": "xl"
    },
    "switch:default:part:control:rest": {
      "controlSize": "xl"
    },
    "combobox:default:part:option:rest": {
      "paddingX": "xs",
      "paddingTop": "xs",
      "paddingLeft": "xs",
      "paddingRight": "xs",
      "paddingBottom": "xs"
    },
    "menu:default:part:option:selected": {
      "paddingX": "xs",
      "paddingTop": "xs",
      "paddingLeft": "xs",
      "paddingRight": "xs",
      "paddingBottom": "xs"
    },
    "otp-field:default:part:input:rest": {
      "paddingX": "s",
      "paddingTop": "xs",
      "paddingLeft": "s",
      "paddingRight": "s",
      "paddingBottom": "xs"
    },
    "checkbox:default:part:control:rest": {
      "controlSize": "l"
    },
    "autocomplete:default:part:input:rest": {
      "paddingX": "s",
      "paddingTop": "s",
      "paddingLeft": "s",
      "paddingRight": "s",
      "paddingBottom": "s"
    },
    "autocomplete:default:part:option:rest": {
      "paddingX": "xs",
      "paddingTop": "xs",
      "paddingLeft": "xs",
      "paddingRight": "xs",
      "paddingBottom": "xs"
    },
    "combobox:default:part:option:selected": {
      "paddingX": "xs",
      "paddingTop": "xs",
      "paddingLeft": "xs",
      "paddingRight": "xs",
      "paddingBottom": "xs"
    },
    "autocomplete:default:part:popover:rest": {
      "radius": "s"
    },
    "autocomplete:default:part:option:selected": {
      "paddingX": "xs",
      "paddingTop": "xs",
      "paddingLeft": "xs",
      "paddingRight": "xs",
      "paddingBottom": "xs"
    }
  },
  "componentVariants": {}
}
```
