desc('Start Nodemon server.')
task('nodemon', () => {
  jake.exec('nodemon server.js', {
    printStdout: true,
    printStderr: true
  }, complete)
})

desc('Compile the files of Concise Framework.')
task('concise', () => {
  jake.exec('concisecss compile static/styles/main.scss static/public/styles/main.css', {
    printStdout: true,
    printStderr: true
  }, complete)
})

desc('Start livereload server.')
task('livereload', () => {
  jake.exec('livereload "**/*.js, lib/views/, static/public/" -e "pug"', {
    printStdout: true,
    printStderr: true
  }, complete)
})

desc('Compile styles on file changes')
task('concise:watch', () => {
  jake.exec('chokidar "static/styles/**/*.scss" -c "jake concise"', {
    printStdout: true,
    printStderr: true
  }, complete)
})

desc('Start the development services.')
task('default', () => {
  jake.Task['nodemon'].invoke();
  jake.Task['concise'].invoke();
  jake.Task['concise:watch'].invoke();
  jake.Task['livereload'].invoke();
})
