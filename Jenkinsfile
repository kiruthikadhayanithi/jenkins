pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Build') {
            steps {
                sh'npm install'

            }
        }
         stage('Example') {
            steps {
                sh'mvn --version'
                
            }
        }
         stage('SonarQube analysis') {
    def scannerHome = tool 'sonarqube';
    withSonarQubeEnv('sonarqube') {
      sh "${scannerHome}/bin/sonar-scanner \
      -D sonar.login=admin \
      -D sonar.password=Sonarqube@123 \
      -D sonar.projectKey=jenkins\
      -D sonar.host.url=http://10.0.2.15:9000/
      -D sonar.sources=/var/lib/jenkins/workspace/Testing git \"
    }
  }
    }
}
