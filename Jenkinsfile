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
    }
}
