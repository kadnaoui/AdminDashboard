import { FC } from "react";
import { WidgetWrapper } from "../assets/wrappers/WidgetWrapper";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

export const Widgets:FC=():JSX.Element=>{
    return(
        <WidgetWrapper>
            <div className="left">
                <h1>New Joined Members</h1>
                <div className="member">
                    <img src="https://cdn.pixabay.com/photo/2018/06/04/00/29/women-3452067__340.jpg" alt="" />
                    <span className="name"> Abderrahim Kadnaoui</span>
                    <span className="display">Display <RemoveRedEyeOutlinedIcon/> </span>
                </div>
                <div className="member">
                    <img src="https://cdn.pixabay.com/photo/2018/06/04/00/29/women-3452067__340.jpg" alt="" />
                    <span className="name"> Abderrahim Kadnaoui</span>
                    <span className="display">Display <RemoveRedEyeOutlinedIcon/> </span>
                </div>
                <div className="member">
                    <img src="https://cdn.pixabay.com/photo/2018/06/04/00/29/women-3452067__340.jpg" alt="" />
                    <span className="name"> Abderrahim Kadnaoui</span>
                    <span className="display">Display <RemoveRedEyeOutlinedIcon/> </span>
                </div>
                <div className="member">
                    <img src="https://cdn.pixabay.com/photo/2018/06/04/00/29/women-3452067__340.jpg" alt="" />
                    <span className="name"> Abderrahim Kadnaoui</span>
                    <span className="display">Display <RemoveRedEyeOutlinedIcon/> </span>
                </div>
                <div className="member">
                    <img src="https://cdn.pixabay.com/photo/2018/06/04/00/29/women-3452067__340.jpg" alt="" />
                    <span className="name"> Abderrahim Kadnaoui</span>
                    <span className="display">Display <RemoveRedEyeOutlinedIcon/> </span>
                </div>
                <div className="member">
                    <img src="https://cdn.pixabay.com/photo/2014/03/08/22/32/escalator-283448__340.jpg" alt="" />
                    <span className="name"> Abderrahim KadnaouiKadnaouiKadnaouiKadnaouiKadnaoui</span>
                    <span className="display">Display <RemoveRedEyeOutlinedIcon/> </span>
                </div>
                <div className="member">
                    <img src="https://cdn.pixabay.com/photo/2018/06/04/00/29/women-3452067__340.jpg" alt="" />
                    <span className="name"> Abderrahim Kadnaoui</span>
                    <span className="display">Display <RemoveRedEyeOutlinedIcon/> </span>
                </div>
            </div>
            <div className="right">
                <h1>Latest Transactions</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="customer">
                                <img src="https://cdn.pixabay.com/photo/2018/06/04/00/29/women-3452067__340.jpg" alt="" />
                                Abderrahim Kadnaoui
                                </td>
                            <td>24 Novembre 2022</td>
                            <td>999999.99$</td>
                            <td><span className="status">Aproved</span></td>
                        </tr>
                        <tr>
                            <td className="customer">
                                <img src="https://cdn.pixabay.com/photo/2018/06/04/00/29/women-3452067__340.jpg" alt="" />
                                Abderrahim
                                </td>
                            <td>24 Novembre 2022</td>
                            <td>9.00$</td>
                            <td><span className="status">Declined</span></td>
                        </tr>
                        <tr>
                            <td className="customer">
                                <img src="https://cdn.pixabay.com/photo/2018/06/04/00/29/women-3452067__340.jpg" alt="" />
                                Kadnaoui
                                </td>
                            <td>24 Novembre 2022</td>
                            <td>9.99$</td>
                            <td><span className="status">Pending</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </WidgetWrapper>
    )
}