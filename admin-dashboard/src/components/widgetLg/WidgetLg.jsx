import "./widgetLg.css"

export default function widgetLg() {

    const Button = ({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetTr">
                <td className="widgetLgUser">
                    <img 
                    src="https://images.unsplash.com/photo-1581464907815-29bdb6343d3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwbGFkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                    alt="" 
                    className="widgetLgImg"
                    />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">2 Jun 2021</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                    <Button type="Approved"/>
                </td>
            </tr>

            <tr className="widgetTr">
                <td className="widgetLgUser">
                    <img 
                    src="https://images.unsplash.com/photo-1581464907815-29bdb6343d3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwbGFkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                    alt="" 
                    className="widgetLgImg"
                    />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">2 Jun 2021</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                    <Button type="Declined"/>
                </td>
            </tr>

            <tr className="widgetTr">
                <td className="widgetLgUser">
                    <img 
                    src="https://images.unsplash.com/photo-1581464907815-29bdb6343d3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwbGFkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                    alt="" 
                    className="widgetLgImg"
                    />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">2 Jun 2021</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                    <Button type="Pending"/>
                </td>
            </tr>

            <tr className="widgetTr">
                <td className="widgetLgUser">
                    <img 
                    src="https://images.unsplash.com/photo-1581464907815-29bdb6343d3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwbGFkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                    alt="" 
                    className="widgetLgImg"
                    />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">2 Jun 2021</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                    <Button type="Approved"/>
                </td>
            </tr>
            
        </table>
    </div>
  )
}