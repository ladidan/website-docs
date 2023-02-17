/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  background: [
    "intro",
    {
      type: "category",
      label: "Background",
      items: ["background/mergeshang", "background/slash"],
    },
    {
      type: "category",
      label: "Technology",
      items: ["tech/securesigner", "tech/rave"],
    },
    {
      type: "category",
      label: "Architecture",
      items: [
        "arch/overview",
        "arch/pufeth",
        "arch/mev",
        "arch/ejection",
        "arch/governance",
      ],
    },
    {
      type: "category",
      label: "Joining Puffer Pool",
      items: ["joining/stakers", "joining/noop"],
    },
    "faq"
  ],
};

module.exports = sidebars;
