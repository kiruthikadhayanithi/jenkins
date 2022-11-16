pipleline{

  agent any

  tools {
    nodejs 'node'
  }

  stages {
    stage("install") {
      steps {
        sh "npm install"
      }
      stage("Build") {
      steps {
        sh "npm run build"
      }
    }
  }
}