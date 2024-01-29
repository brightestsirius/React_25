import service from "./../../services/users";
import { setUsers, deleteUser, changeUser } from "./usersSlice";

const thunks = {
  setUsers: () => {
    return async (dispatch) => {
      const response = await service.get();
      dispatch(setUsers(response));
    };
  },
  deleteUser: (id) => {
    return async (dispatch) => {
      await service.delete(id);
      dispatch(deleteUser(id));
    };
  },
  chnageUser: (item) => {
    return async (dispatch) => {
      const response = await service.put(item.id, { active: !item.active });
      dispatch(changeUser(response));
    };
  },
};

export default thunks;
