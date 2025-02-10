export const CONTACTS = [
  { attended: true, email: "dianne@hotmail.com", name: "Dianne Russell" },
  { attended: true, email: "ronald@hotmail.com", name: "Ronald Richard" },
  { attended: true, email: "arlene@hotmail.com", name: "Arlene McCoy" },
  { attended: false, email: "jenny@hotmail.com", name: "Jenny Wilson" },
  { attended: false, email: "wade@hotmail.com", name: "Wade Warren" },
  { attended: false, email: "bessie@hotmail.com", name: "Bessie Cooper" },
];

export type Contact = {
  name: string;
  email: string;
  attended: boolean;
};
