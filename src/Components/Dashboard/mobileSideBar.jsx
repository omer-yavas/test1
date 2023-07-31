import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function MobileSideBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const links = [
    { href: "/dashboard", text: "İletişim / Sosyal Medyalar" },
    { href: "/dashboard/personalinfo", text: "Kişisel Bilgiler" },
    { href: "/dashboard/teachlessons", text: "Verdiğiniz Dersler" },
    { href: "/dashboard/wherethelesson", text: "Dersi Nerede Verirsiniz" },
    { href: "/dashboard/price", text: "Ücretler" },
    { href: "/dashboard/companies", text: "Çalıştığınız Kurumlar" },
    { href: "/dashboard/educations", text: "Eğitiminiz" },
    { href: "/dashboard/references", text: "Referanslar" },
    { href: "/dashboard/biography", text: "Kendinizi Tanıtın" },
    { href: "/dashboard/creation", text: "Yazdığınız Eserler" },
    { href: "/dashboard/photovideo", text: "Fotoğraf / Video" },
    { href: "/dashboard/share", text: "Yayınla/Durdur/Sil" },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="bg-[#ff8801] flex space-x-32 items-center text-white  w-full px-2 ">
        <CloseIcon fontSize="large" className="cursor-pointer" />
        <p className="text-center pt-3 text-[1.2rem] text-white font-bold">
          Hızlı Menü
        </p>
      </div>
      <List>
        {links.map((item, index) => (
          <ListItem
            className="border-b-slate-200 border-b-2"
            key={item.href}
            disablePadding
          >
            <ListItemButton component="a" href={item.href}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <div className="bg-orange-400 flex items-center justify-between px-4">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <MenuIcon
              fontSize="large"
              style={{ color: "white" }}
              className="cursor-pointer"
              onClick={toggleDrawer(anchor, true)}
            ></MenuIcon>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
        <img
          src="/dashboard/logo.svg"
          style={{ width: "120px", height: "70px" }}
        ></img>
      </div>
    </div>
  );
}
