
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const PaymentCardinfo = ({ payment, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const nav=useNavigate()

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(payment._id);
   
    nav(`/studentinfo/${payment.user}`)
       // 🔥 previous delete functionality
    }
    handleMenuClose();
  };

  return (
    <div className="sm:w-md bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg p-6 mb-4 flex justify-between items-start">
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Month:</span> {payment.month}
        </p>
        <p>
          <span className="font-semibold">Amount:</span> ₹{payment.amount}
        </p>
        <p>
          <span className="font-semibold">Paid On:</span>{" "}
          {payment.createdAt.toString()}
        </p>
      </div>

      {/* Three-dot menu with Delete */}
      <div>
        <IconButton onClick={handleMenuClick}>
          <MoreVertIcon style={{ color: "white" }} />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default PaymentCardinfo;