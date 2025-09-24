/**
 * Simple supervisor for Belaynish bot
 * - Runs index.js
 * - If it exits or crashes, restarts after 2 seconds
 * - Press Ctrl+C to stop
 */

import { spawn } from 'child_process';

function start() {
  const child = spawn('node', ['index.js'], {
    stdio: 'inherit',
    shell: true
  });

  child.on('exit', (code, signal) => {
    console.log(`index.js exited with code ${code} signal ${signal}`);
    console.log('Restarting in 2 seconds...');
    setTimeout(start, 2000);
  });
}

start();
