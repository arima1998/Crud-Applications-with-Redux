import * as React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import { todoreducers } from "../redux/reducers/reducer";
import { REMOVE } from "../redux/actions/action";

const Todo = () => {
  const dispatch = useDispatch();
  const { User_data } = useSelector((state) => state.todoreducers);
  const remove = (id) => {
    dispatch(REMOVE(id));
  };

  return (
    <>
      <div className="todo_data col-lg-5 mx-auto mt-2">
        {User_data.map((e, k) => {
          return (
            <>
              <div
                className="todo_container d-flex justify-content-between align-items-center px-2"
                key={k}
                style={{
                  background: "#dcdde1",
                  borderRadius: "3px",
                  height: "45px",
                }}
              >
                <>
                  <li style={{ listStyle: "none" }}>{e}</li>
                  <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                    <ModeEditIcon
                      style={{ color: "black", cursor: "pointer" }}
                    />
                    <DeleteIcon
                      onClick={() => remove(k)}
                      style={{ color: "red", cursor: "pointer" }}
                    />
                    <RemoveRedEyeIcon
                      style={{ color: "gray", cursor: "pointer" }}
                    />
                  </div>
                </>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
