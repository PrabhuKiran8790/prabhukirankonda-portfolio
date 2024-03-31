import { t as tick } from "./index2.js";
import { c as create_ssr_component, o as onDestroy, g as add_attribute } from "./ssr.js";
import "./marked.esm.js";
const css = {
  code: ".__grid--masonry{display:grid;grid-template-columns:repeat(auto-fit, var(--col-width));grid-template-rows:masonry;justify-content:center;grid-gap:var(--grid-gap);padding:var(--grid-gap)}.__grid--masonry > *{align-self:start}.__grid--masonry.__stretch-first > *:first-child{grid-column:1/ -1}",
  map: null
};
const Masonry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stretchFirst = false, gridGap = "0.5em", colWidth = "minmax(Min(20em, 100%), 1fr)", items = [] } = $$props;
  let grids = [], masonryElement;
  let { reset } = $$props;
  const refreshLayout = async () => {
    grids.forEach(async (grid) => {
      let ncol = getComputedStyle(grid._el).gridTemplateColumns.split(" ").length;
      grid.items.forEach((c) => {
        let new_h = c.getBoundingClientRect().height;
        if (new_h !== +c.dataset.h) {
          c.dataset.h = new_h;
          grid.mod++;
        }
      });
      if (grid.ncol !== ncol || grid.mod) {
        grid.ncol = ncol;
        grid.items.forEach((c) => c.style.removeProperty("margin-top"));
        if (grid.ncol > 1) {
          grid.items.slice(ncol).forEach((c, i) => {
            let prev_fin = grid.items[i].getBoundingClientRect().bottom, curr_ini = c.getBoundingClientRect().top;
            c.style.marginTop = `${prev_fin + grid.gap - curr_ini}px`;
          });
        }
        grid.mod = 0;
      }
    });
  };
  const calcGrid = async (_masonryArr) => {
    await tick();
    if (_masonryArr.length && getComputedStyle(_masonryArr[0]).gridTemplateRows !== "masonry") {
      grids = _masonryArr.map((grid) => {
        return {
          _el: grid,
          gap: parseFloat(getComputedStyle(grid).gridRowGap),
          items: [...grid.childNodes].filter((c) => c.nodeType === 1 && +getComputedStyle(c).gridColumnEnd !== -1),
          ncol: 0,
          mod: 0
        };
      });
      refreshLayout();
    }
  };
  onDestroy(() => {
  });
  if ($$props.stretchFirst === void 0 && $$bindings.stretchFirst && stretchFirst !== void 0)
    $$bindings.stretchFirst(stretchFirst);
  if ($$props.gridGap === void 0 && $$bindings.gridGap && gridGap !== void 0)
    $$bindings.gridGap(gridGap);
  if ($$props.colWidth === void 0 && $$bindings.colWidth && colWidth !== void 0)
    $$bindings.colWidth(colWidth);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.reset === void 0 && $$bindings.reset && reset !== void 0)
    $$bindings.reset(reset);
  if ($$props.refreshLayout === void 0 && $$bindings.refreshLayout && refreshLayout !== void 0)
    $$bindings.refreshLayout(refreshLayout);
  $$result.css.add(css);
  {
    if (reset) {
      masonryElement = masonryElement;
    }
  }
  {
    if (items) {
      masonryElement = masonryElement;
    }
  }
  {
    if (masonryElement) {
      calcGrid([masonryElement]);
    }
  }
  return ` <div${add_attribute("class", `__grid--masonry ${stretchFirst ? "__stretch-first" : ""}`, 0)}${add_attribute("style", `--grid-gap: ${gridGap}; --col-width: ${colWidth};`, 0)}${add_attribute("this", masonryElement, 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
export {
  Masonry as M
};
