import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/table';
import UpdateForm from '../../components/update-form';
import ListUsers from '../../services/list-users';
import DeleteUser from '../../services/delete-user';
import UpdateUser from '../../services/update-user';
import { setUsers, removeUser, updateUser } from '../../reducers/userSlice';
import { setRefetching } from '../../reducers/formSlice';
import Form from '../Form';
import { mapData} from '../../data/data';

const DisplayInfo = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const isRefetching = useSelector(state => state.form.isRefetching);
  const [selectedItemId, setSelectedItemId] = useState(null);
    const [selectedUpdateItemId, setSelectedUpdateItemId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await ListUsers();
      const mappedData= mapData(data)
      dispatch(setUsers(mappedData));
    };

    fetchUsers();
  }, [dispatch, isRefetching]);

  const removeItem = async (id) => {
    await DeleteUser(id);
    dispatch(removeUser(id));
    dispatch(setRefetching(!isRefetching));
  };

  const updateItem = async (id, updatedData) => {
    await UpdateUser(id, updatedData);
    dispatch(updateUser({ id, updatedData }));
    dispatch(setRefetching(!isRefetching));
  };
  const closeModal = () => {
    setSelectedItemId(null);
    setSelectedUpdateItemId(null);
};
const onClickDelete = (id) => {
    setSelectedItemId(id);
}
const onClickUpdate = (id) => {
    setSelectedUpdateItemId(id);
}
  return (
    <>
      <div className='full-container'>
        <Form />
        <Table
          headers={['Full Name', 'Age', 'City']}
          data={users}
          onDelete={onClickDelete}
          onUpdate={onClickUpdate}
        />
        {selectedItemId && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Confirm Deletion</h2>
                            <p>Are you sure you want to delete this item?</p>
                            <div>
                                <button onClick={() => { removeItem(selectedItemId) }}>Yes</button>
                                <button onClick={closeModal}>No</button>
                            </div>
                        </div>
                    </div>
                )}
                {selectedUpdateItemId && (
                    <div className="modal">
                        <div className="modal-content">
                            <UpdateForm id={selectedUpdateItemId} onUpdate={updateItem} closeModal={closeModal} />
                            <button onClick={closeModal}>No</button>
                        </div>
                    </div>
                )}
        {/* Modals */}
      </div>
    </>
  );
};

export default DisplayInfo;

