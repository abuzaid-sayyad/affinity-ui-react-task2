export default function ListView({ tableData, tableTitle }) {
    const formatSerialNumber = (index) => {
        return (index + 1).toString().padStart(2, '0');
    };

    const calculateTotal = (columnName) => {
        let total = 0;
        tableData.forEach((item) => {
            total += parseFloat(item[columnName].replace(/[^\d.-]/g, ''));
        });
        return total.toLocaleString('en-US', { maximumFractionDigits: 2 });
    };

    return (
        <div className="loans-overview">
            <h2>{tableTitle}</h2>
            <div className="flex-flex-col">
                <div className="overflow-x-auto">
                    <div className="min-w-full">
                        <div className="overflow-hidden">
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            SL No
                                        </th>
                                        <th scope="col">
                                            Loan Money
                                        </th>
                                        <th scope="col">
                                            Left to repay
                                        </th>
                                        <th scope="col">
                                            Duration
                                        </th>
                                        <th scope="col">
                                            Interest rate
                                        </th>
                                        <th scope="col">
                                            Installment
                                        </th>
                                        <th scope="col">
                                            Repay
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                {formatSerialNumber(index)}.
                                            </td>
                                            <td>
                                                {item.loanMoney}
                                            </td>
                                            <td>
                                                {item.leftRepay}
                                            </td>
                                            <td>
                                                {item.duration}
                                            </td>
                                            <td>
                                                {item.interestRate}
                                            </td>
                                            <td>
                                                {item.installment}
                                            </td>
                                            <td>
                                                <button>Repay</button>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className="total">
                                            Total
                                        </td>
                                        <td className="total">
                                            ${calculateTotal("loanMoney")}
                                        </td>
                                        <td className="total">
                                            ${calculateTotal("leftRepay")}
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td className="total">
                                            ${calculateTotal("installment")}
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
