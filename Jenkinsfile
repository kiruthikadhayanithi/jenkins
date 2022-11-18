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
          steps {
                
                 sh "sonarqube/bin/sonar-scanner \
                 -D sonar.login=admin \
                 -D sonar.password=Sonarqube@123 \
                 -D sonar.projectKey=jenkins\
                 -D sonar.sources=/var/lib/jenkins/workspace/Testing git \
                 -D sonar.host.url=http://localhost:9000/"
                }
          }
             
     }
 }
