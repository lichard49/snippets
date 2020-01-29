function setupSync(db_name, callbacks={},
	db_host='http://localhost:5984/') {

	var local_db_name = db_name;
	var remote_db_name = db_host + db_name;

	var local_db = new PouchDB(local_db_name);
	var remote_db = new PouchDB(remote_db_name);

	if (typeof callbacks.on_change === 'undefined') {
		callbacks.on_change = function(e) { }
	}
	if (typeof callbacks.on_pause === 'undefined') {
		callbacks.on_pause = function(e) { }
	}
	if (typeof callbacks.on_active === 'undefined') {
		callbacks.on_active = function(e) { }
	}
	if (typeof callbacks.on_error === 'undefined') {
		callbacks.on_error = function(e) { }
	}

	remote_db.sync(local_db, {
		live: true,
		retry: true
	})
	.on('change', callbacks.on_change)
	.on('paused', callbacks.on_pause)
	.on('active', callbacks.on_active)
	.on('error', callbacks.on_error);

	return [local_db, remote_db];
}