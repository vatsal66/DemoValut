import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  ArrowBack as ArrowBackIcon,
  Business as CompanyIcon,
  School as JobIcon,
  VideoLibrary as VideoIcon,
  SupervisorAccount as UsersIcon
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import Logo from "../../Assets/images/logo.svg";
import symbolIcon from "../../Assets/images/symbol.png";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Overview", link: "/overview", icon: <CompanyIcon /> },
  {
    id: 1,
    label: "Portfolios",
    link: "/portfolio",
    icon: <JobIcon />,
  },
  {
    id: 2,
    label: "Reports",
    link: "/reports",
    icon: <UsersIcon />,
  }
];

const structureSecond = [
  { id: 0, label: "Fund", link: "/fund", icon: <CompanyIcon /> },
  {
    id: 1,
    label: "Invest",
    link: "/invest",
    icon: <JobIcon />,
  },
  {
    id: 2,
    label: "Trade",
    link: "/trade",
    icon: <UsersIcon />,
  }
];

const structureLast = [
  { id: 0, label: "Personal Advisor", link: "/fund", icon: <CompanyIcon /> },
  {
    id: 1,
    label: "Messages",
    link: "/invest",
    icon: <JobIcon />,
  },
  {
    id: 2,
    label: "Settings",
    link: "/trade",
    icon: <UsersIcon />,
  }
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: true,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: true,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <img src={Logo} alt="logo" width={95} />
      {/* <div className={classes.toolbar} /> */}
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}

        <div className="borderLineMenu" />

        {structureSecond.map(link => (
          <div className="second-menu-list">
            <SidebarLink
              key={link.id}
              location={location}
              isSidebarOpened={isSidebarOpened}
              {...link}
            />
          </div>
        ))}

        <div className="second-logo">
          <img src={symbolIcon} />
        </div>

<div className="lastMenu">
{structureLast.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
          ))}
</div>
        
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
