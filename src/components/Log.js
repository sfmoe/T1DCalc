function Log() {
  return (
    <section id="Log">
                 
    <div className="header">
        <h1>Log</h1>
    </div>

    <div className="content">
        <ul className="log-header">
            <li>#</li>
            <li>Date</li>
            <li>Carbs</li>
            <li>BGL</li>
            <li>Insulin</li>
        </ul>

        <ul id="log-items"></ul>
    </div>
</section>
  );
}

export default Log;
