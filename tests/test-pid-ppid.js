import assert from 'tjs:assert';


(async () => {
    assert.ok(tjs.pid > 0);
    assert.ok(tjs.ppid > 0);
})();
