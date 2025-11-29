const TaskFilter = ({ filter, setFilter }) => {
    return (
      <div class="filter-container">
        <button class="filter-button" onClick={() => setFilter("all")}>Todas</button>
        <button class="filter-button" onClick={() => setFilter("completed")}>Completadas</button>
        <button class="filter-button" onClick={() => setFilter("pending")}>Pendientes</button>
      </div>
    );
  };
  
  export default TaskFilter;  