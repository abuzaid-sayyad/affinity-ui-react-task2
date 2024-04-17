export default function SideBar({sidebarMenus}) {
    return (
        <div className="sidebar">
            <div className="spacing">
                <a href="#">
                    <img src="/logo/logo.png" alt="Logo" width={183} height={36} />
                </a>
            </div>
            <ul>
                {sidebarMenus.map((menu, index) => (
                    <li key={index}>
                            {/* this active class is temperarory fixes             v  */}
                        <a href={menu.path} className={menu.name === "Loans" ? "active" : ""}>
                            <span className={`menu-icon ${menu.icon}`}></span>
                            <span className="menu-title">{menu.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
