import api from "../utils/api";
import { toast } from "react-toastify";

import { DASHBOARD_ERROR, GET_DASHBOARD_DATA } from "./types";

// Get all reports
export const getDashboard = (year) => async (dispatch) => {
  try {
    const res = await api.get(`/dashboard/adminstats`);

    const analytics = await api.get(`/dashboard/sales-analytics?year=${year}`);

    // monthly: analytics,
    console.log(analytics);
    dispatch({
      type: GET_DASHBOARD_DATA,

      payload: {
        totalUsers: res.data.TotalUsers,
        totalTrucks: res.data.TotalTrucks,
        analytics: analytics.data,
      },
    });
  } catch (err) {
    console.log("err", err);

    dispatch({
      type: DASHBOARD_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
