import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getSerial } from "../../utils/commonFunctions";
import moment from "moment";
const TruckItem = ({
  data,
  index,
  currentPage,
  perPage,
  blockToggle,
  selection,
}) => {
  return (
    <Fragment>
      {data === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <tbody>
            <tr role="row" className="even">
              <td className="sorting_1">
                {getSerial(perPage, currentPage, index)}
              </td>
              {/* <td>{data._id}</td> */}
              <td>{data.user?data.user.firstname + " " + data.user.lastname:""}</td>
              <td>{moment(data && data.createdAt).format("Do MMMM YYYY")}</td>
              <td>{data.status == 1 ? "active" : "inactive"}</td>

              <td>
              <div className="btn-group ml-1 mb-1">
      <button
        type="button"
        className="btn btn-drop-table btn-sm"
        data-toggle="dropdown"
      >
        <i className="fa fa-ellipsis-v" />
      </button>
      <div className="dropdown-menu">
        <Link className="dropdown-item" to={`/truck_details/${data._id}`}>
          <i className="fa fa-eye" /> View
        </Link>
        {selection == 1 ? (
                      <Link
                        onClick={(e) => blockToggle(data._id, 0)}
                        className="dropdown-item uppercase"
                        href="#_"
                        data-toggle="modal"
                        data-target="#blockuser"
                      >
                        <i className="fa fa-ban" />
                        Block
                      </Link>
                    ) : (
                      <Link
                        onClick={(e) => blockToggle(data._id, 1)}
                        className="dropdown-item uppercase"
                        href="#_"
                        data-toggle="modal"
                        data-target="#blockuser"
                      >
                        <i className="fa fa-ban" />
                        unBlock
                      </Link>
                    )}
      </div>
    </div>
               
              
         
              </td>
            </tr>
          </tbody>
        </Fragment>
      )}
    </Fragment>
  );
};

TruckItem.propTypes = {};

export default connect(null, {})(TruckItem);

// <tr role="row" className="odd">
//   <td className="sorting_1">01</td>
//   <td>James Milner</td>
//   <td>Feb-22-2021</td>
//   <td>
//     <span className="brown-txt">Active</span>
//   </td>
//   <td>
//     <div className="btn-group ml-1 mb-1">
//       <button
//         type="button"
//         className="btn btn-drop-table btn-sm"
//         data-toggle="dropdown"
//       >
//         <i className="fa fa-ellipsis-v" />
//       </button>
//       <div className="dropdown-menu">
//         <a className="dropdown-item" href="user-detail.php">
//           <i className="fa fa-eye" /> View
//         </a>
//         <a
//           className="dropdown-item"
//           href="#"
//           data-toggle="modal"
//           data-target=".block-user-modal"
//         >
//           <i className="fa fa-ban" /> Inactive
//         </a>
//       </div>
//     </div>
//   </td>
// </tr>;
