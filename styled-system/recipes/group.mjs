import { memo, splitProps } from "../helpers.mjs";
import { createRecipe, mergeRecipes } from "./create-recipe.mjs";

const groupFn = /* @__PURE__ */ createRecipe(
  "group",
  {
    orientation: "horizontal",
  },
  [
    {
      orientation: "horizontal",
      attached: true,
      css: {
        "& > *[data-first]": {
          borderEndRadius: "0!",
          marginEnd: "-1px",
        },
        "& > *[data-between]": {
          borderRadius: "0!",
          marginEnd: "-1px",
        },
        "& > *[data-last]": {
          borderStartRadius: "0!",
        },
      },
    },
    {
      orientation: "vertical",
      attached: true,
      css: {
        "& > *[data-first]": {
          borderBottomRadius: "0!",
          marginBottom: "-1px",
        },
        "& > *[data-between]": {
          borderRadius: "0!",
          marginBottom: "-1px",
        },
        "& > *[data-last]": {
          borderTopRadius: "0!",
        },
      },
    },
  ]
);

const groupVariantMap = {
  orientation: ["horizontal", "vertical"],
  attached: ["true"],
  grow: ["true"],
  stacking: ["first-on-top", "last-on-top"],
};

const groupVariantKeys = Object.keys(groupVariantMap);

export const group = /* @__PURE__ */ Object.assign(memo(groupFn.recipeFn), {
  __recipe__: true,
  __name__: "group",
  __getCompoundVariantCss__: groupFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: groupVariantKeys,
  variantMap: groupVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, groupVariantKeys);
  },
  getVariantProps: groupFn.getVariantProps,
});
