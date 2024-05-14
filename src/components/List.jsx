function List({ inputedText, showCompleted, TASKS }) {
  if (inputedText) {
    TASKS = TASKS.filter((task) => {
      return task.name.toLowerCase().indexOf(inputedText.toLowerCase()) !== -1;
    });
  }

  if (showCompleted) {
    TASKS = TASKS.filter((task) => {
      return task.completed === true;
    });
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {TASKS.map((task, index) => (
          <tr key={index}>
            <td>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "",
                }}
              >
                {task.name}
              </span>
            </td>
            <td>{task.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
