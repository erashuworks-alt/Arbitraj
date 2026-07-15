const { spawn } = require('child_process');

const child = spawn('npm.cmd', ['run', 'dev:turbo'], {
  stdio: 'inherit',
  shell: true
});

child.on('close', (code) => {
  process.exit(code);
});
