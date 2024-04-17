import Layout from "./components/layout"
import ListView from "./components/listview"
import Summary from "./components/summary"

const sidebarMenus = [
    {
        path: "#",
        icon: "dashboard",
        name: "Dashboard",
    },
    {
        path: "#",
        icon: "transactions",
        name: "Transactions",
    },
    {
        path: "#",
        icon: "accounts",
        name: "Accounts",
    },
    {
        path: "#",
        icon: "investments",
        name: "Investments",
    },
    {
        path: "#",
        icon: "credit-cards",
        name: "Credit Cards",
    },
    {
        path: "#",
        icon: "loan",
        name: "Loans",
    },
    {
        path: "#",
        icon: "services",
        name: "Services",
    },
    {
        path: "#",
        icon: "privileges",
        name: "My Privileges",
    },
    {
        path: "#",
        icon: "setting",
        name: "Setting",
    },
];

const HeaderMenu = [
    { name: "Menu1", path: "#" },
    { name: "Menu2", path: "#" },
    { name: "Menu3", path: "#" },
    { name: "Menu4", path: "#" },
]
const notifications = [
    { path: "#", title: "Lorem ipsum", desc: "Lorem ipsum dolor site amet", timeAgo: "1d ago" },
    { path: "#", title: "Lorem ipsum", desc: "Lorem ipsum dolor site amet", timeAgo: "1d ago" },
    { path: "#", title: "Lorem ipsum", desc: "Lorem ipsum dolor site amet", timeAgo: "1d ago" },
    { path: "#", title: "Lorem ipsum", desc: "Lorem ipsum dolor site amet", timeAgo: "1d ago" },
]

const summary = [
    {
        icon: "personal",
        title: "Personal Loans",
        amount: "$50,000"
    },
    {
        icon: "corporate",
        title: "Corporate Loans",
        amount: "$100,000"
    },
    {
        icon: "business",
        title: "Business Loans",
        amount: "$500,000"
    },
    {
        icon: "custom",
        title: "Custom Loans",
        amount: "Choose Money"
    },
];

const tableData = [
    {
        loanMoney: "$100,000",
        leftRepay: "$40,500",
        duration: "8 Months",
        interestRate: "12%",
        installment: "$2,000 / month",
    },
    {
        loanMoney: "$500,000",
        leftRepay: "$250,000",
        duration: "36 Months",
        interestRate: "10%",
        installment: "$8,000 / month",
    },
    {
        loanMoney: "$900,000",
        leftRepay: "$40,500",
        duration: "12 Months",
        interestRate: "12%",
        installment: "$5,000 / month",
    },
    {
        loanMoney: "$50,000",
        leftRepay: "$40,500",
        duration: "25 Months",
        interestRate: "5%",
        installment: "$2,000 / month",
    },
    {
        loanMoney: "$50,000",
        leftRepay: "$40,500",
        duration: "5 Months",
        interestRate: "16%",
        installment: "$10,000 / month",
    },
    {
        loanMoney: "$80,000",
        leftRepay: "$25,500",
        duration: "14 Months",
        interestRate: "8%",
        installment: "$2,000 / month",
    },
    {
        loanMoney: "$12,000",
        leftRepay: "$5,500",
        duration: "9 Months",
        interestRate: "13%",
        installment: "$500 / month",
    },
    {
        loanMoney: "$160,000",
        leftRepay: "$100,800",
        duration: "3 Months",
        interestRate: "12%",
        installment: "$900 / month",
    },
];


function App() {
    return (
        <Layout
            sidebarMenus={sidebarMenus}
            menus={HeaderMenu}
            notifications={notifications}
            headerTitle={"Loans"}>

            <Summary
                summary={summary}
            />

            <ListView
                tableData={tableData}
                tableTitle={"Active Loans Overview"}
            />
        </Layout>
    )
}

export default App
