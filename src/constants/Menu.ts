type MenuI = { page: string; link: string };
type MenuListI = readonly (
  | MenuI
  | {
      page: string;
      detail: readonly MenuI[];
    }
)[];

const MenuList: MenuListI = [
  { page: "About", link: "about" },
  {
    page: "Activity",
    detail: [
      { page: "커리큘럼", link: "curriculum" },
      { page: "부트캠프", link: "bootcamp" },
      { page: "외부활동", link: "outside" },
    ],
  },
  { page: "Recruit", link: "recruit" },
  { page: "Contact", link: "contact" },
  { page: "Medium", link: "medium" },
] as const;

export default MenuList;
