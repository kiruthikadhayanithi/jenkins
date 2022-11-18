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
         stage('SonarQube') {
          steps {
                
                 echo "Sonarqube"
                 sonar.login=admin \
                 sonar.password=Sonarqube@123 \
                  sonar.projectKey=jenkins\
                  sonar.sources=/var/lib/jenkins/workspace/Testing git \
                  sonar.host.url=http://localhost:9000/
                }
          }
             
     }
 }
