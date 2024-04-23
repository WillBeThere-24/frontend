import { useState } from "react";
import FormBuilderIcon from "/public/icons/Form-Builder-icon.svg";
import InviteListIcon from "/public/icons/Invite-list-icon.svg";
import ShareIcon from "/public/icons/Share-Icon.svg";
import PreviewIcon from "/public/icons/Preview-Icon.svg";
import ProfileIcon from "/public/icons/Profile-Icon.svg";
import SettingsIcon from "/public/icons/Settings-Icon.svg";
import OverviewIcon from "/public/icons/material-symbols_overview-key-outline-Overview Iconrounded.svg";
import { SideBar, Subpage, SidebarItem } from "./";
const SidebarContainer = () => {
  const [showText, setShowText] = useState(false);

  const sideBarItem = [
    {
      title: "Dashboard",
      subpages: [
        {
          title: "Profile",
          icon: ProfileIcon,
          link: "/dashboard/profile",
        },
        {
          title: "Form Builder",
          icon: FormBuilderIcon,
          link: "/dashboard/form-builder",
        },
        {
          title: "Invite LIst",
          icon: InviteListIcon,
          link: "/dashboard/invite-list",
        },
      ],
    },
    {
      title: "Launch",
      subpages: [
        {
          title: "Preview",
          icon: PreviewIcon,
          link: "/dashboard/preview",
        },
        {
          title: "Share and Invite",
          icon: ShareIcon,
          link: "/dashboard/form-builder",
        },
        {
          title: "Overview",
          icon: OverviewIcon,
          link: "/dashboard/overview",
        },
      ],
    },
    {
      title: "Settings",
      subpages: [
        {
          title: "Event Settings",
          icon: SettingsIcon,
          link: "/dashboard/profile",
        },
      ],
    },
  ];
  const handleShowText = () => {
    setShowText(!showText);
  };
  return (
    <div>
      <SideBar handleShowText={handleShowText} showText={showText}>
        {sideBarItem.map((item, index) => {
          return (
            <SidebarItem key={index} title={item.title} showText={showText}>
              {item.subpages.map((subpage, subIndex) => (
                <Subpage
                  key={subIndex}
                  title={subpage.title}
                  icon={subpage.icon}
                  link={subpage.link}
                  showText={showText}
                />
              ))}
            </SidebarItem>
          );
        })}
      </SideBar>
      {/* <SideBar >
                <SidebarItem title="Dashboard" >
                    <Subpage title="Profile" icon={ProfileIcon} link="/dashboard/profile" />
                    <Subpage title="Form Builder" icon={FormBuilderIcon} link='/dashboard/form-builder' />
                    <Subpage title="Invite List" icon={InviteListIcon} link='/dashboard/invite-list' />
                </SidebarItem>
                <SidebarItem title="    Launch" >
                    <Subpage title="Preview" icon={PreviewIcon} />
                    <Subpage title="Share and Invite" icon={ShareIcon} />
                    <Subpage title="Overview" icon={OverviewIcon} />
                </SidebarItem>
                <SidebarItem title="Settings" >
                    <Subpage title="Event Settings" icon={SettingsIcon} />
                </SidebarItem>
            </SideBar> */}
    </div>
  );
};

export default SidebarContainer;
