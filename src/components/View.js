import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

export const View = ({ employees, deleteemployees }) => {
  return employees.map((employee) => (
    <tr key={employee.name}>
      <td>{employees.name}</td>
      <td>{employees.job}</td>
      <td className="delete-btn" onClick={() => deleteemployees(employees.isbn)}>
        <Icon icon={trash} />
      </td>
    </tr>
  ));
};

export default View
