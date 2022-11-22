pipeline {
    agent any

    stages {
        
        stage('Build') {
            steps {
                sh'npm install'

            }
        }
         stage('Example') {
            steps {
                sh'node --version'
                
            }
        } 
        stage("Quality Gate") {
            steps {
              timeout(time: 1, unit: 'HOURS') {
                waitForQualityGate abortPipeline: true
              }
            }
          }
     }
 }
