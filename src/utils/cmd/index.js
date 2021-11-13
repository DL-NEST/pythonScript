// eslint-disable-next-line no-unused-vars
const { exec } = import('child_process')
const output = exec.spawn('ls', {
  cwd: 'C:\\Users\\dl-nest\\Desktop\\项目归档',
  killSignal: 2,
  encoding: 'utf-8',
  windowsHide: true
})

console.log(output)
