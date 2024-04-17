import SideBar from "./sidebar";
import TopBar from "./topbar";

export default function Layout({children, sidebarMenus, menus, notifications, headerTitle}) {
    return (
        <div className="loans">
            <TopBar menus={menus} notifications={notifications} headerTitle={headerTitle} />
            <SideBar sidebarMenus={sidebarMenus} />
            <div className="loans-body">
                {children}
            </div>
        </div>
    );
}