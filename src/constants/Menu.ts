type MenuI = { page: string; link: string };

const MenuList: MenuI[] = [
  { page: "Activity", link: "/activity" },
  { page: "Event", link: "/event" },
  { page: "Recruit", link: "/recruit" },
  { page: "Medium", link: "/medium" },
] as const;

export default MenuList;
